import React, { Component } from "react";
import AccountDetailsForm from "./generalForms/accountDetailsForm";
import UserInformationForm from "./userForms/informationForm";
import PaymentForm from "./generalForms/paymentForm";
import AgreementForm from "./userForms/agreementForm";
import {
  getCategories,
  getCreditCards,
  getDiscounts,
  getPaymentMethods
} from "../../services/fakeCategoryService";
import { userService } from "../../services/userService";
import {
  Button,
  CssBaseline,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
import { injectStripe } from "react-stripe-elements";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },

  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: blue
  }
}));

const steps = [
  { _id: 0, name: "Account Details" },
  { _id: 1, name: "User Information" },
  { _id: 2, name: "Payment Details" },
  { _id: 3, name: "Terms and Agreement" }
];

class SignupUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
    console.log(this.props);
  }

  testChange = e => {
    console.log(e);
  };

  handleChange = e => {
    console.log(this.props);
    let { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      name = value;
      value = checked;
    }
    let values = { ...this.state.values, [name]: value };
    console.log(name);
    // console.log(values);
    this.setState({
      values: { ...this.state.values, [name]: value }
    });
  };

  handleSubmit = async () => {
    const { values } = this.state;
    // const filledForm = {
    //   accountDetails: {
    //     username: values["username"],
    //     email: values["email"],
    //     password: values["password"]
    //   },
    //   userProfile: {
    //     firstName: values["firstName"],
    //     lastName: values["lastName"],
    //     birthday: values["birthdate"].toString(),
    //     contactNumber: values["contactNumber"],
    //     address1: values["addressLine1"],
    //     address2: values["addressLine2"],
    //     city: values["city"],
    //     state: "Texas",
    //     zip: values["zip"]
    //   },
    //   payment: {
    //     method: values["paymentMethod"],
    //     ccType: values["creditCardType"],
    //     subscription: 5.0,
    //     promoCode: values["promoCode"]
    //   }
    // };

    // const user = await userService.createUser(filledForm);
    // console.log(user);
    console.log(this.props.stripe);
  };

  handleDateChange = value => {
    //setSelectedDate(date);
    let values = { ...this.state.values, ["birthdate"]: value };
    console.log(values);
    this.setState({
      values: { ...this.state.values, ["birthdate"]: value }
    });
  };

  categories = [{ _id: "", value: "" }, ...getCategories()];
  creditCards = [...getCreditCards()];
  discounts = [{ _id: "", value: "" }, ...getDiscounts()];
  paymentMethods = [...getPaymentMethods()];

  render() {
    return (
      <Checkout
        categories={this.categories}
        creditCards={this.creditCards}
        discounts={this.discounts}
        paymentMethods={this.paymentMethods}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleDateChange={this.handleDateChange}
        values={this.state.values}
        testChange={this.testChange}
      />
    );
  }
}

function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = e => {
    if (activeStep === steps.length - 1) props.handleSubmit();
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Welcome to Saverscard <b>{props.values["firstName"]}</b>
                </Typography>
                <Typography variant="subtitle1">
                  Your registration number is #2001539. We have emailed your
                  registration confirmation, and will send you an update once
                  your membership has been approved.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, props)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

function getStepContent(step, props) {
  switch (step) {
    case 0:
      return (
        <AccountDetailsForm
          handleChange={props.handleChange}
          values={props.values}
        />
      );
    case 1:
      return (
        <UserInformationForm
          handleChange={props.handleChange}
          handleDateChange={props.handleDateChange}
          values={props.values}
        />
      );
    case 2:
      return (
        // <StripeProvider apiKey="pk_test_Ih8MSCvjVAgK6MgbFpo6YBio00J7ekV285">
        //   <Elements>
        <PaymentForm
          handleChange={props.handleChange}
          values={props.values}
          categories={props.categories}
          creditCards={props.creditCards}
          paymentMethods={props.paymentMethods}
          setFormComplete={() => {}}
        />
        //   </Elements>
        // </StripeProvider>
      );
    case 3:
      return (
        <AgreementForm
          handleChange={props.handleChange}
          values={props.values}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

export default injectStripe(SignupUser, { withRef: true });

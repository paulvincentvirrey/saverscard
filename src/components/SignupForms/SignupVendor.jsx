import React, { Component } from "react";
import AccountDetailsForm from "./generalForms/accountDetailsForm";
import VendorInformationForm from "./vendorForms/informationForm";
import VendorDiscountForm from "./vendorForms/discountForm";
import PaymentForm from "./generalForms/paymentForm";
import AgreementForm from "./vendorForms/agreementForm";
import {
  getCategories,
  getCreditCards,
  getDiscounts,
  getPaymentMethods
} from "../../services/fakeCategoryService";
import { vendorService } from "../../services/vendorService";
import {
  Button,
  CssBaseline,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
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
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: blue
  }
}));

const steps = [
  { _id: 0, name: "Account Details" },
  { _id: 1, name: "Vendor Details" },
  { _id: 2, name: "Vendor Discount Details" },
  { _id: 3, name: "Payment Details" },
  { _id: 4, name: "Terms and Agreement" }
];

export default class SignupVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
  }

  handleChange = ({ target }) => {
    let { name, value, type, checked } = target;
    if (type === "checkbox") {
      name = value;
      value = checked;
    }
    let values = { ...this.state.values, [name]: value };
    console.log(values);
    this.setState({
      values: { ...this.state.values, [name]: value }
    });
  };

  handleSubmit = async () => {
    const { values } = this.state;
    const filledForm = {
      accountDetails: {
        username: values["username"],
        email: values["email"],
        password: values["password"]
      },
      vendorInformation: {
        businessName: values["businessName"],
        website: values["website"],
        address1: values["address1"],
        address2: values["address2"],
        city: values["city"],
        state: "Texas",
        zip: values["zip"],
        telephone: values["telephone"],
        fax: values["fax"],
        authorizedPerson: values["authorizedPerson"],
        authorizedPersonPhone: values["authorizedPersonPhone"],
        authorizedPersonEmail: values["authorizedPersonEmail"]
      },
      vendorProfile: {
        vendorCategory: values["businessCategory"],
        discountInPercent: values["discountOffer"],
        discountToAll: values["discountCheck"],
        discountExclusions: values["discountExclusion"]
      },
      payment: {
        method: values["paymentMethod"],
        ccType: values["creditCardType"],
        subscription: 5,
        promoCode: values["promoCode"]
      }
    };

    const vendor = await vendorService.createVendor(filledForm);
    console.log(vendor);
  };

  categories = [...getCategories()];
  creditCards = [...getCreditCards()];
  discounts = [...getDiscounts()];
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
        values={this.state.values}
      />
    );
  }
}

function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
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
                  Welcome to Saverscard <b>{props.values["businessName"]}</b>
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
        <VendorInformationForm
          handleChange={props.handleChange}
          values={props.values}
        />
      );
    case 2:
      return (
        <VendorDiscountForm
          handleChange={props.handleChange}
          values={props.values}
          categories={props.categories}
          discounts={props.discounts}
        />
      );
    case 3:
      return (
        <PaymentForm
          handleChange={props.handleChange}
          values={props.values}
          categories={props.categories}
          creditCards={props.creditCards}
          paymentMethods={props.paymentMethods}
        />
      );
    case 4:
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

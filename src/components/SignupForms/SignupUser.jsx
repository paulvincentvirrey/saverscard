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
      values: [],
      errors: {}
    };
  }

  testChange = e => {
    // console.log(e);
  };

  handleChange = e => {
    let { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      name = value;
      value = checked;
    }
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
    //console.log(this.props.stripe);
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
        handleValidation={this.handleValidation}
        errors={this.state.errors}
      />
    );
  }
}

function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = e => {
    if (handleValidation(props.values, props.errors)) {
      if (activeStep === steps.length - 1) {
        console.log("no error congrats!");
        props.handleSubmit();
      } else {
        setActiveStep(activeStep + 1);
      }
    } else {
      console.log("errors!");
    }
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

function handleValidation(values, errors) {
  let formIsValid = true;

  errors = {};

  const username = values["username"];
  const email = values["email"];
  const password = values["password"];
  const confirmPassword = values["confirmPassword"];
  const lastName = values["lastName"];
  const firstName = values["firstName"];
  const birthday = values["birthday"];
  const contactNumber = values["contactNumber"];
  const addressLine1 = values["addressLine1"];
  const addressLine2 = values["addressLine2"];
  const city = values["city"];
  const zipCode = values["zip"];
  const paymentMethod = values["paymentMethod"];
  const ccType = values["ccType"];
  const promoCode = values["promoCode"];
  const agreementCheck = values["agreementCheck"];
  const esignature = values["esignature"];

  // Username
  console.log("username:" + typeof username);
  if (typeof username !== "undefined") {
    if (!username.match(/^\w+$/)) {
      errors["username"] = "Invalid username";
    }
  } else {
    errors["username"] = "Invalid username";
  }

  // Email Address
  if (typeof email !== "undefined") {
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      errors["email"] = "Invalid e-mail address";
    }
  } else {
    errors["email"] = "Invalid e-mail address";
  }

  // Password
  if (typeof password !== "undefined") {
    if (!password.match(/^(?=.*\d).{8,16}$/)) {
      errors["password"] = "Invalid password";
    }
  } else {
    errors["password"] = "Invalid password";
  }

  // Confirm Password
  if (typeof confirmPassword !== "undefined") {
    if (confirmPassword !== password) {
      errors["confirmPassword"] = "Password did not match";
    }
  } else {
    errors["confirmPassword"] = "Password did not match";
  }

  // Last Name
  if (typeof lastName === "undefined") {
    errors["lastName"] = "Invalid last name";
  }

  // // First Name
  // if (typeof firstName !== "undefined") {
  //   if (firstName === "") {
  //     errors["firstName"] = "Invalid first name";
  //   }
  // }

  // // Birthday
  // if (typeof birthday !== "undefined") {
  //   if (birthday !== "") {
  //     errors["birthday"] = "Invalid birthday";
  //   }
  // }

  // // Contact Number
  // if (typeof contactNumber !== "undefined" && contactNumber !== "") {
  //   if (!contactNumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)) {
  //     errors["contactNumber"] = "Invalid contact number";
  //   }
  // }

  // // Address Line 1
  // if (typeof addressLine1 !== "undefined") {
  //   if (addressLine1 === "") {
  //     errors["addressLine1"] = "Invalid address line 1";
  //   }
  // }

  // // Address Line 2
  // if (typeof addressLine2 !== "undefined") {
  //   if (addressLine1 === "" && addressLine2 !== "") {
  //     errors["addressLine2"] = "Please fill in address line 1";
  //   }
  // }

  // // City
  // if (typeof city !== "undefined") {
  //   if (city === "") {
  //     errors["city"] = "Invalid city";
  //   }
  // }

  // // Zip Code
  // if (typeof zipCode !== "undefined" && zipCode !== "") {
  //   if (!zipCode.toString().match(/^[7|8][0-9]{0,5}$/)) {
  //     errors["zipCode"] = "Invalid zip code";
  //   }
  // }

  // // Payment Method
  // if (typeof paymentMethod !== "undefined") {
  //   if (paymentMethod === "") {
  //     errors["paymentMethod"] = "Invalid payment method";
  //   }
  // }

  // // CC Type
  // if (typeof ccType !== "undefined" && paymentMethod === "Credit Card") {
  //   if (ccType === "") {
  //     errors["ccType"] = "Invalid credit card";
  //   } else {
  //     errors["promoCode"] = "Invalid credit card";
  //   }
  // }

  // // Promo Code
  // if (typeof promoCode !== "undefined" && paymentMethod === "Promo Code") {
  //   if (promoCode !== "") {
  //     if (!promoCode.toString().match(/^[0-9]{5,10}$/)) {
  //       errors["promoCode"] = "Invalid promo code";
  //     }
  //   } else {
  //     errors["promoCode"] = "Invalid promo code";
  //   }
  // }

  // Terms Agreement
  if (typeof agreementCheck !== "undefined") {
    if (!agreementCheck) {
      errors["agreementCheck"] = "Please check box if you want to proceed";
    }
  }

  // E-signature
  if (typeof esignature !== "undefined" && esignature === "") {
    errors["esignature"] = "Invalid e-signature";
  }

  console.log("number of errors: " + Object.keys(errors).length);
  if (Object.keys(errors).length > 0) {
    formIsValid = false;
  }
  console.log(errors);
  return formIsValid;
}

export default injectStripe(SignupUser, { withRef: true });

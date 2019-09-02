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
  getPaymentMethods,
  getSubscriptions
} from "../../services/fakeCategoryService";
import { vendorService } from "../../services/vendorService";
import {
  Button,
  CssBaseline,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import ApplicationStatus from "../admin/applicationStatus";

const useStyles = theme => ({
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
    },
    [`& fieldset`]: {
      borderRadius: 0
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
    borderRadius: 0,
    boxShadow: "none",
    fontSize: "1.1875em",
    width: 110
  }
});

const steps = [
  { _id: 0, name: "Account Details" },
  { _id: 1, name: "Vendor Details" },
  { _id: 2, name: "Vendor Discount Details" },
  { _id: 3, name: "Payment Details" },
  { _id: 4, name: "Terms and Agreement" }
];

class SignupVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      errors: {},
      activeStep: 0
    };
  }

  handleValidation = () => {
    const { values, activeStep } = this.state;
    const step = activeStep + 1;

    let formIsValid = true;

    let errors = {};

    const username = values["username"];
    const email = values["email"];
    const password = values["password"];
    const confirmPassword = values["confirmPassword"];
    const businessName = values["businessName"];
    const website = values["website"];
    const address1 = values["address1"];
    const address2 = values["address2"];
    const city = values["city"];
    const zipCode = values["zip"];
    const telephone = values["telephone"];
    const fax = values["fax"];
    const authorizedPersonEmail = values["authorizedPersonEmail"];
    const authorizedPerson = values["authorizedPerson"];
    const authorizedPersonPhone = values["authorizedPersonPhone"];
    const businessCategory = values["businessCategory"];
    const discountOffer = values["discountOffer"];
    const discountCheck = values["discountCheck"];
    const discountExclusion = values["discountExclusion"];
    const paymentMethod = values["paymentMethod"];
    const ccType = values["ccType"];
    const promoCode = values["promoCode"];
    const agreementCheck = values["agreementCheck"];
    const esignature = values["esignature"];

    if (step === 1) {
      // // Username
      // console.log("username:" + typeof username);
      // if (typeof username !== "undefined") {
      //   if (!username.match(/^\w+$/)) {
      //     errors["username"] = "Invalid username";
      //   }
      // } else {
      //   errors["username"] = "Invalid username";
      // }
      // // Email Address
      // if (typeof email !== "undefined") {
      //   if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      //     errors["email"] = "Invalid e-mail address";
      //   }
      // } else {
      //   errors["email"] = "Invalid e-mail address";
      // }
      // // Password
      // if (typeof password !== "undefined") {
      //   if (!password.match(/^(?=.*\d).{8,16}$/)) {
      //     errors["password"] = "Invalid password";
      //   }
      // } else {
      //   errors["password"] = "Invalid password";
      // }
      // // Confirm Password
      // if (typeof confirmPassword !== "undefined") {
      //   if (confirmPassword !== password) {
      //     errors["confirmPassword"] = "Password did not match";
      //   }
      // } else {
      //   errors["confirmPassword"] = "Password did not match";
      // }
    }

    if (step === 2) {
      // //Business Name
      // if (typeof businessName !== "undefined") {
      //   if (businessName === "") {
      //     errors["businessName"] = "Invalid business name";
      //   }
      // } else {
      //   errors["businessName"] = "Invalid business name";
      // }
      // // Website
      // if (typeof website !== "undefined") {
      //   if (
      //     !website.match(
      //       /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      //     )
      //   ) {
      //     errors["website"] = "Invalid website";
      //   }
      // } else {
      //   errors["website"] = "Invalid website";
      // }
      // // Address Line 1
      // if (typeof address1 !== "undefined") {
      //   if (address1 === "") {
      //     errors["address1"] = "Invalid address line 1";
      //   }
      // } else {
      //   errors["address1"] = "Invalid address line 1";
      // }
      // // Address Line 2
      // if (typeof address2 !== "undefined") {
      //   if ((address1 === "" || !address1) && address2 !== "") {
      //     errors["address2"] = "Please fill in address line 1";
      //   }
      // }
      // // City
      // if (typeof city !== "undefined") {
      //   if (city === "") {
      //     errors["city"] = "Invalid city";
      //   }
      // } else {
      //   errors["city"] = "Invalid city";
      // }
      // // Zip Code
      // if (typeof zipCode !== "undefined" && zipCode !== "") {
      //   if (!zipCode.toString().match(/^[7|8][0-9]{0,5}$/)) {
      //     errors["zipCode"] = "Invalid zip code";
      //   }
      // } else {
      //   errors["zipCode"] = "Invalid zip code";
      // }
      // // Telephone
      // if (typeof telephone !== "undefined") {
      //   if (!telephone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)) {
      //     errors["telephone"] = "Invalid telephone number";
      //   }
      // } else {
      //   errors["telephone"] = "Invalid telephone number";
      // }
      // // Fax
      // if (typeof fax !== "undefined") {
      //   if (
      //     !fax.match(
      //       /^(\+?\d{1,}(\s?|\-?)\d*(\s?|\-?)\(?\d{2,}\)?(\s?|\-?)\d{3,}\s?\d{3,})$/
      //     )
      //   ) {
      //     errors["fax"] = "Invalid fax number";
      //   }
      // } else {
      //   errors["fax"] = "Invalid fax number";
      // }
      // // Authorized Person Email
      // if (typeof authorizedPersonEmail !== "undefined") {
      //   if (
      //     !authorizedPersonEmail
      //       .toString()
      //       .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      //   ) {
      //     errors["authorizedPersonEmail"] = "Invalid e-mail address";
      //   }
      // } else {
      //   errors["authorizedPersonEmail"] = "Invalid e-mail address";
      // }
      // //Authorized Person
      // if (typeof authorizedPerson !== "undefined") {
      //   if (authorizedPerson === "") {
      //     errors["authorizedPerson"] = "Invalid name";
      //   }
      // } else {
      //   errors["authorizedPerson"] = "Invalid name";
      // }
      // // Authorized Person Phone
      // if (typeof authorizedPersonPhone !== "undefined") {
      //   if (
      //     !authorizedPersonPhone
      //       .toString()
      //       .match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      //   ) {
      //     errors["authorizedPersonPhone"] = "Invalid contact number";
      //   }
      // } else {
      //   errors["authorizedPersonPhone"] = "Invalid contact number";
      // }
    }

    if (step === 3) {
      // //Business Category
      // if (typeof businessCategory === "undefined") {
      //   errors["businessCategory"] = "Choose one category";
      // }
      // //Discount Offer
      // if (typeof discountOffer === "undefined") {
      //   errors["discountOffer"] = "Choose one offer";
      // }
      // if (!discountCheck) {
      //   if (
      //     typeof discountExclusion === "undefined" ||
      //     discountExclusion === ""
      //   ) {
      //     errors["discountExclusion"] = "Enter some rules";
      //   }
    }

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
    //}

    if (step === 5) {
      // Terms Agreement
      if (typeof agreementCheck !== "undefined") {
        if (!agreementCheck) {
          errors["agreementCheck"] = "Please check box if you want to proceed";
        }
      }

      // E-signature
      if (typeof esignature === "undefined" || esignature === "") {
        errors["esignature"] = "Invalid e-signature";
      }
    }
    console.log("number of errors: " + Object.keys(errors).length);
    if (Object.keys(errors).length > 0) {
      formIsValid = false;
    }
    this.setState({ errors });
    return formIsValid;
  };

  handleNext = () => {
    const { values, errors, activeStep } = this.state;
    if (this.handleValidation()) {
      if (activeStep === steps.length - 1) {
        console.log("no error congrats!");
        this.handleSubmit();
      } else {
        this.setState({ activeStep: this.state.activeStep + 1 });
        // setActiveStep(activeStep + 1);
      }
    } else {
      console.log("errors!");
    }
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  handleChange = ({ target }) => {
    let { name, value, type, checked } = target;
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
    const filledForm = {
      username: values["username"],
      email: values["email"],
      password: values["password"],
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
      authorizedPersonEmail: values["authorizedPersonEmail"],
      vendorCategory: values["businessCategory"],
      discountInPercent: values["discountOffer"],
      discountToAll: values["discountCheck"],
      discountExclusions: values["discountExclusion"],
      pymentMethod: values["paymentMethod"],
      applicationStatus:
        values["paymentMethod"] === "Credit Card" ? "Approved" : "For Review",
      ccType: values["creditCardType"],
      subscription: 5,
      promoCode: values["promoCode"]
    };

    const vendor = await vendorService.createVendor(filledForm);
    console.log(vendor);
  };

  categories = [...getCategories()];
  creditCards = [...getCreditCards()];
  discounts = [...getDiscounts()];
  paymentMethods = [...getPaymentMethods()];
  subscriptions = [...getSubscriptions()];

  render() {
    const { classes } = this.props;
    const { activeStep, values } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <div className={classes.paper}>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Welcome to Saverscard <b>{values["businessName"]}</b>
                  </Typography>
                  <Typography variant="subtitle1">
                    You have successfully created your account! Refresh the page
                    and sign in using your new credentials.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <GetStepContent
                    categories={this.categories}
                    creditCards={this.creditCards}
                    discounts={this.discounts}
                    paymentMethods={this.paymentMethods}
                    handleChange={this.handleChange}
                    values={this.state.values}
                    errors={this.state.errors}
                    step={this.state.activeStep}
                    subscriptions={this.subscriptions}
                  />
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

// function Checkout(props) {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);

//   return (

//   );
// }

function GetStepContent(props) {
  const { step } = props;
  switch (step) {
    case 0:
      return (
        <AccountDetailsForm
          handleChange={props.handleChange}
          values={props.values}
          errors={props.errors}
        />
      );
    case 1:
      return (
        <VendorInformationForm
          handleChange={props.handleChange}
          values={props.values}
          errors={props.errors}
        />
      );
    case 2:
      return (
        <VendorDiscountForm
          handleChange={props.handleChange}
          values={props.values}
          categories={props.categories}
          discounts={props.discounts}
          errors={props.errors}
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
          subscriptions={props.subscriptions}
          errors={props.errors}
        />
      );
    case 4:
      return (
        <AgreementForm
          handleChange={props.handleChange}
          values={props.values}
          errors={props.errors}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

export default withStyles(useStyles)(SignupVendor);

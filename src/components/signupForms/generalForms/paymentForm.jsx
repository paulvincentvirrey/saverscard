import React, { Component } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  Card
} from "@material-ui/core";
import {
  Subscriptions,
  Payment,
  CardMembership,
  CreditCard,
  Lock,
  LocalOffer,
  Business,
  CalendarToday,
  CreditCardOutlined
} from "@material-ui/icons/";
import { withStyles } from "@material-ui/core/styles";
import { StripeNumberTextField } from "../../stripeNumberTextField";
import { StripeExpiryTextField } from "../../stripeExpiryTextField";
import { StripeCVCTextField } from "../../stripeCVCTextField";
import { Calendar } from "@material-ui/pickers";

const useStyles = theme => ({
  header: {
    color: "#3f51b5",
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
  },
  icons: {
    color: "#737373"
  }
});

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCardNumberComplete: false,
      expirationDateComplete: false,
      cvcComplete: false,
      cardNameError: false,
      cardNumberError: false,
      expiredError: false,
      cvcError: false
    };
  }

  submit = async ev => {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log(token);
  };

  onElementChange = (field, errorField) => ({
    complete,
    error = { message: null }
  }) => {
    this.setState({ [field]: complete, [errorField]: error.message });
    const expectedState = { ...this.state };
    expectedState[field] = complete;
    console.log(
      expectedState.creditCardNumberComplete &&
        expectedState.cvcComplete &&
        expectedState.expirationDateComplete
    );
    this.props.setFormComplete(
      expectedState.creditCardNumberComplete &&
        expectedState.cvcComplete &&
        expectedState.expirationDateComplete
    );
  };

  renderMenuItems = items => {
    return items.map(item => (
      <MenuItem key={item._id} value={item.value}>
        {item.value}
      </MenuItem>
    ));
  };

  renderMenuItemsLabel = items => {
    return items.map(item => (
      <MenuItem key={item._id} value={item.value}>
        {item.label}
      </MenuItem>
    ));
  };

  getPaymentDisplay = props => {
    const { cardNumberError } = this.state;
    const payment = props.values["paymentMethod"];
    if (payment === "Credit Card") {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Credit Card Type"
              name="creditCardType"
              onChange={props.handleChange}
              value={
                props.values["creditCardType"]
                  ? props.values["creditCardType"]
                  : ""
              }
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardOutlined />
                  </InputAdornment>
                )
              }}
            >
              {this.renderMenuItems(props.creditCards)}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StripeNumberTextField
              // required
              id="cardNumber"
              name="cardNumber"
              error={Boolean(cardNumberError)}
              labelErrorMessage={cardNumberError}
              onChange={this.onElementChange(
                "creditCardNumberComplete",
                "cardNumberError"
              )}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardOutlined />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StripeExpiryTextField
              id="expDate"
              label="Expiry date"
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StripeCVCTextField
              id="cvc"
              label="CVC"
              helperText="Located at the back of the card, along the signature strip"
              // onChange={props.handleChange}
              // value={props.values[props.name]}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalOffer />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </React.Fragment>
      );
    }
    if (payment === "Invoice") {
      return (
        <React.Fragment>
          {/* <Button
            type="file"
            onClick={e => {
              this.refs["file-upload"].click();
            }}
          >
            Upload invoice
          </Button> */}
        </React.Fragment>
      );
    }
    if (payment === "Promo Code") {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Enter promo code"
              name="promoCode"
              onChange={props.handleChange}
              value={props.values[props.name]}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalOffer />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </React.Fragment>
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Box display="flex" justifyContent="center">
          <Typography variant="h4" className={classes.header}>
            PAYMENT DETAILS
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="subscription"
              label="Subscription"
              onChange={this.props.handleChange}
              value={
                this.props.values["subscription"]
                  ? this.props.values["subscription"]
                  : 0
              }
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment className={classes.icons} position="start">
                    <CardMembership />
                  </InputAdornment>
                )
              }}
            >
              {this.renderMenuItemsLabel(this.props.subscriptions)}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Payment Method"
              name="paymentMethod"
              onChange={this.props.handleChange}
              value={
                this.props.values["paymentMethod"]
                  ? this.props.values["paymentMethod"]
                  : ""
              }
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment className={classes.icons} position="start">
                    <Payment />
                  </InputAdornment>
                )
              }}
            >
              {this.renderMenuItems(this.props.paymentMethods)}
            </TextField>
          </Grid>

          {this.getPaymentDisplay(this.props)}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(PaymentForm);

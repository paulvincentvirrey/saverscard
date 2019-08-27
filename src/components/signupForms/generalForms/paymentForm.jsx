import React, { Component } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Grid,
  MenuItem,
  TextField,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StripeNumberTextField } from "../../stripeNumberTextField";
import { StripeExpiryTextField } from "../../stripeExpiryTextField";
import { StripeCVCTextField } from "../../stripeCVCTextField";

const useStyles = theme => ({
  header: {
    color: "#3f51b5",
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
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
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StripeExpiryTextField
              id="expDate"
              label="Expiry date"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StripeCVCTextField
              id="cvc"
              label="CVC"
              helperText="Located at the back of the card, along the signature strip"
              // onChange={props.handleChange}
              // value={props.values[props.name]}
              fullWidth
              variant="outlined"
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
          <Grid item xs={12} md={6}>
            <TextField
              label="Enter promo code"
              name="promoCode"
              onChange={props.handleChange}
              value={props.values[props.name]}
              fullWidth
              variant="outlined"
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
          <Grid item xs={12} md={6}>
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
            >
              {this.renderMenuItemsLabel(this.props.subscriptions)}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
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

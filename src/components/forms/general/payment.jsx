import React, { Component } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography
} from "@material-ui/core";
import {
  Payment,
  CardMembership,
  LocalOffer,
  CalendarToday,
  CreditCardOutlined
} from "@material-ui/icons/";
import { withStyles } from "@material-ui/core/styles";
import { StripeNumberTextField } from "../../stripeNumberTextField";
import { StripeExpiryTextField } from "../../stripeExpiryTextField";
import { StripeCVCTextField } from "../../stripeCVCTextField";
import FileUpload from "../../fileUpload";
import { injectStripe } from "react-stripe-elements";

const useStyles = theme => ({
  header: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    fontSize: "28px"
  },
  icons: {
    color: "#737373"
  }
});

class PaymentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: "",
      creditCardNumberComplete: false,
      expirationDateComplete: false,
      cvcComplete: false,
      cardNumberError: false,
      expiredError: false,
      cvcError: false
    };
  }

  generateToken = async () => {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    return token;
  };

  onElementChange = (field, errorField) => async ({
    complete,
    error = { message: null }
  }) => {
    this.setState({ [field]: complete, [errorField]: error.message });
    const expectedState = { ...this.state };
    expectedState[field] = complete;
    console.log(this.props.name);
    console.log(
      expectedState.creditCardNumberComplete &&
        expectedState.cvcComplete &&
        expectedState.expirationDateComplete
    );
    // this.props.setFormComplete(
    //   expectedState.creditCardNumberComplete &&
    //     expectedState.cvcComplete &&
    //     expectedState.expirationDateComplete
    // );

    if (
      expectedState.creditCardNumberComplete &&
      expectedState.cvcComplete &&
      expectedState.expirationDateComplete
    ) {
      const token = await this.generateToken();
      this.props.handleCCPaymentChange(token);
    }
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

  getPaymentMethod = subscription => {
    const { classes } = this.props;
    if (!subscription || subscription == 0) {
      return (
        <TextField
          disabled
          label="Payment Method"
          name="paymentMethod"
          value="Promo Code"
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.icons} position="start">
                <Payment />
              </InputAdornment>
            )
          }}
        />
      );
    }

    return (
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
    );
  };

  getPaymentDisplay = props => {
    const { classes } = this.props;
    const { cardNumberError, cardNumber } = this.state;
    const payment = props.values["paymentMethod"];
    const subscription = props.values["subscription"];
    if (subscription > 0 && payment === "Credit Card") {
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
                  <InputAdornment className={classes.icons} position="start">
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
              // onChange={props.handleChange}
              value={cardNumber}
              onChange={this.onElementChange(
                "creditCardNumberComplete",
                "cardNumberError"
              )}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment className={classes.icons} position="start">
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
              // onChange={props.handleChange}
              onChange={this.onElementChange(
                "expirationDateComplete",
                "expiredError"
              )}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment className={classes.icons} position="start">
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
              onChange={this.onElementChange("cvcComplete", "cvcError")}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment className={classes.icons} position="start">
                    <LocalOffer />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </React.Fragment>
      );
    }
    if (subscription > 0 && payment === "Invoice") {
      return (
        <Grid item xs={12}>
          <FileUpload
            name="invoice"
            value={props.values["invoice"]}
            handleChange={props.handleChange}
          />
        </Grid>
      );
    }
    if (subscription == 0) {
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
                  <InputAdornment className={classes.icons} position="start">
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
          <Typography
            align="center"
            variant="h5"
            className={classes.header}
            color="primary"
          >
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
            {this.getPaymentMethod(this.props.values["subscription"])}
          </Grid>

          {this.getPaymentDisplay(this.props)}
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(injectStripe(PaymentForm));

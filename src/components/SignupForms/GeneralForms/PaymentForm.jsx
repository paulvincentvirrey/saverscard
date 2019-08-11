import React, { Component } from "react";
import { Grid, MenuItem, TextField, Typography } from "@material-ui/core";
import { StripeNumberTextField } from "../../stripeNumberTextField";
import { StripeExpiryTextField } from "../../stripeExpiryTextField";
import { StripeCVCTextField } from "../../stripeCVCTextField";

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

  getPaymentDisplay = props => {
    const { cardNumberError } = this.state;
    const payment = props.values["paymentMethod"];
    if (payment === "Credit Card") {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              label="Credit Card Type"
              name="creditCardType"
              onChange={props.handleChange}
              value={
                props.values["creditCardType"]
                  ? props.values["creditCardType"]
                  : ""
              }
              fullWidth
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
              // fullWidth
              // component={CardNumberElement}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StripeExpiryTextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StripeCVCTextField
              required
              id="cvc"
              label="CVC"
              helperText="Located at the back of the card, along the signature strip"
              // onChange={props.handleChange}
              // value={props.values[props.name]}
              fullWidth
            />
          </Grid>
          <button onClick={this.submit}>Send</button>
        </React.Fragment>
      );
    }
    if (payment === "Invoice") {
      return (
        <React.Fragment>
          {/* <div className="file-field input-field">
            <Button waves="light" small>
              <Icon>attach_file</Icon>
              <input type="file" />
            </Button>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Please attach invoice"
              />
            </div>
          </div> */}
        </React.Fragment>
      );
    }
    if (payment === "Promo Code") {
      return (
        <React.Fragment>
          <Grid item xs={12} md={6}>
            <TextField
              required
              label="Enter promo code"
              name="promoCode"
              onChange={props.handleChange}
              value={props.values[props.name]}
              fullWidth
            />
          </Grid>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" paragraph gutterBottom>
          PAYMENT DETAILS
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              select
              required
              label="Payment Method"
              name="paymentMethod"
              onChange={this.props.handleChange}
              value={
                this.props.values["paymentMethod"]
                  ? this.props.values["paymentMethod"]
                  : ""
              }
              fullWidth
            >
              {this.renderMenuItems(this.props.paymentMethods)}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              disabled
              name="subscription"
              label="Subscription"
              value="$5/month only"
              fullWidth
            />
          </Grid>
          {this.getPaymentDisplay(this.props)}
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentForm;

// function renderMenuItems(items) {
//   return items.map(item => (
//     <MenuItem key={item._id} value={item.value}>
//       {item.value}*
//     </MenuItem>
//   ));
// }

// function getPaymentDisplay(props) {
//   const payment = props.values["paymentMethod"];
//   if (payment === "Credit Card") {
//     return (
//       <React.Fragment>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             select
//             required
//             label="Credit Card Type"
//             name="creditCardType"
//             onChange={props.handleChange}
//             value={
//               props.values["creditCardType"]
//                 ? props.values["creditCardType"]
//                 : ""
//             }
//             fullWidth
//           >
//             {renderMenuItems(props.creditCards)}
//           </TextField>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <StripeNumberTextField
//             // required
//             id="cardNumber"
//             name="cardNumber"
//             // fullWidth
//             // component={CardNumberElement}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField required id="expDate" label="Expiry date" fullWidth />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cvc"
//             label="CVC"
//             helperText="Last three digits on signature strip"
//             onChange={props.handleChange}
//             value={props.values[props.name]}
//             fullWidth
//           />
//         </Grid>
//       </React.Fragment>
//     );
//   }
//   if (payment === "Invoice") {
//     return (
//       <React.Fragment>
//         {/* <div className="file-field input-field">
//           <Button waves="light" small>
//             <Icon>attach_file</Icon>
//             <input type="file" />
//           </Button>
//           <div className="file-path-wrapper">
//             <input
//               className="file-path validate"
//               type="text"
//               placeholder="Please attach invoice"
//             />
//           </div>
//         </div> */}
//       </React.Fragment>
//     );
//   }
//   if (payment === "Promo Code") {
//     return (
//       <React.Fragment>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             label="Enter promo code"
//             name="promoCode"
//             onChange={props.handleChange}
//             value={props.values[props.name]}
//             fullWidth
//           />
//         </Grid>
//       </React.Fragment>
//     );
//   }
// }

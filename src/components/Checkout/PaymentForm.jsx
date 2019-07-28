import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        PAYMENT DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="paymentMethod"
            label="Payment Method"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            disabled
            id="subscription"
            name="subscription"
            label="Subscription"
            value="$5/month only"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function getPaymentDisplay(props) {
  let paymentMethod = props.values["Payment Method"];

  if (paymentMethod === "Credit Card") {
    return (
      <React.Fragment>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="creditCardType"
            label="Credit Card Type"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card Number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
      </React.Fragment>
    );
  }
  // if (paymentMethod === "Invoice") {
  //   return (
  //     <React.Fragment>
  //       <div className="file-field input-field">
  //         <Button waves="light" small>
  //           <Icon>attach_file</Icon>
  //           <input type="file" />
  //         </Button>
  //         <div className="file-path-wrapper">
  //           <input
  //             className="file-path validate"
  //             type="text"
  //             placeholder="Please attach invoice"
  //           />
  //         </div>
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  // if (paymentMethod === "Promo Code") {
  //   return (
  //     <TextInput
  //       icon="receipt"
  //       label="Enter Promo Code"
  //       name="Promo Code"
  //       value={props.values[props.name]}
  //       onChange={props.handleChange}
  //     />
  //   );
  // }
}

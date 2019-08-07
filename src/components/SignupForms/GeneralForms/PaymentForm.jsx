import React from "react";
import { Grid, MenuItem, TextField, Typography } from "@material-ui/core";

export default function PaymentForm(props) {
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
            onChange={props.handleChange}
            value={
              props.values["paymentMethod"] ? props.values["paymentMethod"] : ""
            }
            fullWidth
          >
            {renderMenuItems(props.paymentMethods)}
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
        {getPaymentDisplay(props)}
      </Grid>
    </React.Fragment>
  );
}

function renderMenuItems(items) {
  return items.map(item => (
    <MenuItem key={item._id} value={item.value}>
      {item.value}
    </MenuItem>
  ));
}

function getPaymentDisplay(props) {
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
            {renderMenuItems(props.creditCards)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card Number"
            onChange={props.handleChange}
            value={props.values[props.name]}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvc"
            label="CVC"
            helperText="Last three digits on signature strip"
            onChange={props.handleChange}
            value={props.values[props.name]}
            fullWidth
          />
        </Grid>
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
}

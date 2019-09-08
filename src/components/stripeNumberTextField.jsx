import React from "react";
import { CardNumberElement } from "react-stripe-elements";
import TextField from "@material-ui/core/TextField";
import StripeInput from "./stripeInput";

export function StripeNumberTextField({
  InputLabelProps,
  InputProps,
  fullWidth = true,
  label = "Credit Card Number",
  labelErrorMessage,
  error,
  ...otherProps
}) {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      helperText={error ? labelErrorMessage || `Invalid ${label}` : ""}
      error={error}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        style: { whiteSpace: "nowrap" }
      }}
      InputProps={{
        ...InputProps,
        inputProps: {
          component: CardNumberElement
        },
        inputComponent: StripeInput
      }}
      {...otherProps}
    />
  );
}

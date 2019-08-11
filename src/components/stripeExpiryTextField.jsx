import React from "react";
import { CardExpiryElement } from "react-stripe-elements";
import TextField from "@material-ui/core/TextField";
import StripeInput from "./stripeInput";

export function StripeExpiryTextField({
  InputLabelProps,
  InputProps,
  fullWidth = true,
  label = "Expiry date",
  labelErrorMessage,
  error,
  ...otherProps
}) {
  return (
    <TextField
      fullWidth={fullWidth}
      label={error ? labelErrorMessage || `Invalid ${label}` : label}
      error={error}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        style: { whiteSpace: "nowrap" }
      }}
      InputProps={{
        ...InputProps,
        inputProps: {
          component: CardExpiryElement
        },
        inputComponent: StripeInput
      }}
      {...otherProps}
    />
  );
}

import React from "react";
import { CardCVCElement } from "react-stripe-elements";
import TextField from "@material-ui/core/TextField";
import StripeInput from "./stripeInput";

export function StripeCVCTextField({
  InputLabelProps,
  InputProps,
  fullWidth = true,
  label = "CVC",
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
          component: CardCVCElement
        },
        inputComponent: StripeInput
      }}
      {...otherProps}
    />
  );
}

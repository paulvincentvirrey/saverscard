import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { MaterialUIPickers } from "../datePicker";

export default function UserInformationForm(props) {
  console.log(props.errors);
  const {
    lastName,
    firstName,
    contactNumber,
    addressLine1,
    addressLine2,
    city,
    zipCode
  } = props.errors;

  const lastNameError = lastName ? true : false;
  const firstNameError = firstName ? true : false;
  const contactNumberError = contactNumber ? true : false;
  const addressLine1Error = addressLine1 ? true : false;
  const addressLine2Error = addressLine2 ? true : false;
  const cityError = city ? true : false;
  const zipCodeError = zipCode ? true : false;

  return (
    <React.Fragment>
      <Typography variant="h5" paragraph gutterBottom>
        USER INFORMATION
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={lastNameError}
            required
            name="lastName"
            label={lastNameError ? lastName : "Last Name"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={firstNameError}
            required
            name="firstName"
            label={firstNameError ? firstName : "First Name"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MaterialUIPickers
            values={props.values}
            handleDateChange={props.handleDateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={contactNumberError}
            required
            name="contactNumber"
            label={contactNumberError ? contactNumber : "Contact Number"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={addressLine1Error}
            required
            name="addressLine1"
            label={addressLine1Error ? addressLine1 : "Address Line 1"}
            fullWidth
            autoComplete="billing address-level1"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={addressLine2Error}
            name="addressLine2"
            label={addressLine2Error ? addressLine2 : "Address Line 2"}
            fullWidth
            autoComplete="billing address-level2"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={cityError}
            required
            name="city"
            label={cityError ? city : "City"}
            fullWidth
            autoComplete="city"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="state"
            name="state"
            label="State/Province/Region"
            value="Texas"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={zipCodeError}
            required
            id="zip"
            name="zip"
            label={zipCodeError ? zipCode : "Zip / Postal code"}
            fullWidth
            autoComplete="billing postal-code"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

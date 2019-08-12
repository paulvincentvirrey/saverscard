import React, { useState } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

export default function VendorInformationForm(props) {
  const {
    businessName,
    website,
    address1,
    address2,
    city,
    zipCode,
    telephone,
    fax,
    authorizedPersonEmail,
    authorizedPerson,
    authorizedPersonPhone
  } = props.errors;
  const businessNameError = businessName ? true : false;
  const websiteError = website ? true : false;
  const address1Error = address1 ? true : false;
  const address2Error = address2 ? true : false;
  const cityError = city ? true : false;
  const zipCodeError = zipCode ? true : false;
  const telephoneError = telephone ? true : false;
  const faxError = fax ? true : false;
  const authorizedPersonEmailError = authorizedPersonEmail ? true : false;
  const authorizedPersonError = authorizedPerson ? true : false;
  const authorizedPersonPhoneError = authorizedPersonPhone ? true : false;
  console.log(businessName);
  return (
    <React.Fragment>
      <Typography variant="h5" paragraph gutterBottom>
        VENDOR INFORMATION
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            error={businessNameError}
            required
            name="businessName"
            label={businessNameError ? businessName : "Business Name"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={websiteError}
            required
            name="website"
            label={websiteError ? website : "Website"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={address1Error}
            required
            name="address1"
            label={address1Error ? address1 : "Address Line 1"}
            fullWidth
            autoComplete="billing address-line1"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={address2Error}
            name="address2"
            label={address2Error ? address2 : "Address Line 2"}
            fullWidth
            autoComplete="billing address-line2"
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
            autoComplete="billing address-level2"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
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
            name="zip"
            label={zipCodeError ? zipCode : "Zip / Postal code"}
            fullWidth
            autoComplete="billing postal-code"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={telephoneError}
            required
            name="telephone"
            label={telephoneError ? telephone : "Telephone Number"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={faxError}
            id="fax"
            name="fax"
            label={faxError ? fax : "Fax"}
            onChange={props.handleChange}
            value={props.values[props.name]}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={authorizedPersonEmailError}
            required
            name="authorizedPersonEmail"
            label={
              authorizedPersonEmailError
                ? authorizedPersonEmail
                : "E-mail Address"
            }
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={authorizedPersonError}
            required
            name="authorizedPerson"
            label={
              authorizedPersonError ? authorizedPerson : "Authorized Person"
            }
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={authorizedPersonPhoneError}
            required
            name="authorizedPersonPhone"
            label={
              authorizedPersonPhoneError
                ? authorizedPersonPhone
                : "Authorized Person Phone"
            }
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

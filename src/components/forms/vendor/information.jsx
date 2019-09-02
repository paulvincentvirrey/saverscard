import React, { useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";

import {
  Business,
  Contacts,
  ContactMail,
  ContactPhone,
  Home,
  Language,
  LocationCity,
  Map,
  Place,
  Phone,
  Print,
  BusinessCenter
} from "@material-ui/icons/";

const useStyles = makeStyles(theme => ({
  header: {
    color: "#3f51b5",
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
  },
  icons: {
    color: "#737373"
  }
}));

export default function VendorInformationForm(props) {
  const classes = useStyles();
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
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" className={classes.header}>
          VENDOR INFORMATION
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            error={businessNameError}
            name="businessName"
            label="Business Name"
            helperText={businessNameError ? businessName : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <BusinessCenter />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={websiteError}
            name="website"
            label="Website"
            helperText={websiteError ? website : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Language />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={address1Error}
            name="address1"
            label="Address Line 1"
            helperText={address1Error ? address1 : ""}
            fullWidth
            autoComplete="billing address-line1"
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Home />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={address2Error}
            name="address2"
            label="Address Line 2"
            helperText={address2Error ? address2 : ""}
            fullWidth
            autoComplete="billing address-line2"
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Home />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={cityError}
            name="city"
            label="City"
            helperText={cityError ? city : ""}
            fullWidth
            autoComplete="billing address-level2"
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <LocationCity />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            name="state"
            label="State/Province/Region"
            value="Texas"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Place />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={zipCodeError}
            name="zip"
            label="Zip / Postal code"
            helperText={zipCodeError ? zipCode : ""}
            fullWidth
            autoComplete="billing postal-code"
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Map />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={telephoneError}
            name="telephone"
            label="Telephone Number"
            helperText={telephoneError ? telephone : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Phone />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={faxError}
            id="fax"
            name="fax"
            label="Fax"
            helperText={faxError ? fax : ""}
            onChange={props.handleChange}
            value={props.values[props.name]}
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Print />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={authorizedPersonEmailError}
            name="authorizedPersonEmail"
            label="E-mail Address"
            helperText={authorizedPersonEmailError ? authorizedPersonEmail : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <ContactMail />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={authorizedPersonError}
            name="authorizedPerson"
            label="Authorized Person"
            helperText={authorizedPersonError ? authorizedPerson : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Contacts />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={authorizedPersonPhoneError}
            name="authorizedPersonPhone"
            label="Authorized Person Phone"
            helperText={authorizedPersonPhoneError ? authorizedPersonPhone : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <ContactPhone />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

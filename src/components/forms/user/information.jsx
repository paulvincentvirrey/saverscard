import React from "react";
import {
  Box,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import {
  Home,
  LocationCity,
  Map,
  Person,
  Phone,
  Place
} from "@material-ui/icons/";
import { MaterialUIPickers } from "../../../utils/datePicker";

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
  },
  icons: {
    color: "#737373"
  }
}));

export default function UserInformationForm(props) {
  const classes = useStyles();
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
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" className={classes.header} color="primary">
          USER INFORMATION
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={lastNameError}
            name="lastName"
            label="Last Name"
            helperText={lastNameError ? lastName : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values["lastName"]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Person />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={firstNameError}
            name="firstName"
            label="First Name"
            helperText={firstNameError ? firstName : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values["firstName"]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Person />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MaterialUIPickers
            name="birthdate"
            handleDateChange={props.handleDateChange}
            value={props.values["birthdate"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={contactNumberError}
            name="contactNumber"
            label="Contact Number"
            helperText={contactNumberError ? contactNumber : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values["contactNumber"]}
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
        <Grid item xs={12}>
          <TextField
            error={addressLine1Error}
            name="addressLine1"
            label="Address Line 1"
            helperText={addressLine1Error ? addressLine1 : ""}
            fullWidth
            autoComplete="billing address-level1"
            onChange={props.handleChange}
            value={props.values["addressLine1"]}
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
            error={addressLine2Error}
            name="addressLine2"
            label="Address Line 2"
            helperText={addressLine2Error ? addressLine2 : ""}
            fullWidth
            autoComplete="billing address-level2"
            onChange={props.handleChange}
            value={props.values["addressLine2"]}
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
            autoComplete="city"
            onChange={props.handleChange}
            value={props.values["city"]}
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
            id="state"
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
            id="zip"
            name="zip"
            label="Zip / Postal code"
            helperText={zipCodeError ? zipCode : ""}
            fullWidth
            autoComplete="billing postal-code"
            onChange={props.handleChange}
            value={props.values["zip"]}
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
      </Grid>
    </React.Fragment>
  );
}

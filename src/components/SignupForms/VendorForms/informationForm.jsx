import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

export default function VendorInformationForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" paragraph gutterBottom>
        VENDOR INFORMATION
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            name="businessName"
            label="Business Name"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            name="website"
            label="Website"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address1"
            label="Address Line 1"
            fullWidth
            autoComplete="billing address-line1"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address2"
            label="Address Line 2"
            fullWidth
            autoComplete="billing address-line2"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="city"
            label="City"
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
            required
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="telephone"
            label="Telephone Number"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="fax"
            name="fax"
            label="Fax"
            onChange={props.handleChange}
            value={props.values[props.name]}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="authorizedPersonEmail"
            label="E-mail Address"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="authorizedPerson"
            label="Authorized Person"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="authorizedPersonPhone"
            label="Authorized Person Phone"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

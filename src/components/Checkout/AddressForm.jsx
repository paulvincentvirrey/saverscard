import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AccountDetailsForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        VENDOR DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="businessName"
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
            id="website"
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
            id="address1"
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
            id="address2"
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
            id="city"
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
            id="state"
            name="state"
            label="State/Province/Region"
            value="Texas"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
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
            id="telephone"
            name="telephone"
            label="Telephone Number"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="fax" name="fax" label="Fax" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail Address"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="authorizedPerson"
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
            id="authorizedPersonPhone"
            name="authorizedPersonPhone"
            label="Authorized Person Phone"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

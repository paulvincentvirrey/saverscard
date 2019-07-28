import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  TextField,
  Typography
} from "@material-ui/core";

export default function AccountDetailsForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        ACCOUNT DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            autoComplete="username"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="standard-password-input"
            type="password"
            name="password"
            label="Password"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="standard-password-input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

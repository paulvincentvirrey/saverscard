import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

export default function AccountDetailsForm(props) {
  const { username, email, password, confirmPassword } = props.errors;
  const usernameError = username ? true : false;
  const emailError = email ? true : false;
  const passwordError = password ? true : false;
  const confirmPasswordError = confirmPassword ? true : false;
  return (
    <React.Fragment>
      <Typography variant="h5" paragraph gutterBottom>
        ACCOUNT DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={usernameError}
            required
            id="username"
            name="username"
            label={usernameError ? username : "Username"}
            fullWidth
            autoComplete="username"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={emailError}
            required
            id="email"
            name="email"
            label={emailError ? email : "Email Address"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={passwordError}
            required
            type="password"
            name="password"
            label={passwordError ? password : "Password"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={confirmPasswordError}
            required
            type="password"
            label={confirmPasswordError ? confirmPassword : "Confirm Password"}
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

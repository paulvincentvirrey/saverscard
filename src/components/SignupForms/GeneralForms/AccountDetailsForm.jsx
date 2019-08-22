import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  header: {
    color: blue
  }
}));

export default function AccountDetailsForm(props) {
  const classes = useStyles();
  const { username, email, password, confirmPassword } = props.errors;
  const usernameError = username ? true : false;
  const emailError = email ? true : false;
  const passwordError = password ? true : false;
  const confirmPasswordError = confirmPassword ? true : false;
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <Typography variant="h5" gutterBottom className={classes.header}>
          ACCOUNT DETAILS
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={usernameError}
            id="username"
            name="username"
            label={usernameError ? username : "Username"}
            fullWidth
            autoComplete="username"
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={emailError}
            id="email"
            name="email"
            label={emailError ? email : "Email Address"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={passwordError}
            type="password"
            name="password"
            label={passwordError ? password : "Password"}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={confirmPasswordError}
            type="password"
            label={confirmPasswordError ? confirmPassword : "Confirm Password"}
            name="confirmPassword"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

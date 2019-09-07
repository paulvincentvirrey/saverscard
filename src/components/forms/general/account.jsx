import React from "react";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";
import { AccountCircle, Email, Lock, LockOutlined } from "@material-ui/icons/";

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
  },
  icons: {
    color: "#737373"
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
        <Typography variant="h4" className={classes.header} color="primary">
          ACCOUNT DETAILS
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={usernameError}
            id="username"
            name="username"
            label="Username"
            helperText={usernameError ? username : ""}
            fullWidth
            autoComplete="username"
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={emailError}
            id="email"
            name="email"
            label="Email Address"
            helperText={emailError ? email : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Email />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={passwordError}
            type="password"
            name="password"
            label="Password"
            helperText={passwordError ? password : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Lock />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={confirmPasswordError}
            type="password"
            label="Confirm Password"
            helperText={confirmPasswordError ? confirmPassword : ""}
            name="confirmPassword"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <LockOutlined />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import React, { Component } from "react";
import {
  Button,
  Checkbox,
  CssBaseline,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";
import { Email as EmailIcon, Lock as LockIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import Header from "./landingPage/Header";
import HeaderLinks from "./landingPage/HeaderLinks";
import { authenticationService } from "./../services/authenticationService";
import { withRouter, Link as RouterLink } from "react-router-dom";

const dashboardRoutes = [];

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    [`& fieldset`]: {
      borderRadius: 0
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  icons: {
    color: "#737373"
  }
});

const GreenSwitch = withStyles({
  switchBase: {
    color: "#2e7d32",
    "&$checked": {
      color: "#2e7d32"
    },
    "&$checked + $track": {
      backgroundColor: "#2e7d32"
    }
  },
  checked: {},
  track: {}
})(Switch);

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginAs: "user",
      email: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push("/vendors");
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSwitch = ({ target }) => {
    const { checked } = target;
    console.log(checked);
    let value;
    if (checked) value = "vendor";
    else value = "user";

    this.setState({ loginAs: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password, loginAs } = this.state;

    // stop here if form is invalid
    if (!(loginAs && email && password)) {
      return;
    }

    this.setState({ loading: true });
    authenticationService.login(loginAs, email, password).then(
      x => {
        const { account } = x;
        let newRoute = "";
        if (account.role === "Admin") {
          newRoute = "/vendor/admin";
        } else {
          newRoute = "/vendors";
        }
        console.log(account);
        const { from } = this.props.history.location.state || {
          from: { pathname: newRoute }
        };
        this.props.history.push(from);
        console.log(account);
      },
      error => this.setState({ error, loading: false })
    );
  };
  render() {
    const { classes } = this.props;
    const { email, password, loginAs, submitted, loading, error } = this.state;

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Header
            color="dark"
            routes={dashboardRoutes}
            brand="SAVERSCARD"
            rightLinks={<HeaderLinks />}
            fixed
          />
          <div className={classes.paper}>
            <Typography
              align="center"
              variant="h5"
              component="h1"
              color="primary"
            >
              <b>WELCOME TO SAVERSCARD</b>
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
                value={email}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className={classes.icons} position="start">
                      <EmailIcon />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
                value={password}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className={classes.icons} position="start">
                      <LockIcon />
                    </InputAdornment>
                  )
                }}
              />
              <Grid
                component="label"
                container
                alignItems="center"
                justify="flex-end"
                spacing={1}
              >
                <Grid item>User</Grid>
                <Grid item>
                  <GreenSwitch onChange={this.handleSwitch} />
                </Grid>
                <Grid item>Vendor</Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link variant="body2" component={RouterLink} to="/signup">
                    {"Not a Saverscard member yet?"}
                    <br />
                    {"Join us for free!"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(withRouter(SignIn));

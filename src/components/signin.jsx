import React, { Component } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Switch,
  InputLabel,
  Select,
  MenuItem,
  Link
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { authenticationService } from "./../services/authenticationService";
import { withRouter } from "react-router-dom";

const useStyles = theme => ({
  paper: {
    // marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

const BlueSwitch = withStyles({
  switchBase: {
    color: blue[300],
    "&$checked": {
      color: blue[500]
    },
    "&$checked + $track": {
      backgroundColor: blue[500]
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
          newRoute = "/admin-v";
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
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <Grid
                component="label"
                container
                alignItems="center"
                justify="flex-end"
                spacing={1}
              >
                <Grid item>User</Grid>
                <Grid item>
                  <BlueSwitch onChange={this.handleSwitch} />
                </Grid>
                <Grid item>Vendor</Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
                value={password}
              />
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
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
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

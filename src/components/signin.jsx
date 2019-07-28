import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Link
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
import { userService } from "./../services/userService";

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#39ac9b"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);

    userService.logout();

    this.state = {
      email: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    this.setState({ loading: true });
    userService.login(email, password).then(
      user => {
        const { from } = this.props.location.state || {
          from: { pathname: "/vendors" }
        };
        this.props.history.push(from);
      },
      error => this.setState({ error, loading: false })
    );
  }
  render() {
    const { classes } = this.props;
    const { email, password, submitted, loading, error } = this.state;

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
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
                variant="outlined"
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

export default withStyles(useStyles)(SignIn);

import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { authenticationService } from "../services/authenticationService";
import { userService } from "../services/userService";
import moment from "react-moment";

const useStyles = theme => ({
  card: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  button: {
    marginLeft: "auto"
  }
});

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      errors: {},
      id: "",
      oldOrigPassword: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => {
      const { user } = x;

      this.setState({
        id: user["_id"],
        oldOrigPassword: user["password"]
      });
    });
  }

  handleValidation() {
    let formIsValid = true;
    const {
      oldOrigPassword,
      oldPassword,
      newPassword,
      confirmPassword
    } = this.state;

    if (typeof oldPassword !== "undefined" && confirmPassword !== "") {
      if (oldPassword !== oldOrigPassword) {
        this.state.errors["oldPassword"] = "Old password is incorrect";
      }
    }

    if (typeof newPassword !== "undefined" && newPassword !== "") {
      if (newPassword !== oldOrigPassword) {
        if (!newPassword.match(/^(?=.*\d).{8,16}$/)) {
          this.state.errors["newPassword"] = "Invalid password";
        }
      } else {
        this.state.errors["newPassword"] =
          "New password is same as old password";
      }
    }

    if (typeof confirmPassword !== "undefined" && confirmPassword !== "") {
      if (confirmPassword !== newPassword) {
        this.state.errors["confirmPassword"] = "Password did not match";
      }
    } else {
      this.state.errors["confirmPassword"] = "Password did not match";
    }

    console.log(this.state.errors);
    if (Object.keys(this.state.errors).length > 0) {
      formIsValid = false;
    }
    return formIsValid;
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async () => {
    const { newPassword, oldOrigPassword, id } = this.state;

    this.setState({
      errors: {}
    });
    console.log(this.state.errors);

    if (this.handleValidation()) {
      console.log("Congrats no errors!");
      const updatedForm = {
        currentPassword: oldOrigPassword,
        newPassword: newPassword
      };
      const user = await userService.updatePassword(id, updatedForm);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography gutterBottom paragraph variant="h5" component="h2">
                Change Password
              </Typography>
              <Typography gutterBottom paragraph variant="subtitle2">
                Use the form below to change your password. Once changed, your
                new password will be in effect next time you sign in.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="oldPassword"
                    label="Old Password"
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.oldPassword}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="newPassword"
                    label="New Password"
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.newPassword}
                    helperText="Must contain 8-16 characters"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="confirmPassword"
                    label="Confirm Password"
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
                    helperText="Must contain 8-16 characters"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                onClick={this.handleSubmit}
                className={classes.button}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </main>
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(withRouter(Password));

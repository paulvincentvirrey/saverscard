import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  Fab,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  Tooltip
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { authenticationService } from "../services/authenticationService";
import { userService } from "../services/userService";
import ApplicationStatus from "./admin/applicationStatus";
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
  fab: {
    height: 100,
    width: 100,
    marginTop: theme.spacing(-9),
    marginLeft: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    },
    borderStyle: "none"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  button: {
    marginLeft: "auto"
  }
});

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      errors: {},
      id: "",
      lastName: "",
      firstName: "",
      dateModified: "",
      username: "",
      email: "",
      password: "",
      addr1: "",
      addr2: "",
      city: "",
      zipCode: "",
      contactNumber: "",
      status: ""
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => {
      const { account } = x;

      this.setState({
        id: account._id,
        status: account.accountStatus,
        lastName: account.lastName,
        firstName: account.firstName,
        dateModified: account.dateModified,
        username: account.username,
        email: account.email,
        addr1: account.address1,
        addr2: account.address2,
        city: account.city,
        zipCode: account.zip,
        contactNumber: account.contactNumber
      });
    });
  }

  handleValidation() {
    let formIsValid = true;
    const { username, contactNumber, addr1, addr2, zipCode, city } = this.state;
    if (typeof username !== "undefined") {
      if (!username.match(/^\w+$/)) {
        this.state.errors["username"] = "Invalid username";
      }
    }

    if (typeof contactNumber !== "undefined") {
      if (
        !contactNumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ) {
        this.state.errors["contactNumber"] = "Invalid contact number";
      }
    }

    if (typeof zipCode !== "undefined") {
      console.log(typeof zipCode);
      if (!zipCode.toString().match(/^[7|8][0-9]{0,5}$/)) {
        this.state.errors["zipCode"] = "Invalid zip code";
      }
    }
    console.log(this.state.errors);

    if (Object.keys(this.state.errors).length > 0) {
      formIsValid = false;
    }
    return formIsValid;
  }

  handleChange = ({ target }) => {
    let { name, value } = target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async () => {
    const {
      username,
      contactNumber,
      addr1,
      addr2,
      city,
      zipCode,
      id
    } = this.state;

    this.setState({
      errors: {}
    });

    if (this.handleValidation()) {
      const updatedForm = {
        username: username,
        contactNumber: contactNumber,
        address1: addr1,
        address2: addr2,
        city: city,
        zip: zipCode
      };
      const user = await userService.updateUser(id, updatedForm);
      console.log(user);
    }
    this.handleClose();
  };

  handleOpen = data => {
    this.setState({ isDialogOpen: true });
  };

  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4">My Account</Typography>
            <Card className={classes.card} raised>
              <CardMedia
                component="img"
                height="100"
                image={require("../img/accountbg.png")}
              />
              <Fab
                color="primary"
                aria-label="add"
                disableRipple
                disableFocusRipple
                className={classes.fab}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {this.state.firstName + " " + this.state.lastName}
                </Typography>
                {getMembershipDisplay(
                  this.state.status,
                  this.state.dateModified
                )}
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Account Details
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="username"
                      label="Username"
                      fullWidth
                      autoComplete="username"
                      onChange={this.handleChange}
                      value={this.state.username}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      required
                      name="email"
                      label="Email Address"
                      fullWidth
                      value={this.state.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                      <Link
                        component={RouterLink}
                        variant="body2"
                        to="/changePassword"
                      >
                        Change Password
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Profile Details
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="addr1"
                      label="Address Line 1"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.addr1}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="addr2"
                      label="Address Line 2"
                      fullWidth
                      autoComplete="billing address-level2"
                      onChange={this.handleChange}
                      value={this.state.addr2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="city"
                      onChange={this.handleChange}
                      value={this.state.city}
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
                      name="zipCode"
                      label="Zip / Postal code"
                      fullWidth
                      autoComplete="billing postal-code"
                      onChange={this.handleChange}
                      value={this.state.zipCode}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Tooltip title="Numbers only">
                      <TextField
                        required
                        name="contactNumber"
                        label="Contact Number"
                        fullWidth
                        onChange={this.handleChange}
                        value={this.state.contactNumber}
                      />
                    </Tooltip>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={this.handleOpen}
              className={classes.button}
            >
              Save
            </Button>
            <div>
              <Dialog
                className={classes.table}
                open={this.state.isDialogOpen}
                onClose={this.handleClose}
              >
                <DialogContent>
                  <Typography variant="h6" component="p">
                    Do you want to save changes?
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleClose}
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

function getMembershipDisplay(status, dateModified) {
  if (status === "Approved") {
    return (
      <React.Fragment>
        <Typography variant="subtitle2" gutterBottom>
          Member Since : {dateModified}
        </Typography>

        <Typography variant="subtitle2">
          Application Status : <ApplicationStatus value={status} />
        </Typography>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Typography variant="body2" component="p">
          Application Status :
        </Typography>
        <ApplicationStatus value={status} />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(withRouter(Account));

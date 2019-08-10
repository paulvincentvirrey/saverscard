import React, { Component } from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { authenticationService } from "../services/authenticationService";
import { userService } from "../services/userService";
import ApplicationStatus from "./admin/applicationStatus";
import moment from "react-moment";
import { async } from "q";

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
    marginTop: theme.spacing(-1)
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
    authenticationService.currentUser.subscribe(user =>
      this.setState({
        id: user["_id"],
        status: user["status"],
        lastName: user["lastName"],
        firstName: user["firstName"],
        dateModified: user["dateModified"],
        username: user["username"],
        email: user["email"],
        password: user["password"],
        addr1: user["address1"],
        addr2: user["address2"],
        city: user["city"],
        zipCode: user["zip"],
        contactNumber: user["contactNumber"]
      })
    );
  }

  handleValidation() {
    let formIsValid = true;
    const updatedData = this.state;

    if (typeof updatedData.username !== "undefined") {
      if (!updatedData.username.match(/^\w+$/)) {
        this.state.errors["username"] = "Invalid username";
      }
    }
    if (typeof updatedData.password !== "undefined") {
      if (!updatedData.password.length > 8) {
        if (!updatedData.password.match(/^\w{8}$/)) {
          this.state.errors["password"] = "Invalid password";
        }
      } else {
        this.state.errors["password"] = "Password exceeded limit";
      }
    }
    if (typeof updatedData.email !== "undefined") {
      if (
        !updatedData.email.match(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        )
      ) {
        this.state.errors["email"] = "Invalid e-mail address";
      }
    }
    if (typeof updatedData.contactNumber !== "undefined") {
      if (!updatedData.contactNumber.match(/^[0-9]+$/)) {
        this.state.errors["contactNumber"] = "Invalid contact number";
      }
    }
    if (typeof updatedData.addr1 !== "undefined") {
      if (!updatedData.addr1.match(/^\w{100}$/)) {
        this.state.errors["addr1"] = "Address exceeded limit";
      }
    }
    if (typeof updatedData.addr2 !== "undefined") {
      if (!updatedData.addr2.match(/^\w{100}$/)) {
        this.state.errors["addr2"] = "Address exceeded limit";
      }
    }
    if (typeof updatedData.zipCode !== "undefined") {
      console.log(typeof updatedData.zipCode);
      if (!updatedData.zipCode.toString().match(/^[7|8][0-9]{4}$/)) {
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
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async () => {
    const updated = this.state;
    if (this.handleValidation()) {
      console.log("Congrats no errors!");
      const updatedForm = {
        accountDetails: {
          username: updated.username,
          email: updated.email,
          password: updated.password
        },
        userProfile: {
          contactNumber: updated.contactNumber,
          address1: updated.addr1,
          address2: updated.addr2,
          city: updated.city,
          zip: updated.zipCode
        }
      };
      //const user = await userService.createUser(updatedForm);
      //console.log(user);
    } else {
      console.log("You have an error");
      console.log(this.state.errors);
    }
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
                      error
                      required
                      name="username"
                      label="Username"
                      fullWidth
                      autoComplete="username"
                      onChange={this.handleChange}
                      value={this.state.username}
                      helperText={this.state.errors["username"]}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="email"
                      label="Email Address"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
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
                      name="addressLine1"
                      label="Address Line 1"
                      fullWidth
                      autoComplete="billing address-level1"
                      onChange={this.handleChange}
                      value={this.state.addr1}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="addressLine2"
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
                      onChange={this.handleChange}
                      value={this.state.zipCode}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="contactNumber"
                      label="Contact Number"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.contactNumber}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              onClick={this.handleOpen}
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
export default withStyles(useStyles)(withRouter(Account));

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

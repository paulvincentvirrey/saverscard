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
  MenuItem,
  Paper,
  TextField,
  Typography,
  Tooltip
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  getAppStatus,
  getCategories,
  getDiscounts
} from "../services/fakeCategoryService";
import { authenticationService } from "../services/authenticationService";
import { vendorService } from "../services/vendorService";
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

class VendorAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      errors: {},
      id: "",
      username: "",
      email: "",
      businessName: "",
      website: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      telephone: "",
      fax: "",
      authorizedPerson: "",
      authorizedPersonPhone: "",
      authorizedPersonEmail: "",
      // logoPath: "/img/stores/hm.png",
      vendorCategory: "",
      discountInPercent: "",
      discountToAll: "",
      applicationStatus: "",
      //dateCreated: dateCreated,
      discountExclusions: ""
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => {
      if (x) {
        const { account } = x;

        this.setState({
          id: account._id,
          username: account.username,
          email: account.email,
          businessName: account.businessName,
          website: account.website,
          address1: account.address1,
          address2: account.address2,
          city: account.city,
          state: account.state,
          zip: account.zip,
          telephone: account.telephone,
          fax: account.fax,
          authorizedPerson: account.authorizedPerson,
          authorizedPersonPhone: account.authorizedPersonPhone,
          authorizedPersonEmail: account.authorizedPersonEmail,
          // logoPath: "/img/stores/hm.png",
          accountCategory: account.accountCategory,
          discountInPercent: account.discountInPercent,
          discountToAll: account.discountToAll,
          paymentMethod: account.paymentMethod,
          ccType: account.ccType,
          applicationStatus: account.applicationStatus,
          //dateCreated: dateCreated,
          discountExclusions: account.discountExclusions
        });
      }
    });
  }

  handleValidation() {
    let formIsValid = true;
    const {
      username,
      website,
      zip,
      telephone,
      fax,
      authPersonPhone,
      authPersonEmail
      // logoPath: "/img/stores/hm.png",
    } = this.state;

    // Username
    if (typeof username !== "undefined") {
      if (!username.match(/^\w+$/)) {
        this.state.errors["username"] = "Invalid username";
      }
    } else {
      this.state.errors["username"] = "Invalid username";
    }

    // Website
    if (typeof website !== "undefined") {
      if (
        !website.match(
          /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
        )
      ) {
        this.state.errors["website"] = "Invalid website";
      }
    } else {
      this.state.errors["website"] = "Invalid website";
    }

    // Telphone
    if (typeof telephone !== "undefined") {
      if (!telephone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)) {
        this.state.errors["telephone"] = "Invalid telephone number";
      }
    } else {
      this.state.errors["telephone"] = "Invalid telephone number";
    }

    // Fax
    if (typeof fax !== "undefined") {
      if (
        !fax.match(
          /^(\+?\d{1,}(\s?|\-?)\d*(\s?|\-?)\(?\d{2,}\)?(\s?|\-?)\d{3,}\s?\d{3,})$/
        )
      ) {
        this.state.errors["fax"] = "Invalid fax number";
      }
    }

    // Zip Code
    if (typeof zip !== "undefined") {
      if (
        !zip
          .toString()
          .trim()
          .match(/^[7|8][0-9]{4}$/)
      ) {
        this.state.errors["zip"] = "Invalid zip code";
      }
    } else {
      this.state.errors["zip"] = "Invalid zip code";
    }

    // Authorized Person Email
    if (typeof authPersonEmail !== "undefined") {
      if (
        !authPersonEmail
          .toString()
          .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        this.state.errors["authPersonEmail"] =
          "Invalid authorized person e-mail address";
      }
    } else {
      this.state.errors["authPersonEmail"] =
        "Invalid authorized person e-mail address";
    }

    // Authorized Person Phone
    if (typeof authPersonPhone !== "undefined") {
      if (
        !authPersonPhone
          .toString()
          .match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ) {
        this.state.errors["authPersonPhone"] =
          "Invalid authorized person contact number";
      }
    } else {
      this.state.errors["authPersonPhone"] =
        "Invalid authorized person contact number";
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
    const {
      id,
      username,
      email,
      businessName,
      website,
      address1,
      address2,
      city,
      state,
      zip,
      telephone,
      fax,
      authPerson,
      authPersonPhone,
      authPersonEmail,
      // logoPath: "/img/stores/hm.png",
      vendorCategory,
      discountInPercent,
      discountToAll,
      applicationStatus,
      //dateCreated: dateCreated,
      discountExclusions
    } = this.state;

    this.setState({
      errors: {}
    });

    if (this.handleValidation()) {
      const updatedForm = {
        _id: id,
        username: username,
        email: email,
        businessName: businessName,
        website: website,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zip: zip,
        telephone: telephone,
        fax: fax,
        authorizedPerson: authPerson,
        authorizedPersonPhone: authPersonPhone,
        authorizedPersonEmail: authPersonEmail,
        // logoPath: "/img/stores/hm.png",
        vendorCategory: vendorCategory,
        discountInPercent: discountInPercent,
        discountToAll: discountToAll,
        applicationStatus: applicationStatus,
        //dateCreated: dateCreated,
        discountExclusions: discountExclusions
      };
      //   const user = await userService.updateUser(id, updatedForm);
      console.log(updatedForm);
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
                  {this.state.businessName}
                </Typography>
                {getMembershipDisplay(
                  this.state.applicationStatus,
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
                  Vendor Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="businessName"
                      label="Business Name"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.businessName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="website"
                      label="Website"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.website}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="address1"
                      label="Address Line 1"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.address1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="address2"
                      label="Address Line 2"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.address2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="city"
                      label="City"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.city}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      disabled
                      name="state"
                      label="State"
                      fullWidth
                      value="Texas"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="zipCode"
                      label="Zip Code"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.zipCode}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="telephone"
                      label="Telephone"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.telephone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="fax"
                      label="Fax"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.fax}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="authPersonName"
                      label="Authorized Person Name"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.authPersonName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="authPersonEmail"
                      label="Authorized Person E-mail"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.authPersonEmail}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="authPersonPhone"
                      label="Authorized Person Phone"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.authPersonPhone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      required
                      label="Vendor Category"
                      onChange={this.handleChange}
                      value={this.state.category}
                      fullWidth
                    >
                      {renderMenuItems(getCategories())}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      required
                      label="Discount Offer"
                      onChange={this.handleChange}
                      value={this.state.discount}
                      fullWidth
                    >
                      {renderMenuItems(getDiscounts())}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      disabled
                      name="discountExclusions"
                      label="Discount Exclusions"
                      fullWidth
                      value={this.state.discountExclusions}
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

function renderMenuItems(items) {
  return items.map(item => (
    <MenuItem key={item._id} value={item.value}>
      {item.value}
    </MenuItem>
  ));
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

export default withStyles(useStyles)(withRouter(VendorAccount));

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  IconButton,
  TextField,
  Typography,
  Grid
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/styles";
import {
  getAppStatus,
  getCategories,
  getDiscounts
} from "../../services/fakeCategoryService";
import { vendorService } from "../../services/vendorService";

const useStyles = theme => ({
  dialog: {
    width: "100%",
    padding: "2rem"
  }
});

class SummaryForm extends Component {
  static propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      isDialogOpen2: false,
      errors: {},
      id: "",
      status: "",
      username: "",
      email: "",
      password: "",
      businessName: "",
      website: "",
      address1: "",
      address2: "",
      city: "",
      zipCode: "",
      telephone: "",
      fax: "",
      authPersonName: "",
      authPersonEmail: "",
      authPersonPhone: "",
      category: "",
      discount: "",
      discountExclusions: "",
      paymentMethod: "",
      remarks: ""
    };
  }

  handlePopulate = () => {
    const { data } = this.props;
    let discountExclusions = data.discountExclusions;
    if (data.discountToAll) {
      discountExclusions = "None (Discount applies to all products/services)";
    }

    this.setState({
      id: data._id,
      status: data.applicationStatus,
      username: data.username,
      email: data.email,
      password: data.password,
      businessName: data.businessName,
      website: data.website,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      zipCode: data.zip,
      telephone: data.telephone,
      fax: data.fax,
      authPersonName: data.authorizedPerson,
      authPersonEmail: data.authorizedPersonEmail,
      authPersonPhone: data.authorizedPersonPhone,
      category: data.vendorCategory,
      discount: data.discountInPercent,
      discountExclusions: discountExclusions,
      paymentMethod: data.paymentMethod,
      remarks: data.remarks
    });
  };

  componentDidMount() {
    this.handlePopulate();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data._id !== prevProps.data._id) {
      this.handlePopulate();
    }
  }

  handleValidation() {
    let formIsValid = true;
    const {
      email,
      website,
      zipCode,
      telephone,
      fax,
      authPersonEmail,
      authPersonPhone
    } = this.state;

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

    // Email Address
    if (typeof email !== "undefined") {
      if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        this.state.errors["email"] = "Invalid e-mail address";
      }
    } else {
      this.state.errors["email"] = "Invalid e-mail address";
    }

    // Telephone
    if (typeof telephone !== "undefined") {
      if (!telephone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)) {
        this.state.errors["telephone"] = "Invalid telephone number";
      }
    } else {
      this.state.errors["telephone"] = "Invalid telephone number";
    }

    // Zip Code
    if (typeof zipCode !== "undefined") {
      if (
        !zipCode
          .toString()
          .trim()
          .match(/^[7|8][0-9]{4}$/)
      ) {
        this.state.errors["zipCode"] = "Invalid zip code";
      }
    } else {
      this.state.errors["zipCode"] = "Invalid zip code";
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
      status,
      username,
      email,
      businessName,
      website,
      address1,
      address2,
      city,
      zipCode,
      telephone,
      fax,
      authPersonName,
      authPersonEmail,
      authPersonPhone,
      category,
      discount,
      remarks
    } = this.state;

    this.setState({
      errors: {}
    });

    if (this.handleValidation()) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;

      const updatedForm = {
        applicationStatus: status,
        username: username,
        email: email,
        businessName: businessName,
        website: website,
        address1: address1,
        address2: address2,
        city: city,
        zip: zipCode,
        telephone: telephone,
        fax: fax,
        authorizedPerson: authPersonName,
        authorizedPersonEmail: authPersonEmail,
        authorizedPersonPhone: authPersonPhone,
        vendorCategory: category,
        discountInPercent: discount,
        remarks: remarks,
        dateModified: today
      };
      const vendor = await vendorService.updateVendor(id, updatedForm);
      console.log(vendor);
    }
    this.handleClose();
    this.handleClose2();
  };

  handleOpen = data => {
    this.setState({ isDialogOpen: true });
  };

  handleOpen2 = data => {
    this.setState({ isDialogOpen2: true });
  };

  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  handleClose2 = () => {
    this.setState({ isDialogOpen2: false });
  };

  render() {
    const { data, classes } = this.props;
    return (
      <FormControl>
        <IconButton aria-label="edit" onClick={() => this.handleOpen(data)}>
          <EditIcon fontSize="small" />
        </IconButton>
        <Dialog
          className={classes.table}
          open={this.state.isDialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Information Summary : {this.state.businessName}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  name="status"
                  label="Application Status"
                  onChange={this.handleChange}
                  value={this.state.status}
                  fullWidth
                >
                  {renderMenuItems(getAppStatus())}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="remarks"
                  label="Remarks"
                  onChange={this.handleChange}
                  value={this.state.remarks}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="username"
                  label="Username"
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  name="email"
                  label="Email"
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
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
                  name="category"
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
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  name="Payment Method"
                  label="Payment Method"
                  fullWidth
                  value={this.state.paymentMethod}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleOpen2}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <div>
          <Dialog
            className={classes.table}
            open={this.state.isDialogOpen2}
            onClose={this.handleClose2}
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
                onClick={this.handleClose2}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </FormControl>
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

export default withStyles(useStyles)(SummaryForm);

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
import { getAppStatus } from "../../services/fakeCategoryService";
import { userService } from "../../services/userService";

const useStyles = theme => ({
  dialog: {
    width: "100%",
    padding: "2rem"
  }
});

class SummaryFormUsers extends Component {
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
      lastName: "",
      firstName: "",
      username: "",
      address1: "",
      address2: "",
      city: "",
      zipCode: "",
      contactNumber: "",
      paymentMethod: "",
      remarks: ""
    };
  }

  componentDidMount() {
    const { data } = this.props;

    this.setState({
      id: data._id,
      status: data.accountStatus,
      username: data.username,
      email: data.email,
      lastName: data.lastName,
      firstName: data.firstName,
      username: data.username,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      zipCode: data.zip,
      contactNumber: data.contactNumber,
      paymentMethod: data.paymentMethod,
      remarks: data.remarks
    });
  }

  handleValidation() {
    let formIsValid = true;
    const { username, email, zipCode, contactNumber } = this.state;

    // Username
    if (typeof username !== "undefined") {
      if (!username.match(/^[a-zA-Z0-9]{1,20}$/)) {
        this.state.errors["username"] = "Invalid username";
      }
    }

    // Email Address
    if (typeof email !== "undefined") {
      if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        this.state.errors["email"] = "Invalid e-mail address";
      }
    }

    // Contact Number
    if (typeof contactNumber !== "undefined") {
      if (
        !contactNumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ) {
        this.state.errors["contactNumber"] = "Invalid contact number";
      }
    }
    // Zip Code
    if (typeof zipCode !== "undefined") {
      if (
        !zipCode
          .toString()
          .trim()
          .match(/^[7|8][0-9]{0,5}$/)
      ) {
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
    const {
      id,
      status,
      email,
      lastName,
      firstName,
      username,
      address1,
      address2,
      city,
      zipCode,
      contactNumber,
      remarks
    } = this.state;

    console.log(remarks);
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
        _id: id,
        accountStatus: status,
        dateModified: today,
        username: username,
        email: email,
        lastName: lastName,
        firstName: firstName,
        address1: address1,
        address2: address2,
        city: city,
        zip: zipCode,
        contactNumber: contactNumber,
        remarks: remarks
      };
      const user = await userService.updateUser(id, updatedForm);
      console.log(user);
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
            Information Summary :{" "}
            {this.state.firstName + " " + this.state.lastName}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  label="Application Status"
                  onChange={this.handleChange}
                  value={this.state.status ? this.state.status : ""}
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
                  disabled
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  name="firstName"
                  label="First Name"
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.firstName}
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
                  name="contactNumber"
                  label="Contact Number"
                  fullWidth
                  onChange={this.handleChange}
                  value={this.state.contactNumber}
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

export default withStyles(useStyles)(SummaryFormUsers);

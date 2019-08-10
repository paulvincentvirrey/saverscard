import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Container,
  Grid
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";
import VendorInformation from "../signupForms/vendorForms/informationForm";
import { getAppStatus } from "../../services/fakeCategoryService";

const useStyles = makeStyles(theme => ({
  dialog: {
    width: "100%",
    padding: "2rem"
  }
}));

class EditButton2 extends Component {
  static propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
      updatedValues: []
    };
  }

  appStatus = getAppStatus();

  handleChange = ({ target }) => {
    let { name, value, type, checked } = target;
    if (type === "checkbox") {
      name = value;
      value = checked;
    }
    let values = { ...this.state.values, [name]: value };
    console.log(values);
    this.setState({
      values: { ...this.state.values, [name]: value }
    });
  };

  handleOpen = data => {
    console.log(data);
    this.setState({ isDialogOpen: true });
  };

  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    const { data } = this.props;

    return (
      <FormControl>
        <IconButton aria-label="edit" onClick={() => this.handleOpen(data)}>
          <EditIcon fontSize="small" />
        </IconButton>
        <DisplayDialog
          data={data}
          isDialogOpen={this.state.isDialogOpen}
          handleClose={this.handleClose}
          statusList={this.appStatus}
        />
      </FormControl>
    );
  }
}

function DisplayDialog(props) {
  const classes = useStyles();

  const { isDialogOpen, handleClose, data, statusList, handleChange } = props;
  return (
    <Dialog
      className={classes.table}
      open={isDialogOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Application Review</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="lastName"
              label="Last Name"
              fullWidth
              onChange={props.handleChange}
              value={data.lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="firstName"
              label="First Name"
              fullWidth
              onChange={props.handleChange}
              value={data.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              disabled
              name="paymentMethod"
              label="Payment Method"
              fullWidth
              // onChange={props.handleChange}
              value={data.paymentMethod}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              required
              label="Application Status"
              //onChange={props.handleChange}
              value={data.status}
              fullWidth
            >
              {renderMenuItems(statusList)}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="remarks"
              label="Remarks"
              fullWidth
              // onChange={props.handleChange}
              value={data.remarks}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function renderMenuItems(items) {
  console.log(items);
  return items.map(item => (
    <MenuItem key={item._id} value={item.value}>
      {item.value}
    </MenuItem>
  ));
}

export default EditButton2;

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  MenuItem,
  IconButton,
  Input,
  TextField
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import VendorInformation from "../signupForms/vendorForms/informationForm";

class EditButton extends Component {
  static propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
    };
  }

  handleChange = data => {
    // editVendor(data);
    console.log(data);
    this.setState({ isDialogOpen: true });
  };

  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    const { data } = this.props;
    const appStatus = [
      { _id: 1, value: "Approved" },
      { _id: 2, value: "Pending Requirements" },
      { _id: 3, value: "Rejected" }
    ];
    return (
      <FormControl>
        <IconButton aria-label="edit" onClick={() => this.handleChange(data)}>
          <EditIcon fontSize="small" />
        </IconButton>
        <DisplayDialog
          data={data}
          isDialogOpen={this.state.isDialogOpen}
          handleClose={this.handleClose}
          statusList={appStatus}
        />
      </FormControl>
    );
  }
}

function DisplayDialog(props) {
  const { isDialogOpen, handleClose, data, statusList } = props;
  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Application Review</DialogTitle>
      <DialogContent>
        <Grid>
          <TextField
            autoFocus
            label="Business Name"
            value={data.name}
            fullWidth
          />
          <TextField
            select
            required
            label="Application Status"
            //onChange={props.handleChange}
            // value={props.values["paymentMethod"]}
            value={data.status}
            fullWidth
          >
            {renderMenuItems(statusList)}
          </TextField>
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

export default EditButton;

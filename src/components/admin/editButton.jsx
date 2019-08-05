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

  appStatus = getAppStatus();

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

    return (
      <FormControl>
        <IconButton aria-label="edit" onClick={() => this.handleChange(data)}>
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

  const { isDialogOpen, handleClose, data, statusList } = props;
  return (
    <Dialog
      className={classes.table}
      open={isDialogOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Application Review</DialogTitle>
      <DialogContent>
        <Container>
          <Grid>
            <TextField
              required
              name="businessName"
              label="Business Name"
              fullWidth
              // onChange={props.handleChange}
              value={data.name}
            />
          </Grid>
          <Grid>
            <TextField
              required
              name="discountRate"
              label="Discount Rate"
              fullWidth
              // onChange={props.handleChange}
              value={data.discountRate}
            />
          </Grid>
          <Grid>
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
          <Grid>
            <TextField
              required
              name="remarks"
              label="Remarks"
              fullWidth
              // onChange={props.handleChange}
              value={data.remarks}
            />
          </Grid>
        </Container>
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

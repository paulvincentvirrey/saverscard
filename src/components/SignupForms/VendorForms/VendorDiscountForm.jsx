import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography
} from "@material-ui/core";

export default function VendorDiscountForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" paragraph gutterBottom>
        VENDOR DISCOUNT OFFER
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            select
            required
            label="Business Category"
            name="businessCategory"
            onChange={props.handleChange}
            value={props.values["businessCategory"]}
            fullWidth
          >
            {renderMenuItems(props.categories)}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            required
            name="discountOffer"
            label="Discount Offer"
            onChange={props.handleChange}
            value={props.values["discountOffer"]}
            fullWidth
          >
            {renderMenuItems(props.discounts)}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.values[props.name]}
                onChange={props.handleChange}
                value="discountCheck"
              />
            }
            label="Discount applies to ALL products."
          />
        </Grid>
        {getDiscountDisplay(props)}
      </Grid>
    </React.Fragment>
  );
}

function renderMenuItems(items) {
  return items.map(item => (
    <MenuItem key={item._id} value={item.value}>
      {item.value}
    </MenuItem>
  ));
}

function getDiscountDisplay(props) {
  const checked = props.values["discountCheck"];
  if (!checked) {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            name="discountExclusion"
            label="Discount Exclusion"
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

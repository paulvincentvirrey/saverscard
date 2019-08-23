import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    color: "#3f51b5",
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
  }
}));

export default function VendorDiscountForm(props) {
  const classes = useStyles();
  const { businessCategory, discountOffer } = props.errors;
  const businessCategoryError = businessCategory ? true : false;
  const discountOfferError = discountOffer ? true : false;
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" className={classes.header}>
          VENDOR DISCOUNT OFFER
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            error={businessCategoryError}
            select
            required
            label="Business Category"
            helperText={businessCategoryError ? businessCategory : ""}
            name="businessCategory"
            onChange={props.handleChange}
            value={
              props.values["businessCategory"]
                ? props.values["businessCategory"]
                : ""
            }
            fullWidth
            variant="outlined"
          >
            {renderMenuItems(props.categories)}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            error={discountOfferError}
            select
            required
            name="discountOffer"
            label="Discount Offer"
            helperText={discountOfferError ? discountOffer : ""}
            onChange={props.handleChange}
            value={
              props.values["discountOffer"] ? props.values["discountOffer"] : ""
            }
            fullWidth
            variant="outlined"
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
      {item.label}
    </MenuItem>
  ));
}

function getDiscountDisplay(props) {
  const { discountExclusion } = props.errors;
  const discountExclusionError = discountExclusion ? true : false;
  const checked = props.values["discountCheck"];
  if (!checked) {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={12}>
          <TextField
            error={discountExclusionError}
            name="discountExclusion"
            label="Discount Exclusion"
            helperText={discountExclusionError ? discountExclusion : ""}
            fullWidth
            onChange={props.handleChange}
            value={props.values[props.name]}
            variant="outlined"
          />
        </Grid>
      </React.Fragment>
    );
  }
}

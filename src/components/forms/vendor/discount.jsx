import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";

import { Category, LocalOffer, Block } from "@material-ui/icons/";

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: "bold",
    marginBottom: theme.spacing(6)
  },
  icons: {
    color: "#737373"
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
        <Typography variant="h4" className={classes.header} color="primary">
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
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <Category />
                </InputAdornment>
              )
            }}
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
            InputProps={{
              startAdornment: (
                <InputAdornment className={classes.icons} position="start">
                  <LocalOffer />
                </InputAdornment>
              )
            }}
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
                color="primary"
              />
            }
            label="DISCOUNT APPLIES TO ALL PRODUCTS."
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Block />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

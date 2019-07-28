import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Sort as SortIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(1),
    minWidth: 120
  },
  icon: {
    fontSize: 35
  }
}));

const Sort = ({ name, value, title, handleChange }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={1}>
        <SortIcon className={classes.icon} />
      </Grid>
      <Grid item xs={11}>
        <FormControl className={classes.root}>
          <InputLabel htmlFor="sort-select">{title}</InputLabel>
          <Select
            value={value}
            onChange={handleChange}
            inputProps={{
              name: name,
              id: "sort-select"
            }}
          >
            <MenuItem value="store">Store</MenuItem>
            <MenuItem value="recent">Recently Added</MenuItem>
            <MenuItem value="discount">Discount</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Sort;

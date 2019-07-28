import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FilterList as FilterListIcon } from "@material-ui/icons";

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

const Filter = ({ items, name, value, title, handleChange }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={1}>
        <FilterListIcon className={classes.icon} />
      </Grid>
      <Grid item xs={11}>
        <FormControl className={classes.root}>
          <InputLabel htmlFor="filter-select">{title}</InputLabel>
          <Select
            value={value}
            onChange={handleChange}
            inputProps={{
              name: name,
              id: "filter-select"
            }}
          >
            {items.map(item => (
              <MenuItem key={item._id} value={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filter;

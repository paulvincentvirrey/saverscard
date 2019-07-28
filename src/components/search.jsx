import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 35
  },
  search: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const Search = ({ name, value, handleChange }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item xs={1}>
        <SearchIcon className={classes.icon} />
      </Grid>
      <Grid item xs={11}>
        <TextField
          id="input-with-icon-grid"
          label="Search"
          className={classes.search}
          value={value}
          onChange={handleChange}
          name={name}
        />
      </Grid>
    </Grid>
  );
};

export default Search;

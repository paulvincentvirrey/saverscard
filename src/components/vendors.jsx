import React, { Component } from "react";
import { Container, CssBaseline, Grid, withStyles } from "@material-ui/core";
import Filter from "./filter";
import Sort from "./sort";
import Search from "./search";
import VendorGrid from "./vendorGrid";
import { getCategories } from "../services/fakeCategoryService";
import { getVendors } from "./../services/fakeVendorService";
import "../css/vendors.css";

const useStyles = theme => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  functions: {
    paddingBottom: theme.spacing(3)
  }
});

class Vendors extends Component {
  state = {
    vendors: [],
    categories: [],
    category: "",
    sortBy: "",
    search: ""
  };

  componentDidMount() {
    const categories = [
      { _id: 0, value: "All Categories" },
      ...getCategories()
    ];
    this.setState({ vendors: getVendors(), categories });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  getProcessedData = () => {
    const { category, sortBy, search, vendors: allVendors } = this.state;

    console.log(allVendors);

    let filtered = allVendors;
    if (search) {
      filtered = filtered.filter(v =>
        v.name.toLowerCase().startsWith(search.toLowerCase())
      );
    }

    if (category) {
      if (category !== "All Categories") {
        filtered = filtered.filter(v =>
          v.category.toLowerCase().startsWith(category.toLowerCase())
        );
      }
    }

    return { data: filtered };
  };

  render() {
    const { classes } = this.props;
    const { categories, category, sortBy, search } = this.state;

    const { data: vendors } = this.getProcessedData();

    return (
      <Container className={classes.container} maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={3} className={classes.functions}>
          <Grid item xs={12} md={4}>
            <Filter
              name="category"
              title="Category"
              items={categories}
              value={category}
              handleChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sort
              name="sortBy"
              title="Sort By"
              value={sortBy}
              handleChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Search
              name="search"
              value={search}
              handleChange={this.handleChange}
            />
          </Grid>
        </Grid>
        <VendorGrid vendors={vendors} />
      </Container>
    );
  }
}

export default withStyles(useStyles)(Vendors);

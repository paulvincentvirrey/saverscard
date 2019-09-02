import React, { Component } from "react";
import Filter from "../components/filter";
import Search from "../components/search";
import Sort from "../components/sort";
import VendorCard from "./vendorCard";
import { Container, CssBaseline, Grid, withStyles } from "@material-ui/core";
import { getCategories } from "../services/fakeCategoryService";
import { getVendors } from "./../services/fakeVendorService";
import { vendorService } from "./../services/vendorService";

const useStyles = theme => ({
  container: {
    paddingTop: theme.spacing(4),
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
    let vendorList = [];
    vendorService.getAll().then(vendors => {
      this.setState({ vendors });
    });

    this.setState({ categories });
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
        v.businessName.toLowerCase().startsWith(search.toLowerCase())
      );
    }

    if (category) {
      if (category !== "All Categories") {
        filtered = filtered.filter(v =>
          v.vendorCategory.toLowerCase().startsWith(category.toLowerCase())
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
        <Grid container spacing={4}>
          {vendors.map(vendor => (
            <Grid item key={vendor._id} xs={12} sm={6} md={4}>
              <VendorCard vendor={vendor} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Vendors);

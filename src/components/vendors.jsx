import React, { Component } from "react";
import Filter from "./filter";
import Sort from "./sort";
import Search from "./search";
import VendorGrid from "./vendorGrid";
import { getCategories } from "../services/fakeCategoryService";
import { getVendors } from "./../services/fakeVendorService";
import "../css/vendors.css";

class Vendors extends Component {
  state = {
    vendors: [],
    categories: []
  };

  componentDidMount() {
    const categories = [{ _id: 0, name: "All Categories" }, ...getCategories()];
    this.setState({ vendors: getVendors(), categories });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l2 m12 s12">
            <Filter categories={this.state.categories} />
          </div>
          <div className="col l2 m12 s12">
            <Sort />
          </div>
          <div className="col l4 offset-l4 m12 s12 ">
            <Search />
          </div>
        </div>
        <div className="row">
          <VendorGrid vendors={this.state.vendors} />
        </div>
      </div>
    );
  }
}

export default Vendors;

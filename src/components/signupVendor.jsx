import React, { Component } from "react";
import { getPaymentMethods } from "../services/fakeCategoryService";
import Checkout from "./Checkout/Checkout";

class SignupVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
  }

  paymentMethods = [{ _id: 0, name: "" }, ...getPaymentMethods()];

  handleChange = ({ target }) => {
    let { name, value, type, checked } = target;
    if (type === "checkbox") {
      name = value;
      value = checked;
    }
    let values = { ...this.state.values, [name]: value };
    console.log(values);
    this.setState({
      values: { ...this.state.values, [name]: value }
    });
  };

  render() {
    return (
      <Checkout
        paymentMethods={this.paymentMethods}
        handleChange={this.handleChange}
        values={this.state.values}
      />
    );
  }
}

export default SignupVendor;

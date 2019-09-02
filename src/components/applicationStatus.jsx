import React, { Component } from "react";
import PropTypes from "prop-types";
import { Chip, FormControl } from "@material-ui/core";

class ApplicationStatus extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  };

  getChip(value) {
    let result;
    if (value === "Approved") {
      result = (
        <Chip
          size="small"
          label={value}
          style={{ backgroundColor: "#5FBA7D", color: "white" }}
        />
      );
    } else if (value === "For Review") {
      result = <Chip size="small" label={value} color="primary" />;
    } else if (value === "Pending Requirements") {
      result = (
        <Chip
          size="small"
          label={value}
          style={{ backgroundColor: "#F5C330", color: "white" }}
        />
      );
    } else if (value === "Rejected") {
      result = (
        <Chip
          size="small"
          label={value}
          style={{ backgroundColor: "#F55D30", color: "white" }}
        />
      );
    }

    return result;
  }

  render() {
    const { value } = this.props;
    return <FormControl>{this.getChip(value)}</FormControl>;
  }
}

export default ApplicationStatus;

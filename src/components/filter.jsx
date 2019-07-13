import React, { Component } from "react";
import { Select } from "react-materialize";

const Filter = ({ categories, textProperty, valueProperty }) => {
  return (
    <div className="row">
      <Select s={12} defaultValue="default" icon="filter_list">
        <option key="default" value="default" disabled>
          Category
        </option>
        {categories.map(category => (
          <option key={category[valueProperty]} value={category[valueProperty]}>
            {category[textProperty]}
          </option>
        ))}
      </Select>
    </div>
  );
};

Filter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Filter;

import React, { Component } from "react";
import { Select } from "react-materialize";

const Sort = () => {
  return (
    <Select defaultValue="default" icon="sort">
      <option value="default" disabled>
        Sort By
      </option>
      <option value="store">Store</option>
      <option value="recent">Recently Added</option>
      <option value="discount">Discount</option>
    </Select>
  );
};

export default Sort;

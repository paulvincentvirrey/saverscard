import React, { Component } from "react";
import { TextInput } from "react-materialize";

const Search = () => {
  return (
    <div className="row">
      <TextInput s={12} l={12} icon="search" label="Search" />
    </div>
  );
};

export default Search;

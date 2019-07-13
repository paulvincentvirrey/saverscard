import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import Vendors from "./components/vendors";
import Filter from "./components/filter";
import UserSignUp from "./components/signup_user";
import MapModal from "./components/mapModal";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Vendors />
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import UserSignUp from "./components/signup_user";
import Counters from "./components/counters";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        {/* <NavBar />
        <Footer /> */}
        <Login />
      </React.Fragment>
    );
  }
}

export default App;

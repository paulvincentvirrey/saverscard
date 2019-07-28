import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Vendors from "./components/vendors";
import Filter from "./components/filter";
import UserSignUp from "./components/signupUser";
import MapModal from "./components/mapModal";
import Home from "./components/home";
import SignupUser from "./components/signupUser";
import SignupVendor from "./components/SignupVendor";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/services" component={Footer} />
          <Route path="/signin" component={SignIn} />
          <Route path="/contact" component={Vendors} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signupUser" component={SignupUser} />
          <Route path="/signupVendor" component={SignupVendor} />
          <Route path="/vendors" component={Vendors} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

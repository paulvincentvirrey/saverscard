import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SignIn from "./components/signin";
import Vendors from "./components/vendors";
import Filter from "./components/filter";
import UserSignUp from "./components/signup_user";
import MapModal from "./components/mapModal";
import Home from "./components/home";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          {/* <Route path="/services" component={Footer} />
          <Route path="/about" component={Login} />
          <Route path="/contact" component={Vendors} /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/vendors" component={Vendors} /> */}
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

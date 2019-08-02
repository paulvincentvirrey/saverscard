import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Vendors from "./components/vendors";
import Home from "./components/home";
import SignupUser from "./components/SignupForms/SignupUser";
import SignupVendor from "./components/SignupForms/SignupVendor";
import PrivateRoute from "./components/privateRoute";
import { history } from "./helpers/history";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <NavBar />
          <Switch>
            <PrivateRoute path="/vendors" component={Vendors} />
            <Route path="/services" component={Footer} />
            <Route path="/signin" component={SignIn} />
            <Route path="/contact" component={Vendors} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signupUser" component={SignupUser} />
            <Route path="/signupVendor" component={SignupVendor} />
            <Route path="/" component={Home} />
          </Switch>
          {/* <Footer /> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

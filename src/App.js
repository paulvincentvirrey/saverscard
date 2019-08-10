import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Vendors from "./components/vendors";
import Home from "./components/home";
import SignupUser from "./components/signupForms/signupUser";
import SignupVendor from "./components/signupForms/signupVendor";
import Admin from "./components/admin/admin";
import AdminUsers from "./components/admin/adminUsers";
import Account from "./components/account";
import PrivateRoute from "./components/privateRoute";
import { history } from "./helpers/history";
import Password from "./components/changePassword";

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
            <PrivateRoute path="/account" component={Account} />
            <PrivateRoute path="/admin" roles={["Admin"]} component={Admin} />
            <PrivateRoute path="/changePassword" component={Password} />
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

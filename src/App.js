import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Account from "./components/forms/account";
import AdminUsers from "./components/admin/adminUsers";
import AdminVendors from "./components/admin/adminVendors";
import Footer from "./components/footer";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Password from "./components/forms/changePassword";
import PrivateRoute from "./components/privateRoute";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import SignupUser from "./components/forms/signupUser";
import SignupVendor from "./components/forms/signupVendor";
import VendorAccount from "./components/vendorAccount";
import Vendors from "./views/vendors";
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
            <PrivateRoute path="/account" component={Account} />
            <PrivateRoute
              path="/v/admin"
              roles={["Admin"]}
              component={AdminVendors}
            />
            <PrivateRoute
              path="/u/admin"
              roles={["Admin"]}
              component={AdminUsers}
            />
            <PrivateRoute path="/changePassword" component={Password} />
            <PrivateRoute path="/account-v" component={VendorAccount} />
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
      // <StripeProvider apiKey="pk_test_Ih8MSCvjVAgK6MgbFpo6YBio00J7ekV285">
      //   <div className="example">
      //     <h1>React Stripe Elements Example</h1>
      //     <Elements>
      //       <CheckoutForm />
      //     </Elements>
      //   </div>
      // </StripeProvider>
    );
  }
}

export default App;

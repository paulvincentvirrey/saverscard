import React, { Component } from "react";
import {
  CardPanel,
  Row,
  Col,
  TextInput,
  Checkbox,
  Button
} from "react-materialize";
import "../css/login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col m={6} s={12}>
          <CardPanel
          // actions={[<a />, <a />]}
          >
            <div className="row">
              <div className="input-field col s12">
                <h5 className="login-title">Sign In</h5>
              </div>
            </div>
            <div className="row no-margin">
              <TextInput s={12} icon="email" label="Email" email validate />
            </div>
            <div className="row no-margin">
              <TextInput s={12} icon="lock" label="Password" password />
            </div>
            <div className="row">
              <div className="col remember-me">
                <Checkbox value="remember" label="Remember Me" />
              </div>
            </div>
            <div className="row no-margin">
              <div className="input-field col s12">
                <Button className="login-button" type="submit" waves="light">
                  Login
                </Button>
              </div>
            </div>
            <div className="row no-margin">
              <div className="input-field col s6 m6 l6">
                <p>
                  <a href="#">Register Now!</a>
                </p>
              </div>
              <div className="input-field col s6 m6 l6">
                <p className="right-align">
                  <a href="#">Forgot password ?</a>
                </p>
              </div>
            </div>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

export default Login;

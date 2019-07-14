import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  CardPanel,
  Row,
  Col,
  TextInput,
  Checkbox,
  Button
} from "react-materialize";
import "../css/signin.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { email: "", password: "", rememberMe: false },
      email: "",
      password: "",
      rememberMe: false
    };
  }

  handleInputChange = ({ target }) => {
    const account = { ...this.state.account };
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.type === "checkbox" ? target.value : target.name;
    account[name] = value;

    this.setState({ account });

    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.history.push("/vendors");
  };
  render() {
    const { account } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Row className="container">
          <Col m={6} s={12} className="offset-m3">
            <CardPanel>
              <Row>
                <Col s={12}>
                  <h5 className="signin-title">Sign In</h5>
                </Col>
              </Row>
              <Row className="no-margin">
                <TextInput
                  s={12}
                  icon="email"
                  label="Email"
                  name="email"
                  value={account.email}
                  onChange={this.handleInputChange}
                  email
                  validate
                />
              </Row>
              <Row className="no-margin">
                <TextInput
                  s={12}
                  icon="lock"
                  label="Password"
                  name="password"
                  value={account.password}
                  onChange={this.handleInputChange}
                  password
                />
              </Row>
              <Row>
                <Col className="remember-me">
                  <Checkbox
                    value="rememberMe"
                    checked={account.rememberMe}
                    onChange={this.handleInputChange}
                    label="Remember Me"
                  />
                </Col>
              </Row>
              <Row className="no-margin">
                <Col s={12} className="input-field">
                  <Button className="signin-button" type="submit" waves="light">
                    Sign In
                  </Button>
                </Col>
              </Row>
              <Row className="no-margin">
                <Col s={6} m={6} l={6} className="input-field">
                  <p>
                    <a href="#">Register Now!</a>
                  </p>
                </Col>
                <Col s={6} m={6} l={6} className="input-field">
                  <p className="right-align">
                    <a href="#">Forgot password ?</a>
                  </p>
                </Col>
              </Row>
            </CardPanel>
          </Col>
        </Row>
      </form>
    );
  }
}

export default SignIn;

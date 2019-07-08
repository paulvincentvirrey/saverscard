import React, { Component } from "react";
import { Card, Row, Col } from "react-materialize";
import "../css/login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col m={6} s={12}>
          <Card
            className="blue-grey darken-1"
            textClassName="white-text"
            title="Card title"
            actions={[<a />, <a />]}
          >
            I am a very simple card.
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;

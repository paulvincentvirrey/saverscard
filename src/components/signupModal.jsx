import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Modal, Row, Col } from "react-materialize";

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({
      showModal: this.state.showModal
    });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          header="WELCOME! REGISTER AS:"
          fixedFooter
          trigger={<Link to="/">Sign Up</Link>}
          open={this.state.showModal}
        >
          <Row>
            <Col s={6}>
              <Link to={this.props.userRoute}>
                <Card title="User" id="cardUser" onClick={this.close} />
              </Link>
            </Col>
            <Col s={6}>
              <Link to={this.props.vendorRoute}>
                <Card title="Vendor" id="cardVendor" onClick={this.close} />
              </Link>
            </Col>
          </Row>
        </Modal>
      </React.Fragment>
    );
  }
}

SignupModal.propTypes = {
  userRoute: PropTypes.string,
  vendorRoute: PropTypes.string
};

SignupModal.defaultProps = {
  vendorRoute: "/",
  userRoute: "/"
};

export default SignupModal;

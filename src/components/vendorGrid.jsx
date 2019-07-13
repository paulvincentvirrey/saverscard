import React, { Component } from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import MapModal from "./mapModal";
import sample from "../img/stores/bestbuy.jpg";

// const VendorGrid = ({ vendors }) => {

// };

class VendorGrid extends Component {
  viewLocation = location => {};
  render() {
    const { vendors } = this.props;

    let content = [];

    vendors.forEach((vendor, index) => {
      console.log(vendor.image);
      if ((index + 1) % 3 === 0) {
        content.push(
          <Row>
            <Col l={4} m={6} s={12} key={vendor._id}>
              <Card
                key={vendor._id}
                header={
                  <CardTitle image={require("../img/stores/bestbuy.jpg")} />
                }
                actions={[<MapModal trigger={<a href="#">View Location</a>} />]}
              >
                <h5 className="card-title">
                  {vendor.discountRate}% off at {vendor.name}
                </h5>
                <p className="card-text">
                  Get {vendor.discountRate}% off at {vendor.name} on all goods
                  and services.
                </p>
              </Card>
            </Col>
          </Row>
        );
      } else {
        content.push(
          <Col l={4} m={6} s={12} key={vendor._id}>
            <Card
              key={vendor._id}
              header={
                <CardTitle image={require("../img/stores/bestbuy.jpg")} />
              }
              actions={[
                <MapModal
                  title={vendor.name}
                  trigger={<a href="#">View Location</a>}
                />
              ]}
            >
              <h5 className="card-title">
                {vendor.discountRate}% off at {vendor.name}
              </h5>
              <p className="card-text">
                Get {vendor.discountRate}% off at {vendor.name} on all goods and
                services.
              </p>
            </Card>
          </Col>
        );
      }
    });
    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default VendorGrid;

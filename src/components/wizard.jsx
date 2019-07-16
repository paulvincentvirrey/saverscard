import React, { Component } from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Icon,
  Row,
  Select,
  Textarea,
  TextInput
} from "react-materialize";
import "../css/wizard.css";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      currentCardTitle: this.cardTitle[0],
      values: []
    };
  }

  cardTitle = [
    "Vendor Information",
    "Store Profile",
    "Payment",
    "Acknowledgement"
  ];

  discounts = [
    { key: 1, item: "5%" },
    { key: 2, item: "10%" },
    { key: 3, item: "15%" },
    { key: 4, item: "20%" }
  ];

  descriptions = [
    { key: 1, item: "Antiques" },
    { key: 2, item: "Apparel" },
    { key: 3, item: "Appliances" },
    { key: 4, item: "Arts & Crafts" },
    { key: 5, item: "Automotive/Vehicles" },
    { key: 6, item: "Beauty & Health" },
    { key: 7, item: "Books" },
    { key: 8, item: "Electronics" },
    { key: 9, item: "Farming/Gardening" },
    { key: 10, item: "Financial " },
    { key: 11, item: "Furniture" },
    { key: 12, item: "Lessons" },
    { key: 13, item: "Professional Services" },
    { key: 14, item: "Skilled Services" },
    { key: 15, item: "Therapeutic" },
    { key: 16, item: "Travel/Vacation" }
  ];

  creditCards = [
    { key: 1, value: "American Express" },
    { key: 2, value: "MasterCard" },
    { key: 3, value: "Visa" }
  ];

  paymentMethods = [
    { key: 1, value: "Credit Card" },
    { key: 2, value: "Invoice" },
    { key: 3, value: "Promo Code" }
  ];

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleChange = e => {
    let values = { ...this.state.values, [e.target.name]: e.target.value };
    console.log(values);
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.values);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
      currentCardTitle: this.cardTitle[currentStep - 1]
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
      currentCardTitle: this.cardTitle[currentStep - 1]
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <Button
          waves="light"
          style={{ marginLeft: "5px" }}
          onClick={this._prev}
        >
          Previous
        </Button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 3) {
      return (
        <Button
          waves="light"
          style={{ marginLeft: "5px" }}
          onClick={this._next}
        >
          Next
        </Button>
      );
    }
    return null;
  }

  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep == 4) {
      return (
        <Button
          type="submit"
          waves="light"
          style={{ marginLeft: "5px" }}
          onClick={this.handleSubmit}
        >
          Submit
          <Icon right>send</Icon>
        </Button>
      );
    }
    return null;
  }
  render() {
    return (
      <Row>
        <Col l={6} s={12}>
          <Card
            className="card-container"
            textClassName="white-text"
            title={this.state.currentCardTitle}
          >
            <form onSubmit={this.handleSubmit}>
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                values={this.state.values}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                descriptions={this.descriptions}
                discounts={this.discounts}
                values={this.state.values}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                paymentMethods={this.paymentMethods}
                creditCards={this.creditCards}
                values={this.state.values}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                values={this.state.values}
              />
              {this.previousButton()}
              {this.nextButton()}
              {this.submitButton()}
            </form>
          </Card>
        </Col>
      </Row>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="container" id="step">
      <Row>
        <TextInput
          l={6}
          icon="business"
          label="Business Name"
          name="Business Name"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
        <TextInput
          l={6}
          icon="location_on"
          label="Address"
          name="Address"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
      </Row>
      <Row>
        <TextInput
          l={6}
          icon="address"
          label="City"
          name="City"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
        <TextInput
          l={6}
          icon="address"
          label="State"
          name="State"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
      </Row>
      <Row>
        <TextInput
          l={6}
          icon="address"
          label="Zipcode"
          name="Zipcode"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
        <TextInput
          l={6}
          icon="local_phone"
          label="Telephone"
          name="Telephone"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
      </Row>
      <Row>
        <TextInput
          l={6}
          icon="local_printshop"
          label="Fax"
          name="Fax"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
        <TextInput
          l={6}
          icon="person"
          label="Authorized Person"
          name="Authorized Person"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
      </Row>
      <Row>
        <TextInput
          l={6}
          icon="contact_mail"
          email
          validate
          label="Contact Email"
          name="Contact Email"
          onChange={props.handleChange}
          value={props.values[props.name]}
        />
      </Row>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="container" id="step">
      <Row>
        <Col>
          <Select
            defaultValue="default"
            icon="view_list"
            label="Store Type"
            name="Store Type"
            onChange={props.handleChange}
            value={props.values[props.name]}
          >
            <option key="default" value="default" disabled>
              Select type
            </option>
            {props.descriptions.map(description => (
              <option key={description.key} value={description.item}>
                {description.item}
              </option>
            ))}
          </Select>
          <Select
            defaultValue="default"
            icon="attach_money"
            label="Discount Offer"
            name="Discount Offer"
            onChange={props.handleChange}
            value={props.values[props.name]}
          >
            <option key="default" value="default" disabled>
              Select offer
            </option>
            {props.discounts.map(discounts => (
              <option key={discounts.key} value={discounts.item}>
                {discounts.item}
              </option>
            ))}
          </Select>
          <Checkbox
            name="DiscountAgreement"
            onChange={props.handleChange}
            value={props.values[props.name]}
            label="Discount selected will be applied to all products and services
                    of the store. Otherwise, please indicate excluded items below."
            filledIn
            unchecked
          />
          <TextInput
            icon="not_interested"
            label="Discount Exclusions"
            name="Discount Exclusions"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>
      <Row>
        <Col />
      </Row>
      <Row />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="container" id="step">
      <Row>
        <Col s={12}>
          <Select
            defaultValue="default"
            icon="monetization_on"
            label="Payment Method"
            name="Payment Method"
            onChange={props.handleChange}
            value={props.values[props.name]}
          >
            <option key="default" value="default" disabled>
              Payment Method
            </option>
            {props.paymentMethods.map(paymentMethod => (
              <option key={paymentMethod.key} value={paymentMethod.value}>
                {paymentMethod.value}
              </option>
            ))}
          </Select>
          <TextInput
            disabled
            icon="card_membership"
            label="Subscription"
            value="$5/month"
          />
          {getPaymentDisplay(props)}
        </Col>
      </Row>
    </div>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div className="container" id="step">
      <Row>
        <Col s={12}>
          <span>
            This agreement is being made with the VENDOR stated above and SAVERS
            CARD LLC for participation in the SAVERS CARD DISCOUNT PROGRAM. To
            preserve the Integrity of this discount program, the VENDOR agrees
            to ensure that all employees who come in contact with customers have
            full knowledge of the program and what the business will offer to
            card holders. The VENDOR agrees to participate and provide the
            SAVERS CARD LLC CARD MEMBERS with offer(s) stated above. Any
            disputes from transactions between the VENDOR and the CARD MEMBER
            shall be mitigated by both parties. This agreement is valid for a
            minimum membership of 1 year with automatic renewal.
          </span>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Checkbox
            value=""
            label="I understand and agree with the terms and conditions"
            filledIn
            unchecked
          />
        </Col>
      </Row>
      <Row>
        <TextInput
          s={12}
          icon="not_interested"
          label="Vendor Authorized e-signature"
          placeholder="Please type your full name"
          name="E Signature"
          value={props.values[props.name]}
          onChange={props.handleChange}
        />
      </Row>
    </div>
  );
}

function getPaymentDisplay(props) {
  let paymentMethod = props.values["Payment Method"];

  if (paymentMethod === "Credit Card") {
    return (
      <Row>
        <Col s={12}>
          <Select
            defaultValue="default"
            icon="credit_card"
            name="Credit Card Type"
            value={props.values[props.name]}
            onChange={props.handleChange}
          >
            <option key="default" value="default" disabled>
              Choose Credit Card
            </option>
            {props.creditCards.map(creditCard => (
              <option key={creditCard.key} value={creditCard.value}>
                {creditCard.value}
              </option>
            ))}
          </Select>
          <TextInput
            icon="credit_card"
            label="Card Number"
            name="Card Number"
            value={props.values[props.name]}
            onChange={props.handleChange}
          />
          <DatePicker icon="date_range" label="Expiration Date" />
          <TextInput
            icon="credit_card"
            label="CV Code"
            name="CV Code"
            value={props.values[props.name]}
            onChange={props.handleChange}
          />
        </Col>
      </Row>
    );
  }
  if (paymentMethod === "Invoice") {
    return (
      <Row>
        <Col s={12}>
          <div class="file-field input-field">
            <Button waves="light" small>
              <Icon>attach_file</Icon>
              <input type="file" />
            </Button>
            <div class="file-path-wrapper">
              <input
                class="file-path validate"
                type="text"
                placeholder="Please upload invoice"
              />
            </div>
          </div>
        </Col>
      </Row>
    );
  }
  if (paymentMethod === "Promo Code") {
    return (
      <TextInput
        icon="receipt"
        label="Enter Promo Code"
        name="Promo Code"
        value={props.values[props.name]}
        onChange={props.handleChange}
      />
    );
  }
}
export default MasterForm;

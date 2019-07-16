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
    "Account Details",
    "User Profile",
    "Payment",
    "Discount Agreement"
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

  handleChange = ({ target }) => {
    let { name, value, type, checked } = target;

    if (type === "checkbox") {
      name = value;
      value = checked;
    }
    let values = { ...this.state.values, [name]: value };
    console.log(values);
    this.setState({
      values: { ...this.state.values, [name]: value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
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
          id="previousButton"
          name="previousButton"
          waves="light"
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
          id="nextButton"
          name="nextButton"
          waves="light"
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
          id="submitButton"
          name="submitButton"
          type="submit"
          waves="light"
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
        <Col>
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
                values={this.state.values}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                paymentMethods={this.paymentMethods}
                creditCards={this.creditCards}
                selectedPayment={this.state.selectedPayment}
                values={this.state.values}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                values={this.state.values}
              />
              <Row>
                <Col>
                  {this.previousButton()}
                  {this.nextButton()}
                  {this.submitButton()}
                </Col>
              </Row>
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
    <React.Fragment>
      <Row>
        <Col>
          <TextInput
            icon="account_box"
            label="Username"
            name="Username"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
          <TextInput
            icon="person"
            label="Email Address"
            name="Email Address"
            email
            validate
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            icon="lock"
            label="Password"
            name="Password"
            password
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
          <TextInput
            icon="lock_outline"
            label="Confirm Password"
            name="Confirm Password"
            password
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <Row>
        <Col>
          <TextInput
            s={12}
            m={6}
            l={6}
            icon="person"
            label="Last Name"
            name="Last Name"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
          <TextInput
            s={12}
            m={6}
            l={6}
            icon="person"
            label="Given Name"
            name="Given Name"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <DatePicker s={12} m={6} l={6} icon="date_range" label="Birthdate" />
          <TextInput
            s={12}
            m={6}
            l={6}
            icon="phone"
            label="Contact Number"
            name="Contact Number"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <TextInput
            s={12}
            m={12}
            l={12}
            icon="location_on"
            label="Address"
            name="Address"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <TextInput
            s={12}
            m={6}
            l={6}
            icon="address"
            label="City"
            name="City"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />

          <TextInput
            s={12}
            m={6}
            l={6}
            icon="address"
            label="State"
            name="State"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <TextInput
            s={12}
            m={6}
            l={6}
            icon="address"
            label="Zipcode"
            name="Zipcode"
            onChange={props.handleChange}
            value={props.values[props.name]}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Select
            icon="monetization_on"
            defaultValue="default"
            label="Payment Method"
            name="Payment Method"
            onChange={props.handleChange}
            value={props.values[props.name]}
          >
            <option key="default" value="default" disabled>
              Choose Credit Card
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
        </Col>
      </Row>
      <Row>
        <Col>{getPaymentDisplay(props)}</Col>
      </Row>
    </React.Fragment>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <Row>
        <Col>
          {/* <ul>
            <li>
              <Checkbox
                name="DiscountAgreement"
                label="Subscription must be paid to activate the discount perks of card."
                checked
                disabled
              />
            </li>
            <li>
              <Checkbox
                name="DiscountAgreement"
                label="Cardholder must present card at the time of purchase."
                checked
                disabled
              />
            </li>
            <li>
              <Checkbox
                name="DiscountAgreement"
                label="Card is non-transferrable."
                checked
                disabled
              />
            </li>
            <li>
              <Checkbox
                name="DiscountAgreement"
                label="For discount disputes, e-mail original receipt to
          saverscardllc@gmail.com with the short description of dispute."
                checked
                disabled
              />
            </li>
            <li>
              <Checkbox
                name="DiscountAgreement"
                label="To cancel subscription, submit cancellation notice to
          saverscardllc@gmail.com."
                checked
                disabled
              />
            </li>
            <li>
              <Checkbox
                name="DiscountAgreement"
                label="This agreement automatically renews for another year."
                checked
                disabled
              />
            </li>
          </ul> */}
        </Col>
      </Row>
      <Row id="agreementBox">
        <Col>
          <Checkbox
            label="I understand and agree with the terms and conditions"
            onChange={props.handleChange}
            value="Term Agreement"
            filledIn
            unchecked={props.values[props.name]}
          />
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <TextInput
            s={12}
            l={8}
            icon="verified_user"
            label="Vendor Authorized e-signature"
            placeholder="Please type your full name"
            name="E Signature"
            value={props.values[props.name]}
            onChange={props.handleChange}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}

function getPaymentDisplay(props) {
  let paymentMethod = props.values["Payment Method"];

  if (paymentMethod === "Credit Card") {
    return (
      <React.Fragment>
        <Select
          defaultValue="default"
          icon="credit_card"
          name="Credit Card Type"
          onChange={props.handleChange}
          value={props.values[props.name]}
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

        <Row>
          <Col>
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
      </React.Fragment>
    );
  }
  if (paymentMethod === "Invoice") {
    return (
      <React.Fragment>
        <div class="file-field input-field">
          <Button waves="light" small>
            <Icon>attach_file</Icon>
            <input type="file" />
          </Button>
          <div class="file-path-wrapper">
            <input
              class="file-path validate"
              type="text"
              placeholder="Please attach invoice"
            />
          </div>
        </div>
      </React.Fragment>
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

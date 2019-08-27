import React, { Component } from "react";
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  PaymentRequestButtonElement,
  injectStripe
} from "react-stripe-elements";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    // this.submit = this.submit.bind(this);
  }

  submit = async ev => {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    console.log(token);
    let response = await fetch("http://localhost:4000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjU0MjE5NzQsImV4cCI6MTU2NTUwODM3NCwiaXNzIjoiYWRtaW4ifQ.GJtc2DemoNHs81AnoEyeTU6j5nYfr8H5dfmq3RpiCh8"
      },
      body: JSON.stringify({ token: token.id })
    });

    if (response.ok) this.setState({ complete: true });
  };

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        {/* <CardElement /> */}
        <CardNumberElement />
        <CardExpiryElement />
        <CardCvcElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

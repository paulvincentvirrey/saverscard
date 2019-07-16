// WILL BE USED FOR REFACTORING DO NOT REMOVE

// import React, { Component } from "react";
// import {
//   Button,
//   Card,
//   Checkbox,
//   Col,
//   DatePicker,
//   Form,
//   Icon,
//   Row,
//   Select,
//   Textarea,
//   TextInput
// } from "react-materialize";
// import "../css/wizard.css";

// class SignupForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentStep: 1,
//       currentCardTitle: this.cardTitle[0],
//       values: []
//     };
//   }

//   creditCards = [
//     { key: 1, value: "American Express" },
//     { key: 2, value: "MasterCard" },
//     { key: 3, value: "Visa" }
//   ];

//   paymentMethods = [
//     { key: 1, value: "Credit Card" },
//     { key: 2, value: "Invoice" },
//     { key: 3, value: "Promo Code" }
//   ];

//   handleChange = e => {
//     let values = { ...this.state.values, [e.target.name]: e.target.value };
//     console.log(values);
//     this.setState({
//       values: { ...this.state.values, [e.target.name]: e.target.value }
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     console.log(this.state.values);
//   };

//   _next = () => {
//     let currentStep = this.state.currentStep;
//     currentStep = currentStep >= 3 ? 4 : currentStep + 1;
//     this.setState({
//       currentStep: currentStep,
//       currentCardTitle: this.cardTitle[currentStep - 1]
//     });
//   };

//   _prev = () => {
//     let currentStep = this.state.currentStep;
//     currentStep = currentStep <= 1 ? 1 : currentStep - 1;
//     this.setState({
//       currentStep: currentStep,
//       currentCardTitle: this.cardTitle[currentStep - 1]
//     });
//   };

//   previousButton() {
//     let currentStep = this.state.currentStep;
//     if (currentStep !== 1) {
//       return (
//         <Button
//           id="previousButton"
//           name="previousButton"
//           waves="light"
//           onClick={this._prev}
//         >
//           Previous
//         </Button>
//       );
//     }
//     return null;
//   }

//   nextButton() {
//     let currentStep = this.state.currentStep;
//     if (currentStep <= 3) {
//       return (
//         <Button
//           id="nextButton"
//           name="nextButton"
//           waves="light"
//           onClick={this._next}
//         >
//           Next
//         </Button>
//       );
//     }
//     return null;
//   }

//   submitButton() {
//     let currentStep = this.state.currentStep;
//     if (currentStep == 4) {
//       return (
//         <Button
//           id="submitButton"
//           name="submitButton"
//           type="submit"
//           waves="light"
//           onClick={this.handleSubmit}
//         >
//           Submit
//           <Icon right>send</Icon>
//         </Button>
//       );
//     }
//     return null;
//   }

//   render() {
//     return (
//       <Row>
//         <Col>
//           <Card
//             className="card-container"
//             textClassName="white-text"
//             title={this.state.currentCardTitle}
//           >
//             <form onSubmit={this.handleSubmit}>
//               <Step1
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//                 values={this.state.values}
//               />
//               <Step2
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//                 values={this.state.values}
//               />
//               <Step3
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//                 paymentMethods={this.paymentMethods}
//                 creditCards={this.creditCards}
//                 values={this.state.values}
//               />
//               <Step4
//                 currentStep={this.state.currentStep}
//                 handleChange={this.handleChange}
//                 values={this.state.values}
//               />
//               <Row>
//                 <Col>
//                   {this.previousButton()}
//                   {this.nextButton()}
//                   {this.submitButton()}
//                 </Col>
//               </Row>
//             </form>
//           </Card>
//         </Col>
//       </Row>
//     );
//   }
// }

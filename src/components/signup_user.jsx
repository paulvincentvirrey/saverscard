import React, { Component } from "react";

class UserSignUp extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <form action="" id="wizard" className="user">
          <h4 />
          <section>
            <h3>Account Details</h3>
            <div className="form-row">
              <div className="form-col">
                <label for="">Username</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin-account" />
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-col">
                <label for="">Email Address</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-email" />
                  <input
                    type="email"
                    placeholder="Input a valid email address"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label for="">Password</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-lock" />
                  <input type="password" className="form-control" required />
                </div>
              </div>
              <div className="form-col">
                <label for="">Confirm Password</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-lock-outline" />
                  <input type="password" className="form-control" />
                </div>
              </div>
            </div>
          </section>

          <h4 />
          <section>
            <h3>Profile Details</h3>
            <div className="form-row">
              <div className="form-col">
                <label for="">Last Name</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-account-o" />
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-col">
                <label for="">Given Name</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-account-o" />
                  <input type="text" className="form-control" required />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label for="">Birthdate</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-calendar" />
                  <input
                    type="text"
                    className="form-control datepicker-here"
                    data-language="en"
                    data-date-format="dd - mm - yyyy"
                    id="dp1"
                  />
                </div>
              </div>
              <div className="form-col">
                <label for="">Contact Number</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-phone" />
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </section>

          <h4 />
          <section>
            <h3>Residential address</h3>
            <div className="form-row">
              <div className="form-col">
                <label for="">Building / House No. / Apartment</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-home" />
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-col">
                <label for="">Street Address</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin" />
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label for="">Country</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-account-o" />
                  <select name="" id="" className="form-control">
                    <option value="united states" className="option">
                      United States
                    </option>
                    <option value="united kingdom" className="option">
                      United Kingdom
                    </option>
                    <option value="viet nam" className="option">
                      Viet Nam
                    </option>
                  </select>
                  <i className="zmdi zmdi-chevron-down" />
                </div>
              </div>
              <div className="form-col">
                <label for="">State</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin" />
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label for="">Town / City</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin-drop" />
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-col">
                <label for="">Zip Code</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-my-location" />
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </section>

          <h4 />
          <section>
            <h3>Payment Method</h3>
            <div className="form-row">
              <div className="form-col">
                <label for="">Subscription</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-card-membership" />
                  <select name="" id="" className="form-control">
                    <option value="monthly" className="option">
                      Monthly ($2/month)
                    </option>
                    <option value="yearly" className="option">
                      Yearly ($24/year)
                    </option>
                  </select>
                  <i className="zmdi zmdi-chevron-down" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label for="">Credit Card</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-card" />
                  <select name="" id="" className="form-control">
                    <option value="monthly" className="option">
                      American Express
                    </option>
                    <option value="yearly" className="option">
                      MasterCard
                    </option>
                    <option value="yearly" className="option">
                      Visa
                    </option>
                  </select>
                  <i className="zmdi zmdi-chevron-down" />
                </div>
              </div>
              <div className="form-col">
                <label for="">Card Number</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin" />
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label for="">Expiration Date</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin" />
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-col">
                <label for="">CV Code</label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin" />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </section>

          <h4 />
          <section>
            <h3>Discount Agreement</h3>
            <div className="form-row">
              <ul style="list-style-type:disc;">
                <li>
                  Subscription must be paid to activate the discount perks of
                  card.
                </li>
                <li>Cardholder must present card at the time of purchase.</li>
                <li>Card is non-transferrable.</li>
                <li>
                  For <b>discount disputes</b>, e-mail original receipt to
                  <u>
                    <b>saverscardllc@gmail.com</b>
                  </u>{" "}
                  with the short description of dispute.
                </li>
                <li>
                  To <b>cancel subscription</b>, submit cancellation notice to
                  <u>
                    <b>saverscardllc@gmail.com</b>
                  </u>
                  .
                </li>
                <li>This agreement automatically renews for another year.</li>
              </ul>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label for="">
                  <h5>I understand and agree with the terms and conditions.</h5>
                </label>
                <label for="">
                  <h4>E-SIGNATURE</h4>
                </label>
                <div className="form-holder">
                  <i className="zmdi zmdi-pin" />
                  <input
                    type="text"
                    placeholder="Please type your full name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default UserSignUp;

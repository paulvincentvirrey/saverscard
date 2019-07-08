import React, { Component } from "react";
import "../css/login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-4 box" id="login">
        <div className="card text-center">
          <div className="card-body">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Customer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Store
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row container justify-content-between">
                  <h4 className="float-left card-title mb-4 mt-1">Log in</h4>
                </div>
                <form action="discounts.html">
                  <div className="float-left form-group">
                    <label>Your email</label>
                    <input
                      name=""
                      className="form-control"
                      placeholder="Email"
                      type="email"
                    />
                  </div>

                  <div className="float-left form-group">
                    <label>Your password</label>
                    <input
                      className="form-control"
                      placeholder="******"
                      type="password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Save password
                      </label>
                    </div>
                    <a id="forgot" className="float-right" href="#">
                      Forgot your password?
                    </a>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade show"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row container justify-content-between">
                  <h4 className="float-left card-title mb-4 mt-1">Log in</h4>
                </div>
                <form action="discounts.html">
                  <div className="float-left form-group">
                    <label>Your email</label>
                    <input
                      name=""
                      className="form-control login"
                      placeholder="Email"
                      type="email"
                    />
                  </div>

                  <div className="float-left form-group">
                    <label>Your password</label>
                    <input
                      className="form-control login"
                      placeholder="******"
                      type="password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> Save password
                      </label>
                    </div>
                    <a id="forgot" className="float-right" href="#">
                      Forgot your password?
                    </a>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

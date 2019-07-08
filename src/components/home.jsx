import React, { Component } from "react";

const Home = () => {
  return (
    <React.Fragment>
      <header className="masthead">
        <div className="container" id="logo">
          <div className="container-fluid">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row justify-content-end">
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
                          <h4 className="float-left card-title mb-4 mt-1">
                            Log in
                          </h4>
                          <a
                            href="signup_user.html"
                            className="float-right btn btn-outline-primary mb-4 mt-1"
                          >
                            Sign up
                          </a>
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
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
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
                          <h4 className="float-left card-title mb-4 mt-1">
                            Log in
                          </h4>
                          <a
                            href="signup_store.html"
                            className="float-right btn btn-outline-primary mb-4 mt-1"
                          >
                            Sign up
                          </a>
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
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </header>

      <section className="page-section" id="services">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="page-section" id="about">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>

      <section className="page-section" id="contact">
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <div id="success" />
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </React.Fragment>
  );
};

export default Home;

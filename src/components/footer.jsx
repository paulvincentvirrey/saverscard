import React, { Component } from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <section id="footer-form" />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 contact">
              <div className="title">Contact</div>
              <ul>
                <li>
                  <i className="fas fa-phone-square" />
                  <a href="tel:020 7112 8223">020 7112 8223</a>
                </li>
                <li>
                  <i className="fas fa-envelope-square" />
                  <a href="mailto:saverscardllc@gmail.com">
                    saverscardllc@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <div className="title">Useful Information</div>
              <ul>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <div className="title">Follow Us</div>
              <div className="social">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          © 2019 saverscard.com All rights Reserved
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

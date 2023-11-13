import React from 'react';
import './_footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid-footer">
          <div className="logo-col">
            <a className="footer-logo" href="#">
              <img
                className="logo"
                alt="Omnifood logo"
                src="img/omnifood-logo.png"
              />
            </a>
            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <ion-icon className="social-icon" name="logo-instagram" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <ion-icon className="social-icon" name="logo-facebook" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <ion-icon className="social-icon" name="logo-twitter" />
                </a>
              </li>
            </ul>
            <p className="copyright">
              Copyright ©{' '}
              <span className="year">{new Date().getFullYear()}</span> by
              Omnifood, Inc. All rights reserved.
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                Address: 623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Create account{' '}
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sign in{' '}
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Recipe directory
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy &amp; terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

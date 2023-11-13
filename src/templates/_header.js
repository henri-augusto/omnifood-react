import React, { useState } from 'react';
import './_header.css';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className={show ? 'header nav-open' : 'header'}>
        <div className="header-container">
          <a href="#">
            <img
              className="logo"
              alt="Omnifood logo"
              src="img/omnifood-logo.png"
            />
          </a>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a className="main-nav-link" href="#how">
                  How it works
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#meals">
                  Meals
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="main-nav-link nav-cta" href="#cta">
                  Try for free
                </a>
              </li>
            </ul>
          </nav>
          <button className="btn-mb-nav" onClick={() => setShow(!show)}>
            <ion-icon id="icon-mobile-nav" name="menu-outline" />
            <ion-icon id="icon-mobile-nav" name="close-outline" />
          </button>
        </div>
      </header>
    </>
  );
}

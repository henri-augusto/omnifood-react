import React from 'react';
import './_header.css';

export default function Header() {
  function link() {
    document.querySelector('.header').classList.toggle('nav-open');
  }

  function navOpen() {
    const header = document.querySelector('.header').classList;
    if (header.contains('header')) {
      document.querySelector('.header').classList.toggle('nav-open');
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <a href="/">
            <img
              className="logo"
              alt="Omnifood logo"
              src="img/omnifood-logo.png"
            />
          </a>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <LiContainer name={'How it works'} reference={'#how'} />
              <LiContainer name={'Meals'} reference={'#meals'} />
              <LiContainer name={'Testimonials'} reference={'#testimonials'} />
              <LiContainer name={'Pricing'} reference={'#pricing'} />
              <LiContainer name={'Try for free'} reference={'#cta'} />
              <li>
                <a
                  className="main-nav-link nav-cta"
                  href="#cta"
                  onClick={() => link()}
                >
                  Try for free
                </a>
              </li>
            </ul>
          </nav>
          <button className="btn-mb-nav" onClick={() => navOpen()}>
            <ion-icon id="icon-mobile-nav" name="menu-outline" />
            <ion-icon id="icon-mobile-nav" name="close-outline" />
          </button>
        </div>
      </header>
    </>
  );

  function LiContainer({ reference, name }) {
    return (
      <>
        <li>
          <a className="main-nav-link" href={reference} onClick={() => link()}>
            {name}
          </a>
        </li>
      </>
    );
  }
}

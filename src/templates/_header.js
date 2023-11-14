import React from 'react';
import './_header.css';

export default function Header() {
  // const [show, setShow] = useState(false);

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
              <LiConteiner name={'How it works'} reference={'#how'} />
              <LiConteiner name={'Meals'} reference={'#meals'} />
              <LiConteiner name={'Testimonials'} reference={'#testimonials'} />
              <LiConteiner name={'Pricing'} reference={'#pricing'} />
              <LiConteiner name={'Try for free'} reference={'#cta'} />
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

  function LiConteiner({ reference, name }) {
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

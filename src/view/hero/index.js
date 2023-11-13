import React from 'react';
import './index.css';

export default function Hero() {
  // const sectionHero = useRef(null);
  // console.log(sectionHero);

  // const obs = new IntersectionObserver(
  //   function (entries) {
  //     const ent = entries[0];

  //     if (!ent.isIntersecting) {
  //       document.body.classList.add('sticky');
  //     }

  //     if (ent.isIntersecting) {
  //       document.body.classList.remove('sticky');
  //     }
  //   },
  //   {
  //     root: null,
  //     threshold: 0,
  //     rootMargin: '-80px',
  //   }
  // );
  // obs.observe(sectionHero);

  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm">
              Start eating well
            </a>
            <a href="#how" className="btn btn--outline">
              Learn more ↓
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="img/customers/customer-1.jpg" alt="Customer" />
                <img src="img/customers/customer-2.jpg" alt="Customer" />
                <img src="img/customers/customer-3.jpg" alt="Customer" />
                <img src="img/customers/customer-4.jpg" alt="Customer" />
                <img src="img/customers/customer-5.jpg" alt="Customer" />
                <img src="img/customers/customer-6.jpg" alt="Customer" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="img/hero.webp"
              alt="Woman enjoying food, meals in storage"
              className="hero-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}

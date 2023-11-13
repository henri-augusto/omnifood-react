import React from 'react';
import './index.css';

export default function Testimonials() {
  return (
    <>
      <section className="section-testimonials" id="testimonials">
        <div className="testimonial-container">
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secundary">
            Once you try it, you can't go back
          </h2>
          <div className="testimonials">
            <figure className="testimonial">
              <img
                src="img/customers/dave.jpg"
                className="testimonial-img"
                alt="Photo of customer Dave Bryson"
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name">—Dave Bryson</p>
            </figure>
            <figure className="testimonial">
              <img
                src="img/customers/ben.jpg"
                className="testimonial-img"
                alt="Photo of customer Ben Hadley"
              />
              <blockquote className="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name">—Ben Hadley</p>
            </figure>
            <figure className="testimonial">
              <img
                src="img/customers/steve.jpg"
                className="testimonial-img"
                alt="Photo of customer Steve Miller"
              />
              <blockquote className="testimonial-text">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="testimonial-name">—Steve Miller</p>
            </figure>
            <figure className="testimonial">
              <img
                src="img/customers/hannah.jpg"
                className="testimonial-img"
                alt="Photo of customer Hannah Smith"
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name">—Hannah Smith</p>
            </figure>
          </div>
        </div>
        <div className="gallery">
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-1.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-2.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-3.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-4.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-5.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-6.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-7.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-8.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-9.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-10.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-11.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-12.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import './index.css';

export default function Action() {
  return (
    <>
      <section className="section-cta" id="cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secundary margin-bottom-md">
                Get your first meal for free!
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>
              <form action="" className="cta-form">
                <div>
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    type="name"
                    className="input"
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    className="input"
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="select-where">
                    Where did you hear from us?
                  </label>
                  <select id="select-where" name="select-where" required="">
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <button className="btn cta-btn">Sign up now</button>
              </form>
            </div>
            <div
              className="cta-img"
              role="img"
              aria-label="Woman enjoying food"
            />
          </div>
        </div>
      </section>
    </>
  );
}

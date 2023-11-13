import React from 'react';
import './index.css';

export default function Featured() {
  return (
    <>
      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src="img/logos/techcrunch.png" alt="techcrunch" />
            <img src="img/logos/business-insider.png" alt="business-insider" />
            <img
              src="img/logos/the-new-york-times.png"
              alt="the-new-york-times"
            />
            <img src="img/logos/forbes.png" alt="forbes" />
            <img src="img/logos/usa-today.png" alt="usa-today" />
          </div>
        </div>
      </section>
    </>
  );
}

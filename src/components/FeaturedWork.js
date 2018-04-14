import React from 'react';
import '../scss/featuredWork.scss';

const Hero = () => (
  <section className="featured-work">
    <div className="container">
      <h2 className="featured-work__headline">Featured Work</h2>
      <div className="featured-work__container">
        <div className="featured-work__item">
          <div>
            <img />
            <h3>A Cart Apart</h3>
            <p>React / HTML / SASS / Firebase / Google Maps API</p>
          </div>
        </div>
        <div className="featured-work__item">
          <div>
            <img />
            <h3>Makani</h3>
            <p>Web Development / Design</p>
          </div>
        </div>
        <div className="featured-work__item">
          <div>
            <img />
            <h3>Out to Lunch</h3>
            <p>Web Development / Design</p>
          </div>
        </div>
        <div className="featured-work__item">
          <div>
            <img />
            <h3>React Paint</h3>
            <p>Web Development / Design</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero;

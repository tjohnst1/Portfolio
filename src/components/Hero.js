import React from 'react';
import '../scss/hero.scss';
import { scrollTo } from '../utilities';

const Hero = () => (
  <div className="container">
    <section className="hero">
      <h2 className="hero__text">Hello! I&rsquo;m Travis Johnston, a <a href="https://github.com/tjohnst1">web developer</a> based in Portland, Oregon.</h2>
      <svg onClick={() => scrollTo('#featured-work')} className="hero__arrow" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"/>
      </svg>
    </section>
  </div>
)

export default Hero;

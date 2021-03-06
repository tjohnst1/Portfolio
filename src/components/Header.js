import React from 'react';
import Link from 'gatsby-link';
import { scrollTo } from '../utilities';
import { navigateTo } from "gatsby-link"
import '../scss/header.scss';

const Header = ({location}) => {
  function scrollOrLinkTo(selector) {
    if (location.pathname !== '/') {
      return navigateTo(`/${selector}`);
    }
    return scrollTo(selector);
  }

  const pathStyles = {
    fill:'none',
    stroke:'#E01717',
    strokeWidth: 21,
    strokeMiterlimit: 10
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-container">
          <Link to="/">
            <svg className="header__logo" x="0px" y="0px" viewBox="63 -54.8 325 309.8" style={{enableBackground: "new 63 -54.8 325 309.8"}}>
              <path style={pathStyles} d="M263.2,53v84.2c0,35.1-27.4,63.5-61.2,63.5s-61.2-28.4-61.2-63.5v-6.3"/>
              <path style={pathStyles} d="M199,143.5V57.4h-61.2v-46h182.4v54.3"/>
              <path style={pathStyles} d="M73.5-44.3h304v288.8h-304V-44.3z"/>
            </svg>
          </Link>
        </div>
        <nav>
          <ul>
            <li onClick={() => scrollOrLinkTo('#featured-work')}>Work</li>
            <li><a href="mailto:tjohnst1@gmail.com">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header

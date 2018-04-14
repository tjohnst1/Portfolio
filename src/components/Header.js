import React from 'react';
import Link from 'gatsby-link';
import monogram from '../../public/static/img/monogram.svg';
import '../scss/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-container">
          <img className="header__logo" src={monogram} />
        </div>
        <nav>
          <ul>
            <li><a href="#">Work</a></li>
            <li><a href="mailto: tjohnst1@gmail.com">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header

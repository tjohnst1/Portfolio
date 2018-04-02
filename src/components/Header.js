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
          <h1>Travis Johnston</h1>
        </div>
        <nav>
          <ul>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header

import React from 'react';
import Link from 'gatsby-link';
import monogram from '../../public/static/img/monogram.svg';
import '../scss/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-container">
          <Link to="/"><img className="header__logo" src={monogram} /></Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={{
                pathname: '/',
                hash: '#featured-work',
              }}>Work</Link>
            </li>
            <li>
              <Link to={{
                pathname: '/',
                hash: '#contact',
              }}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header

import React from 'react';
import Link from 'gatsby-link';
import monogram from '../../public/static/img/monogram.svg';
import { scrollTo } from '../utilities';
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
            <li onClick={() => scrollTo('#featured-work')}>Work</li>
            <li onClick={() => scrollTo('#contact')}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header

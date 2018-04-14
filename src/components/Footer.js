import React from 'react';
import '../scss/footer.scss'

const Footer = () => {
  return (
    <footer className="footer container">
      <h3 className="footer__subhead">Looking to start a project? <a href="#">Let&rsquo;s talk.</a></h3>
      <ul className="footer__links">
        <li><a href="https://github.com/tjohnst1">Github</a></li>
        <li><a href="https://www.linkedin.com/in/tjohnst1/">Linked In</a></li>
        <li><a href="mailto:tjohnst1@gmail.com">Email</a></li>
      </ul>
    </footer>
  )
}

export default Footer;

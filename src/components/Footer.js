import React from 'react';
import '../scss/footer.scss';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h3 className="footer__subhead">Looking to start a project? Let&rsquo;s&nbsp;talk.</h3>
        <ul className="footer__links">
          <li><a href="https://github.com/tjohnst1">Github</a></li>
          <li><a href="https://www.linkedin.com/in/tjohnst1/">Linked In</a></li>
          <li><a href="mailto:tjohnst1@gmail.com">Email</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../scss/normalize.scss';
import '../scss/defaults.scss';

class TemplateWrapper extends React.Component {
  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    return (
      <div className="layout">
      <Helmet
      title="Travis Johnston – Web Developer Portfolio"
      meta={[
        { name: 'description', content: 'Hello! This is the portfolio website of Travis Johnston, a web developer currently residing in beautiful Portland, OR.' },
        { name: 'keywords', content: 'web developer, portland developer, portland front end developer' },
      ]}
      />
    <Header location={this.props.location} />
      {this.props.children()}
      <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

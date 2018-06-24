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
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      />
      <Header location={this.props.location}/>
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

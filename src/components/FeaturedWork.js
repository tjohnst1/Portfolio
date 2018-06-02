import React from 'react';
import FeaturedWorkItem from './FeaturedWorkItem';
import '../scss/featuredWork.scss';

export default ({ projects }) => {
  const featuredItems = projects.map((obj, i) => (<FeaturedWorkItem key={i} project={obj.node} />));

  return (
    <section id="featured-work" className="featured-work">
      <div className="container">
        <h2 className="featured-work__headline">Featured Work</h2>
        <div className="featured-work__container">
          { featuredItems }
        </div>
      </div>
    </section>
  );
}

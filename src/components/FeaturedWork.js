import React from 'react';
import FeaturedWorkItem from './FeaturedWorkItem';
import '../scss/featuredWork.scss';

export default ({ projects }) =>{
  const featuredItems = projects.map((project, i) => (<FeaturedWorkItem key={i} project={project} />))

  return (
    <section className="featured-work">
      <div className="container">
        <h2 className="featured-work__headline">Featured Work</h2>
        <div className="featured-work__container">
          { featuredItems }
        </div>
      </div>
    </section>
  );
}

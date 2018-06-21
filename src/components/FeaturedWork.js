import React from 'react';
import { kebabCase } from 'lodash';
import FeaturedWorkItem from './FeaturedWorkItem';
import '../scss/featuredWork.scss';

export default ({ projects, images }) => {
  const featuredItems = projects.map((project, i) => {
    const previewImg = images.find(image => {
      const re = new RegExp(kebabCase(project.node.name))
      return re.test(image.node.childImageSharp.sizes.originalName);
    }).node.childImageSharp.sizes;
    return (<FeaturedWorkItem key={i} project={project.node} image={previewImg}/>)}
  );

  return (
    <div id="featured-work" className="featured-work">
      <div className="container">
        <div className="featured-work__container">
          { featuredItems }
        </div>
      </div>
    </div>
  );
}

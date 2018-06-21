import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

import { kebabCase } from 'lodash';

export default ({ project, image }) => {
  return (
    <div className="featured-work__item">
      <Link to={project.fields.slug}>
        <div className="featured-work__item-inner">
            <Img className="featured-work__img" sizes={image} />
            <h3 className="featured-work__name">{project.name}</h3>
            <p className="featured-work__category">{project.category}</p>
        </div>
      </Link>
    </div>
  )
}

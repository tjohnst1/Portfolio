import React from 'react';
import Link from 'gatsby-link';

export default ({ project }) => {
  console.log(project)
  return (
    <div className="featured-work__item">
      <div className="featured-work__item-inner">
        <img />
        <Link to={project.fields.slug}><h3>{project.name}</h3></Link>
        <p>{project.category}</p>
      </div>
    </div>
  )
}

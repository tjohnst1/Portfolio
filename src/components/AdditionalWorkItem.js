import React from 'react';
import Link from 'gatsby-link';

export default ({ project }) => {

  return (
    <div className="additional-work__item">
      <Link className="additional-work__item-inner" to={project.fields.slug}>
        <h3 className="additional-work__name">{project.name}</h3>
        <div className="additional-work__details">
          <p className="additional-work__category">{project.category}</p>
          <p className="additional-work__tech">{project.technologies.join(', ')}</p>
        </div>
      </Link>
    </div>
  )
}

import React from 'react';
import '../scss/project.scss';

export default ({ data }) => {
  const project = data.projectsJson;
  return (
    <div className="project">
      <div className="container">
        <div className="project__description">
          <h1 className="project__title">{ project.name }</h1>
          <p className="project__subhead">{ project.category }</p>
          <p className="project__summary" style={{whiteSpace: 'pre-wrap'}}>{ project.summary }</p>
        </div>
        <div className="project__buttons">
          <a className="button" href={ project.link }>View Project</a>
          {project.repository ? (<a className="button" href={ project.repository }>Github</a>) : null}
        </div>
      </div>
      <div className="project__metadata">
        <div className="container">
          <h3>Programming Languages and/or Libraries Used:</h3>
          <p>{ project.technologies.join(", ") }</p>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query FindPostQuery($projectId: String) {
  	projectsJson(id: { eq: $projectId }) {
      id
      name
      category
      summary
      category
      technologies
      link
      repository
      fields {
        slug
      }
  	}
  }
`;

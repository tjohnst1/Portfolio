import React from 'react';
import '../scss/project.scss';

export default ({ data }) => {
  const project = data.projectsJson;
  return (
    <div className="container">
      <img src="#" />
      <section className="project">
        <h1 className="project__title">{ project.title }</h1>
        <p className="project__subhead">{ project.category }</p>
        <p className="project__summary">{ project.summary }</p>

        <div className="project__buttons">
          <a className="button" href={ project.link }>View Project</a>
          <a className="button" href={ project.repository }>Github</a>
        </div>

        <div className="project__metadata">
          <h3>Programming Languages and/or Libraries Used:</h3>
          <p>{ project.technologies.join(", ") }</p>
        </div>
      </section>
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

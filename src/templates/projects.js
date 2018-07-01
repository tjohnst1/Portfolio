import React from 'react';
import '../scss/project.scss';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

export default ({ data }) => {
  const { currentProject, nextProject } = data;
  return (
    <div className="project">
      <div className="container">
        <div className="project__description">
          <h1 className="project__title">{ currentProject.name }</h1>
          <p className="project__subhead">{ currentProject.category }</p>
          <p className="project__summary" style={{whiteSpace: 'pre-wrap'}}>{ currentProject.summary }</p>
        </div>
        <div className="project__buttons">
          <a className="button" href={ currentProject.link }>View Project</a>
          {currentProject.repository ? (<a className="button" href={ currentProject.repository }>Github</a>) : null}
          <a className="link" href={ nextProject.fields.slug }>Next Project<FaChevronRight /></a>
        </div>
        <div>
      </div>
      <div className="project__metadata">
        <h3>Programming Languages and/or Libraries Used:</h3>
        <p>{ currentProject.technologies.join(", ") }</p>
      </div>
    </div>
  </div>
  )
}

export const query = graphql`
  query FindPostQuery($projectId: String, $nextProjectId: String) {
  	currentProject: projectsJson(id: {eq: $projectId}) {
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
    nextProject: projectsJson(id: {eq: $nextProjectId}) {
      name
      fields {
        slug
      }
  	}
  }
`;

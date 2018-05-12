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
          <a className="button ghost" href="https://github.com/tjohnst1/A-Cart-Apart">Github</a>
          <a className="button ghost" href="http://travisjohnston.info/demo/a-cart-apart">View Project</a>
        </div>

        <div className="project__metadata">
          <h3>Technologies Used:</h3>
          <p>{ project.technologies.join(", ") }</p>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query FindPostQuery($id: String) {
  	projectsJson(id: { eq: $id }) {
      name
      category
      summary
      category
      technologies
  	}
  }
`;

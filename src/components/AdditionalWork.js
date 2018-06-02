import React from 'react';
import '../scss/additionalWork.scss';
import AdditionalWorkItem from './AdditionalWorkItem';
import Link from 'gatsby-link';

export default ({ projects }) => {
  const additionalProjects = projects.map((obj, i) => <AdditionalWorkItem key={i} project={obj.node} />);

  return (
    <section className="additional-work">
      <div className="additional-work__inner">
        <h2 className="additional-work__headline">Additional Work</h2>
        { additionalProjects }
      </div>
    </section>
  );
}

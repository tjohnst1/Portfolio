import React from 'react';
import '../scss/additionalWork.scss';
import AdditionalWorkItem from './AdditionalWorkItem';
import Link from 'gatsby-link';

export default ({ projects }) => {
  const additionalProjects = projects.map((obj, i) => <AdditionalWorkItem key={i} project={obj.node} />);

  return (
    <div className="additional-work">
      { additionalProjects }
    </div>
  );
}

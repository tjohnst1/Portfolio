import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeaturedWork from '../components/FeaturedWork';
import AdditionalWork from '../components/AdditionalWork';

export default ({ data }) => {
  const featuredProjects = data.allProjectsJson.edges.filter(project => project.node.featured);
  const additionalProjects = data.allProjectsJson.edges.filter(project => !project.node.featured);

  console.log('featuredProjects', featuredProjects)
  return (
    <div>
      <Hero />
      <FeaturedWork projects={featuredProjects} />
      <AdditionalWork projects={additionalProjects} />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query FeaturedWorkQuery {
  	allProjectsJson {
  	  edges {
  	    node {
          name
          category
          summary
          category
          technologies
          fields {
            slug
          }
          featured
        }
  	  }
  	}
  }
`;

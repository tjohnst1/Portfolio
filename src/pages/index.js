import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeaturedWork from '../components/FeaturedWork';

export default ({ data }) => {
  const { projects } = data.allDataJson.edges[0].node;
  return (
    <div>
      <Hero />
      <FeaturedWork projects={projects} />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query FeaturedWorkQuery {
  	allDataJson {
  	  edges {
  	    node {
          projects {
            name
            category
            summary
            category
            technologies
          }
        }
  	  }
  	}
  }
`;

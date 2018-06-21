import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeaturedWork from '../components/FeaturedWork';
import AdditionalWork from '../components/AdditionalWork';

export default ({ data }) => {
  const featuredProjects = data.allProjectsJson.edges.filter(project => project.node.featured);
  const additionalProjects = data.allProjectsJson.edges.filter(project => !project.node.featured);
  const images = data.allFile.edges;
  return (
    <div className="index">
      <Hero />
      <FeaturedWork projects={featuredProjects} images={images}/>
      <AdditionalWork projects={additionalProjects} />
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
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1200, quality: 90) {
              originalName
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

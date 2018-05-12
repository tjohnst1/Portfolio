/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require(`path`);
var _ = require('lodash');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProjectsJson {
       	  edges {
       	    node {
              name
              category
              summary
              category
              technologies
            }
          }
        }
      }
    `
  ).then(result => {
      const projects = result.data.allProjectsJson.edges;

      projects.forEach(obj => {
        const project = obj.node;
        createPage({
          path: `/projects/${_.kebabCase(project.name)}`,
          component: path.resolve(`./src/templates/projects.js`),
          context: {
            id: project.id,
          },
        })
      })

      resolve();
    })
  })
};

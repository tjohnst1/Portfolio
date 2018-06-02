const path = require(`path`);
var _ = require('lodash');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'ProjectsJson') {
    const slug = `/projects/${_.kebabCase(node.name)}`;
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProjectsJson {
       	  edges {
       	    node {
              id
              name
              category
              summary
              category
              technologies
              featured
            }
          }
        }
      }
    `
  ).then(result => {
      const projects = result.data.allProjectsJson.edges;

      projects.forEach(obj => {
        createPage({
          path: `/projects/${_.kebabCase(obj.node.name)}`,
          component: path.resolve(`./src/templates/projects.js`),
          context: {
            projectId: obj.node.id,
          },
        })
      })

      resolve();
    })
  })
};

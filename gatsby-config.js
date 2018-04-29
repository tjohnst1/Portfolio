module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Blog',
    author: 'Travis Johnston',
    description: 'A starter blog demonstrating what Gatsby can do.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem' ,
      options: {
        name: 'data' ,
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
};

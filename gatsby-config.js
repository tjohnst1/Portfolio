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
        name: 'data',
        path: `${__dirname}/data`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem' ,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121840732-1",
        head: false,
        anonymize: true,
        respectDNT: true
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
};

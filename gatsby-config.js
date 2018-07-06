module.exports = {
  siteMetadata: {
    title: 'Travis Johnston – Web Developer Portfolio',
    author: 'Travis Johnston',
    description: 'Hello! This is the portfolio website of Travis Johnston, a web developer currently residing in beautiful Portland, OR.',
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
        respectDNT: false
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
};

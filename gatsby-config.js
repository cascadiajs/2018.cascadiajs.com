module.exports = {
  siteMetadata: {
    title: 'CascadiaJS 2018 / Nov 15-16 / Seattle, WA',
    organizers: require('./data/organizers.json'),
    speakers: require('./data/speakers.json')
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/logo.jpg',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          // doesn't do anything yet
          firefox: true,
          // doesn't do anything yet, but open graph headers should be managed in a different way i think
          twitter: false,
          yandex: true,
          windows: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CascadiaJS 2018',
        // short name should be no longer than 12 characters
        short_name: 'CascadiaJS 2018',
        description: 'a JSConf for the PacNW',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/logo.jpg'
      }
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://cascadiajs.us1.list-manage.com/subscribe/post?u=ffa37cf28eebc9e75b8558f3b&id=d1b100650c'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-75426-16',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: []
      }
    }
  ]
};

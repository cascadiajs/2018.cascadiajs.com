module.exports = {
  siteMetadata: {
    title: 'CascadiaJS 2018 - a JSConf for the PacNW',
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-transformer-remark`, {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/markdown/`,
      name: "markdown-pages",
    },
  }]
}

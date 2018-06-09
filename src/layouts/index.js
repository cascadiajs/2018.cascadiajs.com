import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The website for the CascadiaJS 2018 conference. CascadiaJS is a conference for web developers in the Pacific Northwest.' },
      ]}
      link={[{
        href: 'https://fonts.googleapis.com/css?family=Lato:300|Patrick+Hand', rel: 'stylesheet'
      }]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div id="container">
      {children()}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

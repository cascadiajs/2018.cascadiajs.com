import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'CascadiaJS 2018 is a conference for web developers, by web developers in the Pacific Northwest. Taking place November 15-16 in Seattle, WA.'
        }
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Lato:300|Patrick+Hand',
          rel: 'stylesheet'
        }
      ]}
    />
    <div id="container">
      <Header />
      <div id="main">{children()}</div>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import './index.css';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
              {
                name: 'description',
                content:
                'CascadiaJS 2018 is a conference for web developers, by web developers in the Pacific Northwest. Taking place November 15-16 in Seattle, WA.'
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                property: 'og:title',
                content: data.site.siteMetadata.title
              },
              {
                property: 'og:image',
                content: 'https://2018.cascadiajs.com/cjs-hero.png'
              }
            ]}
            link={[
              {
                href: 'https://fonts.googleapis.com/css?family=Lato:300,400|Viga|Dosis',
                rel: 'stylesheet'
              }
            ]}
          />
          <div id="container">
            <Header />
            <div id="main">{children}</div>
            <Footer />
          </div>
        </div>

      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import './markdown.css';

export default function Template ({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="markdown-container">
      <Helmet
        meta={[
          {
            name: 'description',
            content:
              'CascadiaJS 2018 is a conference for web developers, by web developers in the Pacific Northwest. Taking place November 15-16 in Seattle, WA.'
          },
          {
            property: 'og:title',
            content: 'CascadiaJS 2018 / Nov 15-16 / Seattle, WA'
          },
          {
            property: 'og:image',
            content: 'https://2018.cascadiajs.com/cjs-hero.png'
          }
        ]}
      />
      <div className="markdown-page">
        <h1>{frontmatter.title}</h1>
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
        />
      </div>
    </div>
  );
}

Template.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query MarkdownByPath($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

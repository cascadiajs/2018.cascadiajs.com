import React from 'react';
import PropTypes from 'prop-types';
import './markdown.css';

export default function Template ({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="markdown-container">
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

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  // create the speaker pages

  const speakerTemplate = path.resolve(`src/templates/speaker.js`);

  const speakers = require('./data/speakers.json');
  speakers.forEach((speaker) => {
    if (speaker.name) {
      let path = '/speakers/' + speaker.name.replace(' ', '-').toLowerCase();
      console.log(`creating page: ${path}`);
      createPage({
        path: path,
        component: speakerTemplate,
        context: speaker
      });
    }
  });

  // create the markdown pages

  const markdownTemplate = path.resolve(`src/templates/markdown.js`);

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      let path = '/' + node.fileAbsolutePath.split('/').pop().slice(0, -3);
      console.log(`creating page: ${path}`);
      createPage({
        path: path,
        component: markdownTemplate,
        context: {fileAbsolutePath: node.fileAbsolutePath}
      });
    });
  });
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './coding-for-kids.module.css';

function KidsPage ({ data }) {
  console.log(data);
  return (
    <section id={styles.kids}>

    </section>
  );
}

export default KidsPage;

KidsPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query KidsPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "stickers" } }) {
      edges {
        node {
          name
          extension
          dir
          modifiedTime
        }
      }
    }
  }
`;

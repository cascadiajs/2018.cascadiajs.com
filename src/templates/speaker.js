import React from 'react';
import PropTypes from 'prop-types';
import styles from './speaker.module.css';
import Layout from '../layouts';

export default function SpeakerTemplate ({ pageContext }) {
  console.log(pageContext);
  return (
    <Layout>
      <div id={styles.container}>
        <h1 className={styles.name}>{pageContext.name}</h1>
        <h1 className={styles.talk}>{pageContext.talk}</h1>
        <div id={styles.speaker}>
          <div><img alt={'photo of ' + pageContext.name} className="avatar" height="200" width="200" src={pageContext.avatar}/></div>
          <div>{pageContext.blurb}</div>
        </div>
      </div>
    </Layout>
  );
}

SpeakerTemplate.propTypes = {
  pageContext: PropTypes.object
};

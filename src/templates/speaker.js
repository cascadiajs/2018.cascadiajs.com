import React from 'react';
import PropTypes from 'prop-types';
import styles from './speaker.module.css';

export default function SpeakerTemplate ({pathContext}) {
  console.log(pathContext);
  return (
    <div id={styles.container}>
      <h1 className={styles.name}>{pathContext.name}</h1>
      <h1 className={styles.talk}>{pathContext.talk}</h1>
      <div id={styles.speaker}>
        <div><img alt={'photo of ' + pathContext.name} className="avatar" height="200" width="200" src={pathContext.avatar}/></div>
        <div>{pathContext.blurb}</div>
      </div>
    </div>
  );
}

SpeakerTemplate.propTypes = {
  pathContext: PropTypes.object
};

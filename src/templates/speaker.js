import React from 'react';
import PropTypes from 'prop-types';
import styles from './speaker.module.css';

export default function SpeakerTemplate ({ pathContext: speaker }) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('speaker', speaker);
  }
  return (
    <div id={styles.container}>
      <h1 className={styles.name}>{speaker.name}</h1>
      <h1 className={styles.talk}>{speaker.talk}</h1>
      <div id={styles.speaker}>
        <div><img alt={'photo of ' + speaker.name} className="avatar" height="200" width="200" src={speaker.avatar}/></div>
        <div>
          {speaker.blurb}
          {(speaker.slides || speaker.demo) && (
            <div>
              <ul>
                {speaker.slides && <li><a title={`link to ${speaker.name}'s slides`} href={speaker.slides}>Slides</a></li>}
                {speaker.demo && <li><a title={`link to ${speaker.name} demo from the talk`} href={speaker.demo}>Demo</a></li>}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

SpeakerTemplate.propTypes = {
  pathContext: PropTypes.object
};

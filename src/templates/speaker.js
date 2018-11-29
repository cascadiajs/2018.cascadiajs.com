import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import styles from './speaker.module.css';
import SpeakerSocialMedia from '../components/SpeakerSocialMedia.js';

export default function SpeakerTemplate({ pathContext: speaker }) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('speaker', speaker);
  }
  return (
    <div id={styles.container}>
      <h1 className={styles.name}>
        {speaker.name} <SpeakerSocialMedia {...speaker} />
      </h1>
      <h1 className={styles.talk}>{speaker.talk}</h1>
      <div id={styles.speaker}>
        <div>
          <img
            alt={'photo of ' + speaker.name}
            className="avatar"
            height="200"
            width="200"
            src={speaker.avatar}
          />
        </div>
        <div>
          <p>{speaker.blurb}</p>
          {speaker.youtube && (
            <div>
              <YouTube videoId={speaker.youtube} />
            </div>
          )}
          {(speaker.slides || speaker.demo || speaker.youtube) && (
            <div>
              <h2>Links</h2>
              <ul>
                {speaker.slides && (
                  <li>
                    <a
                      title={`link to ${speaker.name}'s slides`}
                      href={speaker.slides}
                    >
                      Slides
                    </a>
                  </li>
                )}
                {speaker.demo && (
                  <li>
                    <a
                      title={`link to ${speaker.name}'s demo from the talk`}
                      href={speaker.demo}
                    >
                      Demo
                    </a>
                  </li>
                )}
                {speaker.youtube && (
                  <li>
                    <a
                      title={`link to ${speaker.name}'s recording of the`}
                      href={`https://www.youtube.com/watch?v=${
                        speaker.youtube
                      }`}
                    >
                      Recording
                    </a>
                  </li>
                )}
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

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';
import styles from './speakers.module.css';
import SpeakerSocialMedia from './SpeakerSocialMedia.js';
import SpeakerTalkIcon from './SpeakerTalkIcon.js';

function Speakers ({ speakers }) {
  return (
    <section id={styles.speakers}>
      {shuffle(speakers).map(speaker => {
        let name = <h3>&nbsp;<br/>&nbsp;</h3>;
        let talk = speaker.talk;
        if (speaker.name) {
          name = (
            <h3>
              {speaker.name.split(' ')[0]}
              <br/>
              {speaker.name.split(' ').slice(1).join(' ')}
              &nbsp;
              <SpeakerSocialMedia {...speaker} />
              <SpeakerTalkIcon {...speaker} />
            </h3>
          );
          talk = <Link to={'/speakers/' + speaker.name.replace(' ', '-').toLowerCase()}>{speaker.talk}</Link>;
        }
        return (
          <div key={speaker.name}>
            {name}
            <p><img className={styles.avatar} src={speaker.avatar} alt={speaker.name}/></p>
            <p>{talk}</p>
          </div>
        );
      })}
    </section>
  );
}

Speakers.propTypes = {
  speakers: PropTypes.array.isRequired
};

export default Speakers;

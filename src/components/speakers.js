import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';
import styles from './speakers.module.css';
import SpeakerSocialMedia from './SpeakerSocialMedia.js';

function Speakers ({ data }) {
  const speakers = shuffle(data.site.siteMetadata.speakers).map(speaker => {
    let name = <h3>&nbsp;<br/>&nbsp;</h3>;
    let talk = speaker.talk;
    if (speaker.name) {
      name = <h3>{speaker.name.split(' ')[0]}<br/>{speaker.name.split(' ')[1]} <SpeakerSocialMedia {...speaker} /></h3>;
      talk = <Link to={'/speakers/' + speaker.name.replace(' ', '-').toLowerCase()}>{speaker.talk}</Link>;
    }
    return (
      <div key={speaker.name}>
        {name}
        <p><img className={styles.avatar} src={speaker.avatar} alt={speaker.name}/></p>
        <p>{talk}</p>
      </div>
    );
  });
  return (
    <section id={styles.speakers}>
      {speakers}
    </section>
  );
}

Speakers.propTypes = {
  data: PropTypes.object
};

export default Speakers;

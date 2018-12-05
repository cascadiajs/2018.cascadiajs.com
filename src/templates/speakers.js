import React from 'react';
import PropTypes from 'prop-types';
import Speakers from '../components/speakers.js';

export default function SpeakersTemplate ({ pathContext: { speakers } }) {
  return <Speakers speakers={speakers} />;
}

SpeakersTemplate.propTypes = {
  pathContext: PropTypes.object.isRequired
};

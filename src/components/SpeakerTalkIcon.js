import React from 'react';
import PropTypes from 'prop-types';

export default function SpeakerTalkIcon ({ youtube }) {
  if (youtube) {
    return <a title="link to talk" href={`https://youtu.be/${youtube}`}><img height="20" width="20" alt="youtube icon" src="/youtube.png"/></a>;
  }
  return null;
}

SpeakerTalkIcon.propTypes = {
  youtube: PropTypes.string
};

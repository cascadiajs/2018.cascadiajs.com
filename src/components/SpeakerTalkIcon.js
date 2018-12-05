import React from 'react';
import PropTypes from 'prop-types';

export default function SpeakerTalkIcon ({ youtube }) {
  if (youtube) {
    return <a href={`https://youtu.be/${youtube}`}><img height="20" width="20" alt="twitter icon" src="/youtube.png"/></a>;
  }
  return null;
}

SpeakerTalkIcon.propTypes = {
  youtube: PropTypes.string
};

import React from 'react';
import PropTypes from 'prop-types';

export default function SpeakerSocialMedia ({ twitter, github, linkedin }) {
  if (twitter) {
    return <a href={'https://twitter.com/' + twitter}><img height="20" width="20" alt="twitter icon" src="/twitter.png"/></a>;
  } else if (github) {
    return <a href={'https://github.com/' + github}><img height="20" width="20" alt="github icon" src="/github-logo.png"/></a>;
  } else if (linkedin) {
    return <a href={'https://linkedin.com/in/' + linkedin}><img height="20" width="20" alt="linkedin icon" src="/linkedin-logo.png"/></a>;
  }
  return null;
}

SpeakerSocialMedia.propTypes = {
  twitter: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string
};

import React from 'react';
import hero from '../images/cascadiajs-background.png';
import MailChimpForm from '../components/mailChimpForm';
import './index.css';

function IndexPage () {
  return (
    <div>
      <img
        id="hero"
        alt="CascadiaJS 2018, November 15 & 16, Seattle, Washington"
        src={hero}
      />
      <br />
      <MailChimpForm />
    </div>
  );
}

export default IndexPage;

import React from 'react';
import hero from '../images/cascadiajs-background.png';
import MailChimpForm from '../components/mailChimpForm';

function IndexPage () {
  return (
    <div id="box" style={{ position: 'relative' }}>
      <img
        alt="CascadiaJS 2018, November 15 & 16, Seattle, Washington"
        src={hero}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      <br />
      <MailChimpForm />
    </div>
  );
}

export default IndexPage;

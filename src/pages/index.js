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
      <div id="tagline">
        <h2>CascadiaJS 2018 is a conference for web developers by web developers.</h2>
        <p>
          <a className="cta" href="/submit-talk-proposal">Be a Speaker</a>
          <a className="cta" href="/submit-organize-proposal">Be an Organizer</a>
          <a className="cta soon" href="#soon" title="Tickets On Sale Soon!">Buy Tickets</a>
        </p>
        <MailChimpForm />
      </div>
    </div>
  );
}

export default IndexPage;

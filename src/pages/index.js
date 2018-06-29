import React from 'react';
import Link from 'gatsby-link';
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
        <div id="cta">
          <div><Link to="/call-for-presenters">Be a Speaker</Link></div>
          <div><Link to="/call-for-organizers">Be an Organizer</Link></div>
          <div><Link to="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale Soon!">Buy Tickets</Link></div>
        </div>
        <MailChimpForm />
      </div>
    </div>
  );
}

export default IndexPage;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './conf.module.css';

console.log(styles);

function Conf ({ data }) {
  return (
    <div id={styles.component}>
      <div id={styles.talks}>
        <div>
          <img id={styles.coffee} src="/coffee.svg" alt="coffee sticker"/>
        </div>
        <div id={styles.tickets}>
          <p><img src="/the-conference.svg" alt="the conference sticker"/></p>
          <h2>Two Days of Talks</h2>
          <p>CascadiaJS features a single track of 24 amazing speakers discussing the cutting-edge of JavaScript, web development and engineering culture over the course of 2 days. Topics include: Serverless, Distributed Web, React, Web Assembly, Accessiblity, Voice Interfaces and more!</p>
          <p><a className="primary cta" href="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale!">Purchase Tickets</a></p>
        </div>
        <div>
          <img src="/mushroom.svg" alt="mushroom sticker"/>
        </div>
      </div>
      <div id={styles.extras}>
        <div id={styles.closing}>
          <h3>Social Fun Times</h3>
          <p>Following both days of talks, we will be organizing awesome evening events for folks to unwind and enjoy the company of new friends. We are renting out <a href="https://cinerama.com/">Cinerama</a> for a private screening and the Closing Party will be held at the <a href="https://livingcomputers.org/">Living Computer Museum</a> for a night of fun and hacking!</p>
          <p><img src="/old-fashioned.svg" alt="old fashioned cocktail sticker"/></p>
        </div>
        <div id={styles.scholarships}>
          <h3>Scholarships</h3>
          <p>In order to make CascadiaJS as accessible as possible, we are working with local tech companies to fund a <a href="/scholarships">Scholarship Program</a> If you are a member of an under-represented group in tech or have financial constraints, please apply!</p>
          <p><img src="/banana-slug.svg" alt="banana slug sticker"/></p>
        </div>
        <div>
          <h3>Code of Conduct</h3>
          <p>We work hard to provide a safe and inclusive environment for everyone! We expect, and require, all organizers, sponsors, speakers, volunteers, and attendees of all levels to adhere to our <Link to="/code-of-conduct">Code of Conduct</Link></p>
          <p><img src="/flower.svg" alt="flower sticker"/></p>
        </div>
      </div>
    </div>
  );
}

Conf.propTypes = {
  data: PropTypes.object
};

export default Conf;

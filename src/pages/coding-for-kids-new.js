import React from 'react';
import PropTypes from 'prop-types';
import styles from './coding-for-kids.module.css';

function KidsPage ({ data }) {
  let stickers = [];
  data.allFile.edges.forEach(img => {
    stickers.push(<img alt={img.node.name} src={'/stickers/' + img.node.name + '.' + img.node.extension}/>);
  });
  return (
    <section id={styles.kids}>
      <h1>Coding for Kids Workshop Day</h1>
      <img alt="kid coding" src="/catherine-shadow.svg" id={styles.hero}/>
      <p>Following the conference, we are working with Microsoft to host a Coding for Kids workshop at the Microsoft Reactor in South Lake Union. This event is inspired by a [cool experience](https://www.geekwire.com/2018/will-8-year-old-girl-stick-coding-fun-project-dad-attracts-gifts-tech-community/) that a local 2nd grader had learning to code and collecting dev stickers this past summer. The goal of this event is to introduce area kids to coding in a *welcoming* and *fun* environment. We will have a bunch of different workshops targeted at different age groups, so there should be something for everybody. Here are some important details:</p>
      <table>
        <tr>
          <th>Date</th><td>Saturday, Nov 17</td>
        </tr>
        <tr>
          <th>Ages</th><td>K - 12</td>
        </tr>
        <tr>
          <th>Cost</th><td>Suggested donation of $5, with all proceeds going to the <a href="https://techaccess.org/about-us/">Tech Access Foundation</a>.</td>
        </tr>
        <tr>
          <th>Location</th><td>Microsoft Reactor Seattle, 320 Westlake Ave N, Seattle, WA 98109</td>
        </tr>
        <tr>
          <th>Food &amp; Drinks</th><td>Coffee and Lunch will be provided, courtesy of Microsoft.</td>
        </tr>
        <tr>
          <th>What to Bring</th><td>PLEASE bring a laptop for each child. We will have some on-site loaners, but they will be in limited supply.</td>
        </tr>
      </table>
      <h2>Schedule</h2>
      <section id={styles.schedule}>
        <div>
          <div className={styles.time}>9:30am</div>
          <div>Doors Open</div>
        </div>
      </section>
      <h2>What to Expect</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h2>Registration</h2>
      <p>There are 4 kinds of tickets. Please make sure that everyone who is coming to the event has a ticket:</p>
      <ul>
        <li>Volunteer - If you&apos;d like to volunteer to set-up, run a workshop, assist an instructor or otherwise help out.</li>
        <li>Parent - All kids must have an adult with them. No drop-offs. One adult can be the guardian for multiple kids.</li>
        <li>Non-student kid - Brothers and sisters who will not be participating, but are being brought along to hang out.</li>
        <li>Workshop - Spaces are limited, so please only sign-up for one workshop per kid.</li>
      </ul>
      <p><a href="https://ti.to/event-loop/cascadiajs-2018/" className="cta">Register</a></p>
      <p>We are in the process of finalizing the list of workshops, but here are a few examples of what we&apos;re going to offer.</p>
      <h2>Workshops</h2>
      <div className="workshop">
        <h3>Tessel Photo-Tweeter</h3>
        <p><img src="/tessel.png" alt="Tessel tweet"/></p>
        <p><strong>Description:</strong> Build a portable photo-bot that takes pictures and posts them to Twitter! Start by making your own social-media-happy robot, then build from there: Can you @-tweet to it to ask it for a photo? What if you could make it take a picture by clapping? What if it did something right before taking the picture that made the photo subjects react? What if it took a picture every 4 seconds, like a time lapse? Extra hardware/sensors will be around, and so will mentors. What will you build?</p>
        <p><strong>Age range:</strong> Recommended for middle school and up. No prior experience with software or hardware required. But for the pros, this workshop is designed to let you set your own challenge!</p>
      </div>
      <h2>Event Sponsors</h2>
      <p><a href="https://developer.microsoft.com/en-us/reactor/"><img src="/reactor-seaplane.png" alt="microsoft reactor"/></a></p>
      <h2>Sticker Sponsors</h2>
      {stickers}
    </section>
  );
}

export default KidsPage;

KidsPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query KidsPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "stickers" } }) {
      edges {
        node {
          name
          extension
          dir
          modifiedTime
        }
      }
    }
  }
`;

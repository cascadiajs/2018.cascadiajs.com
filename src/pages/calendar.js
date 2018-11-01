import React from 'react';
import PropTypes from 'prop-types';
import styles from './calendar.module.css';

function CalendarPage ({ data }) {
  console.log(data);
  return (
    <section id={styles.page}>
      <h1>Calendar of Events</h1>
      <p><a href="https://calendar.google.com/calendar/ical/er6c9rngtivppluqfbe2kjsgcs%40group.calendar.google.com/public/basic.ics">Subscribe to the CascadiaJS 2018 iCal</a></p>
      <div id={styles.calendar}>
        <div>
          <h2 className={styles.day}>Monday</h2>
          <article className={styles.event}>
            <h3>GraphQL Workshop (1/2)</h3>
            <p>Join Eve Porcello and Alex Banks for a 2-day workshop on building apps with GraphQL.</p>
            <p><a href="https://ti.to/moonhighway/graphql-seattle/discount/cascadiajs">Tickets</a></p>
          </article>
        </div>
        <div>
          <h2 className={styles.day}>Tuesday</h2>
          <article className={styles.event}>
            <h3>GraphQL Workshop (2/2)</h3>
            <p>Day Two of the 2-day GraphQL workshop.</p>
          </article>
          <article className={styles.event}>
            <h3>A11Y Seattle Meetup</h3>
            <p>A11ySea is holding an open roundtable discussion on development of accessible web applications with JavaScript.</p>
            <p><a href="https://www.meetup.com/a11ysea/events/255811283/">RSVP</a></p>
          </article>
        </div>
        <div>
          <h2 className={styles.day}>Wednesday</h2>
          <article className={styles.event}>
            <h3>Scholar Success Mixer</h3>
            <p>A special event bringing together CascadiaJS scholarship recipients with senior members of the JS community here in Seattle for an evening of networking and fun.</p>
          </article>
        </div>
        <div>
          <h2 className={styles.day}>Thursday</h2>
          <article className={styles.event}>
            <h3>CascadiaJS (1/2)</h3>
            <p><sub>8:00am - 5:45pm</sub></p>
            <p>Day One of the 2-day CascadiaJS conference.</p>
            <p><a href="https://ti.to/event-loop/cascadiajs-2018">Tickets</a></p>
          </article>
          <article className={styles.event}>
            <h3>Opening Party</h3>
            <p><sub>8:00pm - midnight</sub></p>
            <p>Private screening at Cinerama.</p>
          </article>
        </div>
        <div>
          <h2 className={styles.day}>Friday</h2>
          <article className={styles.event}>
            <h3>CascadiaJS (2/2)</h3>
            <p><sub>8:00am - 5:45pm</sub></p>
            <p>Day Two of the 2-day CascadiaJS conference.</p>
          </article>
          <article className={styles.event}>
            <h3>Closing Party</h3>
            <p><sub>6:30pm - 11:30pm</sub></p>
            <p>Fun, friends and karaoke at Living Computers!</p>
          </article>
        </div>
        <div>
          <h2 className={styles.day}>Saturday</h2>
          <article className={styles.event}>
            <h3>Coding for Kids</h3>
            <p>A day full of coding workshops targeted at kids of all ages.</p>
            <p><a href="/coding-for-kids">More Info</a></p>
          </article>
          <article className={styles.event}>
            <h3>React Training</h3>
            <p>Full-day React training workshop. Combo tickets for the CascadiaJS conference and React workshop still available.</p>
            <p><a href="https://ti.to/event-loop/cascadiajs-2018">Tickets</a></p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CalendarPage;

CalendarPage.propTypes = {
  data: PropTypes.object
};

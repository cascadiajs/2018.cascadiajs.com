import React from 'react';
import Link from 'gatsby-link';
import styles from './calendar.module.css';

function Calendar () {
  return (
    <section id={styles.calendar}>
      <article><h2>Monday</h2></article>
      <article><h2>Tuesday</h2></article>
      <article><h2>Wedesday</h2></article>
      <article>
        <h2>Thursday</h2>
        <p>
          <Link to="/">CascadiaJS - Day One</Link>
        </p>
      </article>
      <article>
        <h2>Friday</h2>
        <p>
          <Link to="/">CascadiaJS - Day Two</Link>
        </p>
      </article>
      <article>
        <h2>Saturday</h2>
        <p>
          <Link to="/kids-coding">Cascadia Kids</Link>
        </p>
      </article>
      <article><h2>Sunday</h2></article>
    </section>
  );
}

export default Calendar;

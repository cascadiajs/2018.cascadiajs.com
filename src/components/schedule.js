import React from 'react';
import PropTypes from 'prop-types';
import Day1 from './day1.js';
import Day2 from './day2.js';
import styles from './schedule.module.css';

console.log(styles);

function Schedule ({ speakers }) {
  return (
    <div id={styles.component}>
      <p><img src="/the-conference.svg" alt="the conference sticker"/></p>
      <p><a className="primary cta" href="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale!">Purchase Tickets</a></p>
      <div id={styles.days}>
        <Day1 speakers={speakers}/>
        <Day2 speakers={speakers}/>
      </div>
    </div>
  );
}

Schedule.propTypes = {
  speakers: PropTypes.array
};

export default Schedule;

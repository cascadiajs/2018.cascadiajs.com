import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './schedule.module.css';

console.log(styles);

function Day2 ({ speakers }) {
  console.log(speakers);
  let speakerHash = {};
  speakers.forEach(speaker => {
    let title = <span className={styles.title}><Link to={'/speakers/' + speaker.name.replace(' ', '-').toLowerCase()}>{speaker.talk}</Link></span>;
    let by = <span className={styles.speaker}>by {speaker.name}</span>;
    speakerHash[speaker.name] = <div className={styles.talk}>{title}<br/>{by}</div>;
  });
  return (
    <div>
      <div id={styles.daytwo}>
        <h2 className={styles.day}>Friday, November 16</h2>
        <div className={styles.item}>
          <div className={styles.time}>8:00am</div>
          <div className={styles.desc}>Registration</div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}>9:15am</div>
          <div className={styles.desc}>Opening Ceremonies</div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}>9:30am</div>
          <div className={styles.desc}>
            <div>
              { speakerHash['Brian Leroux']}
              { speakerHash['Laker Sparks']}
              { speakerHash['Will Klein']}
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}><div>10:55am</div></div>
          <div className={styles.desc}>
            <div className={styles.box}>
              <div>Break</div>
              <div><img src="/coffee.svg" alt="coffee sticker"/></div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}>11:20am</div>
          <div className={styles.desc}>
            <div>
              { speakerHash['Faddah Wolf']}
              { speakerHash['Aaron Gustafson']}
              { speakerHash['Memo Döring']}
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}><div>12:45pm</div></div>
          <div className={styles.desc}>
            <div className={styles.box}>
              <div><Link to="/food-and-drinks#day2-lunch">Lunch</Link></div>
              <div><img src="/mushroom.svg" alt="mushroom sticker"/></div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}>2:10pm</div>
          <div className={styles.desc}>
            <div>
              { speakerHash['Pranshu Bajpai']}
              { speakerHash['Atishay Jain']}
              { speakerHash['Glenn Block']}
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}><div>3:35pm</div></div>
          <div className={styles.desc}>
            <div className={styles.box}>
              <div>Break</div>
              <div><img src="/coffee.svg" alt="coffee sticker"/></div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}>4:00pm</div>
          <div className={styles.desc}>
            <div>
              { speakerHash['James Snell']}
              { speakerHash['Ruth John']}
              { speakerHash['Mikeal Rogers']}
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}><div>5:25pm</div></div>
          <div className={styles.desc}>
            <div className={styles.box}>
              <div>Wrap-up Day Two</div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.time}><div>6:30pm</div></div>
          <div className={styles.desc}>
            <div className={styles.box}>
              <div>Closing Party at </div>
              <div><img src="/logos/livingcomputers.png" alt="coffee sticker"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Day2.propTypes = {
  speakers: PropTypes.array
};

export default Day2;

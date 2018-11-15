import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './schedule.module.css';

console.log(styles);

function Day1 ({ speakers }) {
  console.log(speakers);
  let speakerHash = {};
  speakers.forEach(speaker => {
    let title = <span className={styles.title}><Link to={'/speakers/' + speaker.name.replace(' ', '-').toLowerCase()}>{speaker.talk}</Link></span>;
    let by = <span className={styles.speaker}>by {speaker.name}</span>;
    speakerHash[speaker.name] = <div className={styles.talk}>{title}<br/>{by}</div>;
  });
  return (
    <div>
      <div id={styles.dayone}>
        <h2 className={styles.day}>Thursday, November 15</h2>
        <div>
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
                { speakerHash['Tara Vancil']}
                { speakerHash['Shannon Capper']}
                { speakerHash['Dominic Farolino']}
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
                { speakerHash['Lauren Lee']}
                { speakerHash['Megan Slater']}
                { speakerHash['Patrick Woo']}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.time}><div>12:45pm</div></div>
            <div className={styles.desc}>
              <div className={styles.box}>
                <div><Link to="/food-and-drinks#day1-lunch">Lunch</Link></div>
                <div><img src="/mushroom.svg" alt="mushroom sticker"/></div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.time}>2:10pm</div>
            <div className={styles.desc}>
              <div>
                { speakerHash['Shannon Foster']}
                { speakerHash['Tre Ammatuna']}
                { speakerHash['Elgin-Skye McLaren']}
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
                { speakerHash['Julie Busch']}
                { speakerHash['Michael Lange']}
                { speakerHash['Yehuda Katz']}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.time}><div>5:25pm</div></div>
            <div className={styles.desc}>
              <div className={styles.box}>
                <div><b>Diversity &amp; Inclusion in Tech</b><br/>
                  Trish Dziko, <a href="https://techaccess.org/">Tech Access Foundation</a><br/>
                  Dee Del Rosario, <a href="https://www.adadevelopersacademy.org/">Ada Developer Academy</a><br/>
                  Logan Gore, <a href="https://www.un-loop.org/">Unloop</a><br/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.time}><div>5:45pm</div></div>
            <div className={styles.desc}>
              <div className={styles.box}>
                <div>Wrap-up Day One</div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.time}><div>8:00pm</div></div>
            <div className={styles.desc}>
              <div className={styles.box}>
                <div>Opening Party at </div>
                <div><img src="/logos/cinerama.png" alt="coffee sticker"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Day1.propTypes = {
  speakers: PropTypes.array
};

export default Day1;

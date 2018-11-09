import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './schedule.module.css';

console.log(styles);

function Schedule ({ speakers }) {
  console.log(speakers);
  let speakerHash = {};
  speakers.forEach(speaker => {
    let title = <span className={styles.title}><Link to={'/speakers/' + speaker.name.replace(' ', '-').toLowerCase()}>{speaker.talk}</Link></span>;
    let by = <span className={styles.speaker}>by {speaker.name}</span>;
    speakerHash[speaker.name] = <div className={styles.talk}>{title}<br/>{by}</div>;
  });
  return (
    <div id={styles.component}>
      <p><img src="/the-conference.svg" alt="the conference sticker"/></p>
      <p>CascadiaJS features a single track of 24 amazing speakers discussing the cutting-edge of JavaScript, web development and engineering culture over the course of 2 days. Topics include: Serverless, Distributed Web, React, Web Assembly, Accessiblity, Voice Interfaces and more! We also work hard to provide a <strong>safe</strong> and <strong>inclusive</strong> environment for everyone! We expect, and require, all organizers, sponsors, speakers, volunteers, and attendees of all levels to adhere to our <Link to="/code-of-conduct">Code of Conduct</Link>.</p>
      <p><a className="primary cta" href="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale!">Purchase Tickets</a></p>
      <div id={styles.days}>
        <div id={styles.dayone}>
          <h2 className={styles.day}>Thursday, November 15</h2>
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
                <div>Coffee Break</div>
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
                <div>Lunch</div>
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
                <div>Coffee Break</div>
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
                <br/><br/>
                { speakerHash['Will Klein']}
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.time}><div>10:55am</div></div>
            <div className={styles.desc}>
              <div className={styles.box}>
                <div>Coffee Break</div>
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
                <div>Lunch</div>
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
                <div>Coffee Break</div>
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
    </div>
  );
}

Schedule.propTypes = {
  speakers: PropTypes.array
};

export default Schedule;

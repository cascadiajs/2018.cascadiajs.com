import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styles from './coding-for-kids.module.css';

function KidsPage ({ data }) {
  console.log(data);
  let stickers = [];
  data.allFile.edges.forEach(img => {
    stickers.push(<img alt={img.node.name} src={'/stickers/' + img.node.name + '.' + img.node.extension}/>);
  });
  return (
    <section id={styles.kids}>
      <Helmet
        meta={[
          {
            name: 'description',
            content:
              'CascadiaJS and Microsoft are co-hosting a Coding for Kids workshop at the Microsoft Reactor in South Lake Union on November 17th.'
          },
          {
            property: 'og:title',
            content: 'Coding for Kids Workshop Day (Nov 17)'
          },
          {
            property: 'og:image',
            content: 'https://2018.cascadiajs.com/cate-sticker.png'
          }
        ]}
      />
      <h1>Coding for Kids Workshop Day</h1>
      <img alt="kid coding" src="/catherine-shadow.svg" id={styles.hero}/>
      <p>CascadiaJS and Microsoft are co-hosting a Coding for Kids workshop at the Microsoft Reactor in South Lake Union. This event is inspired by a <a href="https://www.geekwire.com/2018/will-8-year-old-girl-stick-coding-fun-project-dad-attracts-gifts-tech-community/">cool experience</a> that a local 2nd grader had learning to code and collecting dev stickers this past summer. The goal of this event is to introduce area kids to coding in a <strong>welcoming</strong> and <strong>fun</strong> environment. We will have a bunch of different workshops targeted at different age groups, so there should be something for everybody. Here are some important details:</p>
      <p><br/><span className="exclaim">HELP: We are looking for someone to lead a workshop for kids <strong>9 and under</strong>!</span></p><br/>
      <table>
        <tr>
          <th>Date</th><td>Saturday, Nov 17</td>
        </tr>
        <tr>
          <th>Ages</th><td>See workshops below</td>
        </tr>
        <tr>
          <th>Cost</th><td>FREE, with a suggested donation of $5 going to the <a href="https://techaccess.org/about-us/">Tech Access Foundation</a>.</td>
        </tr>
        <tr>
          <th>Location</th><td>Microsoft Reactor Seattle, 320 Westlake Ave N, Seattle, WA 98109</td>
        </tr>
        <tr>
          <th>Parking</th><td>Parking validated at 320 Westlake and 321 Terry parking garages</td>
        </tr>
        <tr>
          <th>Code of Conduct</th><td>All attendees must abide by the <a href="https://developer.microsoft.com/en-us/reactor/CodeOfConduct">Microsoft Reactor Code of Conduct</a></td>
        </tr>
        <tr>
          <th>Food &amp; Drinks</th><td>Coffee and Lunch will be provided, courtesy of Microsoft Reactor.</td>
        </tr>
        <tr>
          <th>What to Bring</th><td>PLEASE bring a laptop for each child. We will have some on-site loaners, but they will be in limited supply.</td>
        </tr>
        <tr>
          <th>Other Activites</th><td>Aside from coding workshops, we will have an area set-up for kids to hang out and play. We will have books, games and drawing materials on-site for kids to use.</td>
        </tr>
      </table>
      <p><a href="https://www.eventbrite.com/e/cascadian-coding-for-kids-tickets-51272915671" className="cta">Register</a></p>
      <h2>Schedule</h2>
      <p><i>Draft schedule– more coming soon!</i></p>
      <table id={styles.schedule}>
        <tr>
          <th>9:00am</th>
          <td colSpan="4">Doors Open &amp; Coffee</td>
        </tr>
        <tr>
          <th>9:30am</th>
          <td colSpan="4">Kick-off Event</td>
        </tr>
        <tr>
          <th>10:00am</th>
          <td><a href="#tessel">Tessel Photo-Tweeter</a></td>
          <td><a href="#p5js">Making Art in the Browser</a></td>
          <td><a href="#tbd">Morning Workshop TBD</a></td>
        </tr>
        <tr>
          <th>12:30pm</th>
          <td colSpan="4">Lunch</td>
        </tr>
        <tr>
          <th>1:30pm</th>
          <td><a href="#jsquest">JSQuest</a></td>
          <td><a href="#roblox">Build a Game with Roblox</a></td>
          <td><a href="#tbd">Afternoon Workshop TBD</a></td>
        </tr>
        <tr>
          <th>4:00pm</th>
          <td colSpan="4">Wrap-up &amp; Raffle</td>
        </tr>
        <tr>
          <th>4:30pm</th>
          <td colSpan="4">Doors Close</td>
        </tr>
      </table>
      <h2>Workshops</h2>
      <p>We are in the process of finalizing the list of workshops, but here are a few examples of what we&apos;re going to offer.</p>
      <div id="tessel" className={styles.workshop}>
        <h3>Tessel Photo-Tweeter</h3>
        <p><img src="/tessel.png" alt="Tessel tweet"/></p>
        <p><strong>Description:</strong> Build a portable photo-bot that takes pictures and posts them to Twitter! Start by making your own social-media-happy robot, then build from there: Can you @-tweet to it to ask it for a photo? What if you could make it take a picture by clapping? What if it did something right before taking the picture that made the photo subjects react? What if it took a picture every 4 seconds, like a time lapse? Extra hardware/sensors will be around, and so will mentors. What will you build?</p>
        <p><strong>Age range:</strong> Recommended for middle school and up. No prior experience with software or hardware required. But for the pros, this workshop is designed to let you set your own challenge!</p>
      </div>
      <div id="p5js" className={styles.workshop}>
        <h3>Making Art in the Browser</h3>
        <p><img src="/p5js.png" alt="P5.js"/></p>
        <p><strong>Description:</strong> Using code to make cool stuff: A fun introduction! <a href="https://p5js.org/">P5.js</a> is a JavaScript library used by artists and designers to make art, visual designs, animations and more. In this workshop you will learn to program interactive shapes and patterns, right in the browser! Make your own experimental creations that you can share with your friends online. </p>
        <p><strong>Age range:</strong> Recommended for middle school and up. No prior experience with software required.</p>
        <p><strong>Required Equipment:</strong> A laptop that can connect to Wi-Fi.</p>
      </div>
      <div id="jsquest" className={styles.workshop}>
        <h3>JSQuest</h3>
        <p><img src="/quest.png" alt="JSQuest"/></p>
        <p><strong>Description:</strong> In JSQuest, students will level up their skills in JavaScript through a series of progressively more challenging coding exercises. As students advance through their quest, they will receive experience points and loot to deck out their own virtual avatar in TwilioQuest, an online training platform built by Twilio. There may even be some rad real-world loot for some adventurers...</p>
        <p><strong>Age range:</strong> 10+</p>
        <p><strong>Required Equipment:</strong> Students will need their own laptop with a modern web browser installed. Ideally, parents should also <a href="https://www.twilio.com/try-twilio">sign up for a Twilio account</a> their student can use to log into TwilioQuest to track their progress. A Twilio account (and the associated TwilioQuest user) is not strictly necessary to participate, but it will make the experience more fun if the student can track their growth inside the game.</p>
      </div>
      <div id="roblox" className={styles.workshop}>
        <h3>Build a Game with Roblox</h3>
        <p><img src="/roblox.jpg" alt="Roblox"/></p>
        <p><strong>Description:</strong> Roblox is ushering in the next generation of entertainment, allowing people to imagine, create, and play together in immersive, user-generated 3D worlds.  Learn to create and code your own games using the free tools made available by Roblox. This is a perfect course for first time game developers.<br/><br/>In this session you’ll learn how to make an obby, short for obstacle course. In this game genre, players have to jump from one place to another while avoiding obstacles to get to the end of a level. </p>
        <p><strong>Age range:</strong> 10-12</p>
        <p><strong>Required Equipment:</strong> Fully charged laptop running Windows or Mac OS, Roblox Studio and a <a href="https://www.roblox.com/account/signupredir">Roblox user account</a> (all free)</p>
      </div>
      <div id="tbd" className={styles.workshop}>
        <h3>More workshops coming!</h3>
        <p>We plan to add a few more workshops for younger kids, so please stay tuned! Feel free to RSVP for a Parent Ticket and that way we can email you when there are updates. Thanks!</p>
        <p>If you might be interested in <strong>LEADING</strong> a workshop, please let us know: carter@cascadiajs.com</p>
      </div>
      <h2>Event Sponsor</h2>
      <p><a href="https://developer.microsoft.com/en-us/reactor/"><img src="/reactor-seaplane.png" alt="microsoft reactor"/></a></p>
      <h2>Raffle Sponsor</h2>
      <p><a href="https://azure.microsoft.com/en-us/"><img src="/azure.png" alt="microsoft azure"/></a></p>
      <h2>Loaner Laptop Sponsor</h2>
      <p><a href="https://www.microsoft.com/en-us/store/b/home"><img src="/logos/surface.png" alt="Microsoft Surface"/></a></p>
      <h2>Sticker Sponsors</h2>
      <p>{stickers}</p>
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

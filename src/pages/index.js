import React from 'react';
import Link from 'gatsby-link';
import 'pure-react-carousel/dist/react-carousel.es.css';
import MailChimpForm from '../components/mailChimpForm';
import PropTypes from 'prop-types';
import Organizers from '../components/organizers';
import Speakers from '../components/speakers';
import './index.css';

function IndexPage ({data}) {
  return (
    <div>
      <div id="content">
        <section id="hero">
          <div><img className="tree" src="/tree.svg" alt="tree sticker"/></div>
          <div><img className="dates" src="/nov15-16.svg" alt="Nov 15-16 sticker"/></div>
          <div><img src="/logo.svg" alt="logo sticker"/></div>
          <div><img className="location" src="/seattle.svg" alt="Seattle sticker"/></div>
          <div><img className="tree" src="/tree.svg" alt="tree sticker"/></div>
        </section>
        <section id="graphql">
          <div className="dates">Nov 12-13</div>
          <p>
            <h2>GraphQL Training</h2>
            <p>Eve Porcello and Alex Banks are software engineers, instructors, and co-authors of O&apos;Reilly&apos;s Learning React and Learning GraphQL. They are organizing a 2-day GraphQL workshop in downtown Seattle. We have teamed up with them to offer a combo ticket to both their workshop and CascadiaJS!</p>
          </p>
          <p><a className="cta" href="https://ti.to/event-loop/cascadiajs-2018/with/d65c9visgmq ">Buy a Combo Ticket</a></p>
        </section>
        <section id="preconf">
          <div className="dates">Nov 14</div>
          <div id="train">
            <p>
              <h2>Hacker Train</h2>
              <p>All aboard the Hacker Train! If you live in Portland, OR or Vancouver, BC there is no better way to get to CascadiaJS than to join your fellow devs on the Hacker Train.</p>
            </p>
            <p><a className="cta" href="/getting-to-seattle">Reserve Your Seat</a></p>
          </div>
          <div id="mixer">
            <p>
              <h2>Mentor Mixer</h2>
              <p>We are organizing an evening event the day before the conference to bring together folks who are new to our industry and more senior folks who are interested in mentoring. </p>
            </p>
            <p><i>More Info Coming Soon!</i></p>
          </div>
        </section>
        <section id="conf">
          <div id="dayone">
            <div>
              <h2>Two Days of Talks</h2>
              <p>CascadiaJS features a single track of 24 amazing speakers discussing the cutting-edge of JavaScript, web development and engineering culture over the course of 2 days.</p>
              <img src="/coffee.svg" alt="tree sticker"/>
            </div>
          </div>
          <div id="theconference">
            <div id="tickets">
              <p><img src="/the-conference.svg" alt="the conference sticker"/></p>
              <p><a className="primary cta" href="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale!">Purchase Tickets</a></p>
            </div>
            <div id="daytwo">
              <div>
                <h2>Scholarships</h2>
                <p>In order to make CascadiaJS as accessible as possible, we are working with local tech companies to fund a <a href="/scholarships">Scholarship Program</a> If you are a member of an under-represented group in tech or have financial constraints, please apply!</p>
                <p><img src="/banana-slug.svg" alt="logo sticker"/></p>
              </div>
              <div>
                <h2>Code of Conduct</h2>
                <p>In order to provide a safe and inclusive environment we expect, and require, all organizers, sponsors, speakers, volunteers, and attendees of all levels to adhere to our <Link to="/code-of-conduct">Code of Conduct</Link></p>
                <p><img src="/mushroom.svg" alt="Seattle sticker"/></p>
              </div>
            </div>
          </div>
          <div id="closing">
            <div>
              <h2>Social Fun Times</h2>
              <p>Following both Day One and Day Two, we will be organizing a couple of awesome evening events for folks to unwind and enjoy the company of new friends. The Opening Party has not been announced, but we are excited to share that we&apos;ve rented out the <a href="https://livingcomputers.org/">Living Computer Museum</a> for what is going to be an epic Closing Party! </p>
              <p><img src="/old-fashioned.svg" alt="tree sticker"/></p>
            </div>
          </div>
        </section>
        <section id="postconf">
          <p className="dates">Nov 17</p>
          <div id="training">
            <p>
              <h2>React Training</h2>
              <p>We are partnering with Formidable will hold a full-day React training workshop following the conference.</p>
            </p>
            <p><a className="cta" href="/react-training">Learn More</a></p>
          </div>
          <div id="kids">
            <p>
              <h2>Kid&apos;s Coding Workshops</h2>
              <p>Interested in getting your kids as excited about programming as your are? Join us for a day full of coding workshops targeted at all age ranges (K-12).</p>
            </p>
            <p><i>More Info Coming Soon!</i></p>
          </div>
        </section>
        <section id="code-of-conduct">
          <h2>Venue</h2>
          <p>
            Amazon Meeting Center<br/>
            2031 7th Ave<br/>
            Seattle, WA 98121
          </p>
        </section>
        <section id="speakers">
          <h2>Speakers</h2>
          <Speakers data={data}/>
        </section>
        <section id="organizers">
          <h2>Organizers</h2>
          <Organizers data={data}/>
        </section>
        <section id="sponsors">
          <h2>We <span role="img" aria-label="heart">❤️</span> Our Sponsors</h2>
          <section id="platinum">
            <div><a href="https://developer.amazon.com/"><img src="/amazon-logo.jpg" alt="Amazon logo"/></a></div>
          </section>
          <section id="gold">
            <div><a href="https://formidable.com/"><img src="/formidable.png" alt="Formidable logo"/></a></div>
            <div><Link className="cta" to="/call-for-sponsors">Sponsor <span role="img" aria-label="high five!">🙌</span></Link></div>
          </section>
          <section id="silver">
            <div><a href="https://egghead.io/"><img src="/egghead-logo.png" alt="Egghead logo"/></a></div>
            <div><a href="https://mozilla.com/"><img src="/mozilla-logo.png" alt="Mozilla logo"/></a></div>
            <div><a href="https://developer.microsoft.com/en-us/advocates/index.html"><img src="/azure.png" alt="Azure logo"/></a></div>
          </section>
          <section id="community">
            <div><a href="https://www.slalom.com/"><img src="/slalom-logo.png" alt="Slalom logo"/></a></div>
            <div><a href="https://www.dayback.com/"><img src="/dayback-logo.png" alt="Dayback logo"/></a></div>
            <div><Link className="cta" to="/call-for-sponsors">Sponsor <span role="img" aria-label="high five!">🙌</span></Link></div>
            <div><Link className="cta" to="/call-for-sponsors">Sponsor <span role="img" aria-label="high five!">🙌</span></Link></div>
          </section>
        </section>
        <section id="contact">
          <MailChimpForm />
        </section>
      </div>
    </div>
  );
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata{
        organizers {
          name
          avatar
          role
          twitter
        },
        speakers {
          name
          avatar
          talk
          twitter
          github
          linkedin
        }
      }
    }
  }
`;

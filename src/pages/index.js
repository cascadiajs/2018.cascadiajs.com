import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MailChimpForm from '../components/mailChimpForm';
import PropTypes from 'prop-types';
import Schedule from '../components/schedule';
import Organizers from '../components/organizers';
import Speakers from '../components/speakers';
import './index.css';

function IndexPage ({data}) {
  return (
    <div>
      <Helmet
        meta={[
          {
            name: 'description',
            content:
              'CascadiaJS 2018 is a conference for web developers, by web developers in the Pacific Northwest. Taking place November 15-16 in Seattle, WA.'
          },
          {
            property: 'og:title',
            content: data.site.siteMetadata.title
          },
          {
            property: 'og:image',
            content: 'https://2018.cascadiajs.com/cjs-hero.png'
          }
        ]}
      />
      <div id="content">
        <section id="hero">
          <div><img className="tree" src="/tree.svg" alt="tree sticker"/></div>
          <div><img className="sticker-dates" src="/nov15-16.svg" alt="Nov 15-16 sticker"/></div>
          <div><img src="/logo.svg" alt="logo sticker"/></div>
          <div><img className="sticker-location" src="/seattle.svg" alt="Seattle sticker"/></div>
          <div><img className="tree" src="/tree.svg" alt="tree sticker"/></div>
        </section>
        <section id="tagline">
          <p>CascadiaJS features a single track of 24 amazing speakers discussing the cutting-edge of JavaScript, web development and engineering culture over the course of 2 days. We also work hard to provide a <strong>safe</strong> and <strong>inclusive</strong> environment for everyone! We expect, and require, all organizers, sponsors, speakers, volunteers, and attendees of all levels to adhere to our <Link to="/code-of-conduct">Code of Conduct</Link>.</p>
        </section>
        <section id="preconf">
          <div id="preparing-for-cascadia">
            <p><a className="cta" href="/preparing-for-cascadia">Preparing for Cascadia</a></p>
          </div>
          <div id="getting-to-seattle">
            <p><a className="cta" href="/getting-to-seattle">Travel and Lodging</a></p>
          </div>
          <div id="seattle-guide">
            <p><a className="cta" href="/seattle-guide">Seattle Guidebook</a></p>
          </div>
        </section>
        <section id="schedule">
          <Schedule speakers={data.site.siteMetadata.speakers}/>
        </section>
        <section id="postconf">
          <div>
            <img src="/react.svg" alt="React logo"/>
          </div>
          <div id="training">
            <div className="dates">November 17</div>
            <h3>React Training</h3>
            <p>We are partnering with Formidable will hold a full-day React training workshop following the conference.</p>
            <p><a className="cta" href="/react-training">Learn More</a></p>
          </div>
          <div>
            <img src="/catherine-shadow.svg" alt="sticker of kid coder"/>
          </div>
          <div id="kids">
            <div className="dates">November 17</div>
            <h3>Kid&apos;s Coding Workshops</h3>
            <p>Interested in getting your kids as excited about programming as your are? Join us for a day full of coding workshops targeted at all age ranges (K-12).</p>
            <p><a className="cta" href="/coding-for-kids">Details</a></p>
          </div>
        </section>
        <section id="venue">
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
          <section id="gold">
            <div><a href="https://developer.amazon.com/"><img src="/amazon-logo.jpg" alt="Amazon logo"/></a></div>
            <div><a href="https://developer.amazon.com/"><img src="/logos/aws.svg" alt="AWS logo"/></a></div>
          </section>
          <section id="silver">
            <div><a href="https://formidable.com/"><img src="/formidable.png" alt="Formidable logo"/></a></div>
            <div><a href="https://fizbuz.com/"><img src="/fizbuz.svg" alt="Fizbuz logo"/></a></div>
            <div><a href="https://twilio.com/"><img src="/logos/twilio.svg" alt="Twilio logo"/></a></div>
            <div><a href="https://developer.microsoft.com/en-us/advocates/index.html"><img src="/azure.png" alt="Azure logo"/></a></div>
            <div><a href="https://www.smartsheet.com"><img src="/logos/smartsheet.png" alt="Smartsheet logo"/></a></div>
            <div><a href="https://blogs.windows.com/msedgedev/"><img src="/logos/ms-edge.png" alt="Microsoft Edge logo"/></a></div>
          </section>
          <section id="community">
            <div><a href="https://egghead.io/"><img src="/egghead-logo.png" alt="Egghead logo"/></a></div>
            <div><a href="https://mozilla.com/"><img src="/mozilla-logo.png" alt="Mozilla logo"/></a></div>
            <div><a href="https://www.dayback.com/"><img src="/dayback-logo.png" alt="Dayback logo"/></a></div>
            <div><a href="https://www.saucelabs.com/"><img src="/logos/sauce-labs.png" alt="Sauce Labs logo"/></a></div>
            <div><a href="https://www.genui.co/"><img src="/logos/genui.jpg" alt="Gen/UI logo"/></a></div>
            <div><a href="https://www.slalom.com/"><img src="/slalom-logo.png" alt="Slalom logo"/></a></div>
            <div><a href="https://www.mistyrobotics.com/"><img src="/logos/misty.svg" alt="Misty Robotics logo"/></a></div>
            <div><a href="https://esri.com/"><img src="/logos/esri.svg" alt="Esri logo"/></a></div>
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

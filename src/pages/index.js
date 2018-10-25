import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MailChimpForm from '../components/mailChimpForm';
import PropTypes from 'prop-types';
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
        <section id="preconf">
          <div id="preparing-for-cascadia">
            <h3>Preparing for Cascadia</h3>
            <p>In order to get the most out of your CascadiaJS experience, it helps to get prepared. Whether it&apos;s booking a dinner reservation before the Opening Party or making sure you pack a water bottle, we have put together a list of tips and tricks to make sure you have everything covered for Nov 15-16.</p>
            <p><a className="cta" href="/preparing-for-cascadia">Learn More</a></p>
          </div>
          <div id="getting-to-seattle">
            <h3>Travel and Lodging</h3>
            <p>For those of you who do not live in Seattle, we have you covered! Please check out our travel guide for more information about how to get to Seattle and where to stay while you are here.</p>
            <p><a className="cta" href="/getting-to-seattle">Learn More</a></p>
          </div>
          <div id="seattle-guide">
            <h3>Getting Around Seattle</h3>
            <p>CascadiaJS isn&apos;nt just happening at the Amazon Meeting Center, we&apos;re putting together awesome events all over Seattle. So if you&apos;re not sure how to get to Living Computers, or you&apos;re wondering what good restaurants are nearby Cinerama, our Seattle guide will have you covered.</p>
            <p><a className="cta" href="/seattle-guide">Learn More</a></p>
          </div>
        </section>
        <section id="conf">
          <div id="talks">
            <div>
              <img id="coffee" src="/coffee.svg" alt="coffee sticker"/>
            </div>
            <div id="tickets">
              <p><img src="/the-conference.svg" alt="the conference sticker"/></p>
              <h2>Two Days of Talks</h2>
              <p>CascadiaJS features a single track of 24 amazing speakers discussing the cutting-edge of JavaScript, web development and engineering culture over the course of 2 days. Topics include: Serverless, Distributed Web, React, Web Assembly, Accessiblity, Voice Interfaces and more!</p>
              <p><a className="primary cta" href="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale!">Purchase Tickets</a></p>
            </div>
            <div>
              <img src="/mushroom.svg" alt="mushroom sticker"/>
            </div>
          </div>
          <div id="extras">
            <div id="closing">
              <h3>Social Fun Times</h3>
              <p>Following both days of talks, we will be organizing awesome evening events for folks to unwind and enjoy the company of new friends. We are renting out <a href="https://cinerama.com/">Cinerama</a> for a private screening and the Closing Party will be held at the <a href="https://livingcomputers.org/">Living Computer Museum</a> for a night of fun and hacking!</p>
              <p><img src="/old-fashioned.svg" alt="old fashioned cocktail sticker"/></p>
            </div>
            <div id="scholarships">
              <h3>Scholarships</h3>
              <p>In order to make CascadiaJS as accessible as possible, we are working with local tech companies to fund a <a href="/scholarships">Scholarship Program</a> If you are a member of an under-represented group in tech or have financial constraints, please apply!</p>
              <p><img src="/banana-slug.svg" alt="banana slug sticker"/></p>
            </div>
            <div>
              <h3>Code of Conduct</h3>
              <p>We work hard to provide a safe and inclusive environment for everyone! We expect, and require, all organizers, sponsors, speakers, volunteers, and attendees of all levels to adhere to our <Link to="/code-of-conduct">Code of Conduct</Link></p>
              <p><img src="/flower.svg" alt="flower sticker"/></p>
            </div>
          </div>
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
            <div><a href="https://developer.amazon.com/"><img src="/logos/aws.svg" alt="AWS logo"/></a></div>
            <div><Link className="sponsorBtn cta" to="/call-for-sponsors">Sponsor <span role="img" aria-label="high five!">🙌</span></Link></div>
          </section>
          <section id="silver">
            <div><a href="https://formidable.com/"><img src="/formidable.png" alt="Formidable logo"/></a></div>
            <div><a href="https://fizbuz.com/"><img src="/fizbuz.svg" alt="Fizbuz logo"/></a></div>
            <div><a href="https://twilio.com/"><img src="/logos/twilio.svg" alt="Twilio logo"/></a></div>
            <div><a href="https://esri.com/"><img src="/logos/esri.svg" alt="Esri logo"/></a></div>
            <div><a href="https://www.slalom.com/"><img src="/slalom-logo.png" alt="Slalom logo"/></a></div>
            <div><a href="https://www.genui.co/"><img src="/logos/genui.jpg" alt="Gen/UI logo"/></a></div>
            <div><a href="https://developer.microsoft.com/en-us/advocates/index.html"><img src="/azure.png" alt="Azure logo"/></a></div>
            <div><a href="https://www.smartsheet.com"><img src="/logos/smartsheet.png" alt="Smartsheet logo"/></a></div>
            <div><Link className="sponsorBtn cta" to="/call-for-sponsors">Sponsor <span role="img" aria-label="high five!">🙌</span></Link></div>
          </section>
          <section id="community">
            <div><a href="https://egghead.io/"><img src="/egghead-logo.png" alt="Egghead logo"/></a></div>
            <div><a href="https://mozilla.com/"><img src="/mozilla-logo.png" alt="Mozilla logo"/></a></div>
            <div><a href="https://www.dayback.com/"><img src="/dayback-logo.png" alt="Dayback logo"/></a></div>
            <div><Link className="sponsorBtn cta" to="/call-for-sponsors">Sponsor <span role="img" aria-label="high five!">🙌</span></Link></div>
            <div><Link className="sponsorBtn cta" to="/call-for-sponsors">Sponsor <span role="img" aria-label="high five!">🙌</span></Link></div>
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

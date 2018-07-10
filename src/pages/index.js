import React from 'react';
import Link from 'gatsby-link';
import hero from '../images/cascadiajs-background.png';
import MailChimpForm from '../components/mailChimpForm';
import PropTypes from 'prop-types';
import Organizers from '../components/organizers';
import './index.css';

function IndexPage ({data}) {
  return (
    <div>
      <img
        id="hero"
        alt="CascadiaJS 2018, November 15 & 16, Seattle, Washington"
        src={hero}
      />
      <br />
      <div id="content">
        <section id="tagline">
          <p>CascadiaJS 2018 is a conference for web developers by web developers.</p>
        </section>
        <section id="tickets">
          <h2>Tickets are on SALE</h2>
          <p>
            <a className="cta" href="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale!">Purchase Tickets</a>
            <Link className="cta" to="/scholarships">Get a Scholarship</Link>
          </p>
        </section>
        <section id="speakers">
          <h2>CFP is OPEN</h2>
          <p>Want to speak at Cascadia? Now is your chance!</p>
          <p><Link className="cta" to="/call-for-presenters">Check out the CFP</Link></p>
        </section>
        <section id="venue">
        </section>
        <section id="sponsors">
        </section>
        <section id="organizers">
          <h2>Organizers</h2>
          <Organizers data={data}/>
        </section>
        <section id="contact">
          <h2>Keep in Touch</h2>
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
        }
      }
    }
  }
`;

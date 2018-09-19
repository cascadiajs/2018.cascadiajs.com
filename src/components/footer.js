import React from 'react';
import Link from 'gatsby-link';
import './footer.css';

const Footer = () => (
  <footer>
    <div>Nov 15-16 | Seattle, WA</div>
    <div>
      <ul>
        <li><a href="https://join.slack.com/t/cascadiajs/shared_invite/enQtMzcyMjkzMDk0NjQwLTc3YmJiMTk0NTZjNDBjMzg2YTMxNDA4Njk3YTgyZWY0MGM4NjVhZTI0YTUzYTRmYzRlNThhNTIxOGNkMDU1ZGU">Join our Slack</a></li>
        <li><a href="https://twitter.com/CascadiaJS">Follow us on Twitter</a></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/call-for-presenters">Speak</Link></li>
        <li><Link to="/call-for-organizers">Organize</Link></li>
        <li><Link to="/call-for-sponsors">Sponsor</Link></li>
        <li><Link to="/scholarships">Scholarships</Link></li>
        <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
        <li><Link to="/about-us">About</Link></li>
      </ul>
    </div>
    <div> 
      <ul>
        <li><a title="CascadiaJS 2012" href="https://2012.cascadiajs.com">2012</a></li>
        <li><a title="CascadiaJS 2013" href="https://2013.cascadiajs.com">2013</a></li>
        <li><a title="CascadiaJS 2014" href="https://2014.cascadiajs.com">2014</a></li>
        <li><a title="CascadiaJS 2015" href="https://2015.cascadiajs.com">2015</a></li>
        <li><a title="CascadiaJS 2016" href="https://2016.cascadiafest.org">2016</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;

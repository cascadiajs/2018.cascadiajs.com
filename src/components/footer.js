import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer style={{ textAlign: 'center', marginTop: '25px' }}>
    <Link to="/">Home</Link> |
    <Link to="/call-for-presenters">Speak</Link> |
    <Link to="/code-of-conduct">Code of Conduct</Link> |
    <a title="CascadiaJS 2012" href="https://2012.cascadiajs.com">
      2012
    </a>
    <a title="CascadiaJS 2013" href="https://2013.cascadiajs.com">
      2013
    </a>
    <a title="CascadiaJS 2014" href="https://2014.cascadiajs.com">
      2014
    </a>
    <a title="CascadiaJS 2015" href="https://2015.cascadiajs.com">
      2015
    </a>
    <a title="CascadiaJS 2016" href="https://2016.cascadiafest.org">
      2016
    </a>
  </footer>
);

export default Footer;

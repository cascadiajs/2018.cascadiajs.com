import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/call-for-presenters">Speak</Link>
      <a href="https://join.slack.com/t/cascadiajs/shared_invite/enQtMzcyMjkzMDk0NjQwLTc3YmJiMTk0NTZjNDBjMzg2YTMxNDA4Njk3YTgyZWY0MGM4NjVhZTI0YTUzYTRmYzRlNThhNTIxOGNkMDU1ZGU">Slack</a>
      <a href="https://github.com/cascadiajs/2018.cascadiajs.com">GitHub</a>
      <a href="https://twitter.com/CascadiaJS">Twitter</a>

    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;

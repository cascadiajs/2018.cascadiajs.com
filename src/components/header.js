import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/call-for-presenters">Speak</Link>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;

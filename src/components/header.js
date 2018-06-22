import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import logo from '../images/logo.jpg';
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/">
        <img
          id="logo"
          alt="CascadiaJS 2018 logo"
          src={logo}
        /> Home
      </Link>
      <Link to="/call-for-presenters">Speak</Link>
      <Link to="/call-for-organizers">Organize</Link>
      <Link to="/call-for-sponsors">Sponsor</Link>
      <Link to="/about-us">About</Link>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;

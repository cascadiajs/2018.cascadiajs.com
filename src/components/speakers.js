import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styles from './speakers.module.css';

console.log(styles);

function Speakers ({ data }) {
  let speakers = [];
  console.log(data);
  data.site.siteMetadata.speakers.forEach(o => {
    let name = <h3>&nbsp;<br/>&nbsp;</h3>;
    let talk = o.talk;
    let link = '';
    if (o.name) {
      if (o.twitter) {
        link = <a href={'https://twitter.com/' + o.twitter}><img height="20" width="20" alt="twitter icon" src="/twitter.png"/></a>;
      } else if (o.github) {
        link = <a href={'https://github.com/' + o.github}><img height="20" width="20" alt="github icon" src="/github-logo.png"/></a>;
      }
      name = <h3>{o.name.split(' ')[0]}<br/>{o.name.split(' ')[1]} {link}</h3>;
      talk = <Link to={'/speakers/' + o.name.replace(' ', '-').toLowerCase()}>{o.talk}</Link>;
    }
    speakers.push(
      <div>
        {name}
        <p><img className={styles.avatar} src={o.avatar} alt={o.name}/></p>
        <p>{talk}</p>
      </div>
    );
  });
  return (
    <section id={styles.speakers}>
      {speakers}
    </section>
  );
}

Speakers.propTypes = {
  data: PropTypes.object
};

export default Speakers;

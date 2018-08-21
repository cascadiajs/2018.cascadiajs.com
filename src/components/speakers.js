import React from 'react';
import PropTypes from 'prop-types';
import styles from './speakers.module.css';

console.log(styles);

function Speakers ({ data }) {
  let speakers = [];
  console.log(data);
  data.site.siteMetadata.speakers.forEach(o => {
    let x = <h3>&nbsp;<br/>&nbsp;</h3>;
    if (o.name) {
      x = <h3>{o.name.split(' ')[0]}<br/>{o.name.split(' ')[1]} <a href={'https://twitter.com/' + o.twitter}><img height="20" width="20" alt="twitter icon" src="/twitter.png"/></a></h3>;
    }
    speakers.push(
      <div>
        {x}
        <p><img className={styles.avatar} src={o.avatar} alt={o.name}/></p>
        <p>{o.talk}</p>
        <p></p>
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

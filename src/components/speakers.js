import React from 'react';
import PropTypes from 'prop-types';
import styles from './speakers.module.css';

console.log(styles);

function Speakers ({ data }) {
  let speakers = [];
  console.log(data);
  data.site.siteMetadata.speakers.forEach(o => {
    speakers.push(
      <div>
        <h3>{o.name.split(' ')[0]}<br/>{o.name.split(' ')[1]}</h3>
        <p><img src={o.avatar} alt={o.name}/></p>
        <p>{o.talk}</p>
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

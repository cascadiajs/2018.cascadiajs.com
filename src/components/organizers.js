import React from 'react';
import PropTypes from 'prop-types';
import styles from './organizers.module.css';

console.log(styles);

function Organizers ({ data }) {
  let organizers = [];
  console.log(data);
  data.site.siteMetadata.organizers.forEach(o => {
    organizers.push(
      <div>
        <h3>{o.name.split(' ')[0]}<br/>{o.name.split(' ')[1]}</h3>
        <p><img src={o.avatar} alt={o.name}/></p>
        <p>{o.role}</p>
      </div>
    );
  });
  return (
    <section id={styles.organizers}>
      {organizers}
    </section>
  );
}

Organizers.propTypes = {
  data: PropTypes.object
};

export default Organizers;

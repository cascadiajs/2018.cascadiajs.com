import React from 'react';
import PropTypes from 'prop-types';
import Day1 from '../components/day1.js';
import styles from './schedule.module.css';
function SchedulePage ({ data }) {
  console.log(data);
  return (
    <div id={styles.page}>
      <Day1 speakers={data.site.siteMetadata.speakers}/>
    </div>
  );
}

export default SchedulePage;

SchedulePage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query SchedulePageQuery {
    site {
      siteMetadata{
        speakers {
          name
          avatar
          talk
          twitter
          github
          linkedin
        }
      }
    }
  }
`;

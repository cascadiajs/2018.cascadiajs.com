import React from 'react';
import PropTypes from 'prop-types';
import styles from './hotels.module.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

console.log(styles);

function Hotels ({ data }) {
  return (
    <section id={styles.lodging}>
      <h2>Lodging</h2>
      <p><span className="exclaim"><span role="img" aria-label="finger pointing">👉</span> Discounted group rate expires <strong>OCT 8</strong></span></p>
      <div id="hotels">
        <div>
          <h3>Moxy Seattle</h3>
          <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={50} totalSlides={4}>
            <Slider>
              <Slide><img src="/moxy-exterior.jpg" alt="exterior of Moxy Seattle hotel"/></Slide>
              <Slide><img src="/moxy-guestroom.jpg" alt="guest room of Moxy Seattle hotel"/></Slide>
              <Slide><img src="/moxy-lobby.jpg" alt="lobby of Moxy Seattle hotel"/></Slide>
              <Slide><img src="/moxy-bar.jpg" alt="bar of Moxy Seattle hotel"/></Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
          <p><a href="http://moxyseattle.com/">Moxy</a> is a boutique hotel with the social heart of a hostel. The WiFi is speedy and the cushy beds are freshly made, but more importantly, the bar is always open and the crew is always on. Just up Westlake Ave from the Amazon Meeting Center (0.6 miles).</p>
          <ul>
            <li><a className="cta" href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Cascadia%20JS%20Conference%20%5Eseaox%60CSCCSCB%7CCSCCSCC%60159.00%60USD%60false%602%6011/14/18%6011/17/18%6010/24/18&app=resvlink&stop_mobi=yes">Book for $159 / night</a></li>
          </ul>
        </div>
        <div >
          <h3>The Thompson</h3>
          <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={50} totalSlides={4}>
            <Slider>
              <Slide><img src="/thompson-exterior.jpg" alt="exterior of The Thompson hotel"/></Slide>
              <Slide><img src="/thompson-room.jpg" alt="guest room of The Thompson hotel"/></Slide>
              <Slide><img src="/thompson-roof.jpg" alt="roof top of The Thompson hotel"/></Slide>
              <Slide><img src="/thompson-bar.jpg" alt="bar of The Thompson hotel"/></Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
          <p><a href="https://www.thompsonhotels.com/hotels/washington/seattle/thompson-seattle">The Thompson</a> is a boutique hotel located next to the waterfront and reflects the intrinsic beauty of Seattle. Highlights include their signature restaurant, Scout PNW, and rooftop bar, The Nest. Southwest of the Amazon Meeting Center (0.5 miles).</p>
          <ul>
            <li><a className="cta" href="https://gc.synxis.com/rez.aspx?Hotel=67516&Chain=15564&Dest=TM&template=TH_RBE&shell=TH_RBE&locale=en-US&arrive=11/14/2018&depart=11/17/2018&adult=1&child=0&group=1811CASJS">Book for $199 / night</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Hotels.propTypes = {
  data: PropTypes.object
};

export default Hotels;

import React from 'react'
import Link from 'gatsby-link'
import hero from "../images/cascadiajs-background.png"

const IndexPage = () => (
  <div id="box" style={{position: 'relative'}}>
    <img alt="CascadiaJS 2018, November 15 & 16, Seattle, Washington" src={ hero } style={{maxWidth: '100%', maxHeight: '100%'}}/><br/>
    <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>
    <div id="mc_embed_signup" style={{clear: 'left', width: '100%', fontFamily: 'sans-serif'}}>
      <form action="https://cascadiajs.us1.list-manage.com/subscribe/post?u=ffa37cf28eebc9e75b8558f3b&amp;id=d1b100650c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">Subscribe to get updates on the upcoming CascadiaJS 2018 conference</label>
          <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_ffa37cf28eebc9e75b8558f3b_d1b100650c" tabIndex="-1" value=""/></div>
          <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" style={{backgroundColor: '#376BFB'}}/></div>
        </div>
      </form>
    </div>
  </div>
)

export default IndexPage

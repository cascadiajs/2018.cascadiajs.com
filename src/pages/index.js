import React from 'react';
import autobind from 'autobind-decorator';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import hero from '../images/cascadiajs-background.png';

class MailChimpForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { email: '' };
  }

  @autobind
  handleEmailChange (e) {
    this.setState({ email: e.target.value });
  }

  @autobind
  handleSubmit (e) {
    const { email } = this.state;
    e.preventDefault();

    addToMailchimp(email)
      .then(result => {
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg
          });
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err
        });
      });
  }

  render () {
    const { status, msg, email } = this.state;

    return (
      <div>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup" style={{ clear: 'left', width: '100%' }}>
          <form
            onSubmit={this.handleSubmit}
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              {status && (
                <p
                  style={{ color: '#cc0000' }}
                  dangerouslySetInnerHTML={{ __html: msg }}
                />
              )}
              <label htmlFor="mce-EMAIL">
                Subscribe to get updates on the upcoming CascadiaJS 2018
                conference<br/>
                <input
                  type="email"
                  onChange={this.handleEmailChange}
                  value={email}
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    style={{ backgroundColor: '#376BFB' }}
                  />
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function IndexPage () {
  return (
    <div id="box" style={{ position: 'relative' }}>
      <img
        alt="CascadiaJS 2018, November 15 & 16, Seattle, Washington"
        src={hero}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      <br />
      <MailChimpForm />
    </div>
  );
}

export default IndexPage;

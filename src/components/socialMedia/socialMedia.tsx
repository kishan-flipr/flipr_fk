import * as React from 'react';
import '../css/common.css';

class SocialMedia extends React.Component {
  public render() {
    return (
    <div className="socialMedia-cl">
    <div className="container contain-cl">
    <div className="row" id="gettouch">
      <div className="col-md-12 header-text">
      <h3>Get in Touch</h3>
      <p>Reach out to us for any questions you have.</p>
      </div>
      </div>
    </div>
        <div className="container contain-cl">
          <div className="row">
            <div className="col-md-8 socialmedia-link-cl">
            <a href="mailto:dhruv@flipr.ai" ><i className="fa fa-envelope-o" aria-hidden="true"/></a>
            <a href="https://twitter.com/fliprindia" target="_blank"><i className="fa fa-twitter" aria-hidden="true"/></a>
            <a href="https://www.facebook.com/fliprindia" target="_blank"><i className="fa fa-facebook" aria-hidden="true"/></a>
            <a href="https://www.linkedin.com/company/20one-work/about/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"/></a>
            <h4>Contact Number</h4>
            <p>9611228633</p>
            </div>
            <div className="col-md-4 address-cl">
              <h4>Address</h4>
              <p>97, 17th B Main</p>
              <p>KHB Block Koramangala, 5th Block</p>
              <p>Bengaluru, Karnataka 560095</p>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default SocialMedia;

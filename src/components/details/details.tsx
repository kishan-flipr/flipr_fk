import * as React from 'react';
import '../css/common.css';
import Img1 from '../images/img1.png';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';
import Pinkoval from '../images/oval-pink.svg';
import Yellowoval from '../images/oval-yellow.svg';
import Oval1 from '../images/oval.svg';


class Details extends React.Component {
  public render() {
    return (
    <div className="">
      <div className="container detail-header">
        <div className="row">
          <div className="col-md-10 header-text" id="whatyouget">
          <h3>Get prepared to face the world</h3>
          <p>Our training program is designed to prepare you to outshine in a highly competitive workspace.</p>
          </div>
          <div className="col-md-2">
          <img src={Oval1} alt="ovalimage" className="oval-image"/>
          </div>
        </div>
        <div className="row oval-cl">
        <img src={Yellowoval} alt="YellowOval" className="yellow-oval"/>
        </div>
        <div className="container detail-cl">
          <div className="row">
            <div className="col-md-4">
            <img src={Img1} alt="image1"/>
            <h5>Keep up with trend</h5>
            <p>Learn the technologies that<br/> will help you advance in your<br/> career.</p>
            </div>
            <div className="col-md-4">
            <img src={Img2} alt="image1"/>
            <h5>Hands-on Training</h5>
            <p>Gain confidence with practice<br/> and focussed feedback <br/>sessions.</p>
            </div>
            <div className="col-md-4">
            <img src={Img3} alt="image1"/>
            <h5>Startup Placement</h5>
            <p>Explore opportunities to work<br/> with trending Startups.</p>
            </div>
          </div>
          </div>
          <div className="pink-cl">
          <img src={Pinkoval} alt="Pinkoval" className="pink-oval"/>
          </div>
      </div>
    </div>
    );
  }
}

export default Details;

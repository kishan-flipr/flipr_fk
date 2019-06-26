import * as React from 'react';
import '../css/common.css';
import Rocket from '../images/rocket.svg';
import Bulb from '../images/bulb.svg';
import Box from '../images/bag.svg';
import Person from '../images/person.svg';
import Plane from '../images/plane.svg';
import Dark from '../images/dark-oval.svg';
import Grey from '../images/grey-oval.svg';
import Pink from '../images/pink-oval.svg';
import Yellow from '../images/yellow-oval.svg';
import Blue from '../images/blue-oval.svg';
import Light from '../images/light-oval.svg';
import Flag from '../images/flag.svg';


class Story extends React.Component {
  public render() {
    return (
    <div className="story-cl" id="ourstory">
        <div className="container story-container">
          <div className="row">
            <div className="col-md-12 header-text">
            <h3>Our Story</h3>
            </div>
          </div>
          </div>
          <div className="story-block">
            <div className="row story-details">
                <div className="col-md-2"/>
                <div className="col-md-2">
                <p className="story-para">Joined TCS and<br/> explored corporate life.<br/> Learnt a lot but wanted<br/> more.</p>
                </div>
                <div className="col-md-2 center">
                <img src={Rocket} alt="RocketImage" className="story-img"/>
                </div>
                <div className="col-md-2">
                <p className="story-para">Managed client<br/> accounts and tech<br/> hiring for Startups.</p>
                </div>
                <div className="col-md-2 center">
                <img src={Bulb} alt="Bulb" className="story-img"/>
                </div>
                <div className="col-md-2">
                <p className="story-para">Launched Flipr with<br/> the idea of bringing the<br/> skill gap and provide<br/> hiring solution.</p>
                </div>
            </div>
            <div className="border-cl"/>
            <div className="row arrows">
              <div className="col-md-2">
              <img src={Dark} alt="ovalimages" className="oval-images"/>
              </div>
              <div className="col-md-2">
              <img src={Grey} alt="ovalimages" className="oval-images"/>
              </div>
              <div className="col-md-2">
              <img src={Pink} alt="ovalimages" className="oval-images"/>
              </div>
              <div className="col-md-2">
              <img src={Yellow} alt="ovalimages" className="oval-images"/>
              </div>
              <div className="col-md-2">
              <img src={Blue} alt="ovalimages" className="oval-images"/>
              </div>
              <div className="col-md-2">
              <img src={Light} alt="ovalimages" className="oval-images"/>
              </div>
            </div>
            <div className="horizontal-line-cl">
            <img src={Flag} alt="Flag" className="flag-images"/>
            </div>
          <div className="row story-details">
                <div className="col-md-2">
                <p className="story-para">Launched my first<br/> startup in 2nd year of<br/> college. Built web<br/> applications for charted <br/>accountants.</p>
                </div>
                <div className="col-md-2 center">
                <img src={Box} alt="box" className="story-below-img"/>
                </div>
                <div className="col-md-2">
                <p className="story-para">Experimented with <br/>Startup life again by<br/> joining a dynamic start<br/> up.</p>
                </div>
                <div className="col-md-2 center">
                <img src={Person} alt="Person" className="story-below-img"/>
                </div>
                <div className="col-md-2">
                <p className="story-para">Observed the skill gap<br/> in hiring and got an <br/>idea to solve the<br/> problem.</p>
                </div>
                <div className="col-md-2 center">
                <img src={Plane} alt="Plane" className="story-below-img"/>
                </div>
            </div>
          </div>
          <div className="mobile-cl">
                <div className="left-icon">
                <div className="mobile-border-cl"/>
                <div className="row arrows">
                  <div className="col-md-2">
                  <img src={Dark} alt="ovalimages" className="oval-images"/>
                  </div>
                  <div className="col-md-2">
                  <img src={Grey} alt="ovalimages" className="oval-images"/>
                  </div>
                  <div className="col-md-2">
                  <img src={Pink} alt="ovalimages" className="oval-images"/>
                  </div>
                  <div className="col-md-2">
                  <img src={Yellow} alt="ovalimages" className="oval-images"/>
                  </div>
                  <div className="col-md-2">
                  <img src={Blue} alt="ovalimages" className="oval-images"/>
                  </div>
                  <div className="col-md-2">
                  <img src={Light} alt="ovalimages" className="oval-images"/>
                  </div>
                </div>
                <div className="horizontal-line-cl">
                <img src={Flag} alt="Flag" className="flag-images"/>
                </div>
               </div>
               <div className="ourstory-cl">
               <div className="row story-details">
                     <div className="col-md-2">
                     <p className="story-para">Launched my first<br/> startup in 2nd year of<br/> college. Built web<br/> applications for charted <br/>accountants.</p>
                     </div>
                     <div className="col-md-2 center">
                     <img src={Box} alt="box" className="story-below-img"/>
                     </div>
                     <div className="col-md-2">
                     <p className="story-para">Joined TCS and<br/> explored corporate life.<br/> Learnt a lot but wanted<br/> more.</p>
                     </div>
                     <div className="col-md-2 center">
                     <img src={Rocket} alt="Rocket" className="story-below-img"/>
                     </div>
                     <div className="col-md-2">
                     <p className="story-para">Experimented with <br/>Startup life again by<br/> joining a dynamic start<br/> up.</p>
                     </div>
                     <div className="col-md-2 center">
                     <img src={Person} alt="Person" className="story-below-img"/>
                     </div>
                 </div>

                 <div className="row">
                     <div className="col-md-2">
                     <p className="story-para">Managed client<br/> accounts and tech<br/> hiring for Startups.</p>
                     </div>
                     <div className="col-md-2 center">
                     <img src={Bulb} alt="Bulb" className="story-img"/>
                     </div>
                     <div className="col-md-2">
                     <p className="story-para">Observed the skill gap<br/> in hiring and got an<br/> idea to solve the <br/>problem.</p>
                     </div>
                     <div className="col-md-2 center">
                     <img src={Plane} alt="Plane" className="story-img"/>
                     </div>
                     <div className="col-md-2">
                     <p className="story-para">Launched Flipr with<br/> the idea of bringing the<br/> skill gap and provide <br/>hiring solution. </p>
                     </div>
                 </div>




               </div>
               </div>

          </div>
    );
  }
}

export default Story;

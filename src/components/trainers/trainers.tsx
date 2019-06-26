import * as React from 'react';
import '../css/common.css';
import Image1 from '../images/AnubSir.jpg';
import Image2 from '../images/ArvindPandey.jpg';
import Image3 from '../images/AshishGoyal.jpg';
import Image4 from '../images/MayankMittal.jpg';
import Image5 from '../images/Neeraj.jpg';
import Image6 from '../images/RevtiRamanSingh.jpg';
import Image7 from '../images/Sanjeev.jpg';
import Image8 from '../images/VipulGupta.jpg';
class Course extends React.Component {
public render() {
return (
<div className="trainer-cl">
    <div className="container trainer-header">
        <div className="row">
            <div className="col-md-12 header-text">
                <h3>Our Trainers</h3>
                <p>We bring in trainers with hands on experience and unmatched expertise.</p>
            </div>
        </div>
    </div>
    <div className="container">
            <div className="row">
                <div className="row">
                    <div className="col-md-9" />
                    <div className="col-md-3">
                        <div className="controls pull-right hidden-xs">
                            <a className="left fa fa-chevron-left btn btn-success" href="#carousel-example" data-slide="prev" />
                            <a className="right fa fa-chevron-right btn btn-success" href="#carousel-example" data-slide="next" />
                        </div>
                    </div>
                </div>
                <div id="carousel-example" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="row">
                            <div className="col-sm-3">
                                      <div className="col-item">
                                            <div className="content">
                                                        <div className="content-overlay photo"/>
                                                        <img className="content-image" src={Image1}/>
                                              </div>
                                            <div className="biocard">
                                            <h5>Anub Sinha</h5>
                                            <h6>Founder (Opscale.io)</h6>
                                            </div>
                                      </div>
                            </div>
                                <div className="col-sm-3">
                                          <div className="col-item">
                                                <div className="content">
                                                            <div className="content-overlay photo"/>
                                                            <img className="content-image" src={Image2}/>
                                                </div>
                                                <div className="biocard">
                                                <h5>Arvind Pandey</h5>
                                                <h6>Amazon, India</h6>
                                                </div>
                                          </div>
                                </div>
                                <div className="col-sm-3">
                                          <div className="col-item">
                                                <div className="content">
                                                            <div className="content-overlay photo"/>
                                                            <img className="content-image" src={Image3}/>
                                                </div>
                                                <div className="biocard">
                                                <h5>Ashish Goyal</h5>
                                                <h6>Amazon, India</h6>
                                                </div>
                                          </div>
                                </div>
                                <div className="col-sm-3">
                                          <div className="col-item">
                                                <div className="content">
                                                            <div className="content-overlay photo"/>
                                                            <img className="content-image" src={Image4}/>
                                                </div>
                                                <div className="biocard">
                                                <h5>Mayank Mittal</h5>
                                                <h6>Tech Lead Intugine Technologies</h6>
                                                </div>
                                          </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                            <div className="col-sm-3">
                                      <div className="col-item">
                                            <div className="content">
                                                        <div className="content-overlay photo"/>
                                                        <img className="content-image" src={Image5}/>
                                            </div>
                                            <div className="biocard">
                                            <h5>Neeraj</h5>
                                            <h6>Co-Founder TheDroid</h6>
                                            </div>
                                      </div>
                            </div>
                                <div className="col-sm-3">
                                          <div className="col-item">
                                                <div className="content">
                                                            <div className="content-overlay photo"/>
                                                            <img className="content-image" src={Image6}/>
                                                </div>
                                                <div className="biocard">
                                                <h5>Revti Raman Singh</h5>
                                                <h6>AWS Seattle</h6>
                                                </div>
                                          </div>
                                </div>
                                <div className="col-sm-3">
                                          <div className="col-item">
                                                <div className="content">
                                                            <div className="content-overlay photo"/>
                                                            <img className="content-image" src={Image7}/>
                                                </div>
                                                <div className="biocard">
                                                <h5>Sanjeev</h5>
                                                <h6>Ola, India</h6>
                                                </div>
                                          </div>
                                </div>
                                      <div className="col-sm-3">
                                                <div className="col-item">
                                                      <div className="content">
                                                                  <div className="content-overlay photo"/>
                                                                  <img className="content-image" src={Image8}/>
                                                      </div>
                                                      <div className="biocard">
                                                      <h5>Vipul Gupta</h5>
                                                      <h6>IIT Kanpur, University of Berkely</h6>
                                                      </div>
                                                </div>
                                      </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                <li data-target="#myCarousel" data-slide-to="1"/>
                <li data-target="#myCarousel" data-slide-to="2"/>
                <li data-target="#myCarousel" data-slide-to="3"/>
                <li data-target="#myCarousel" data-slide-to="4"/>
                <li data-target="#myCarousel" data-slide-to="5"/>
                <li data-target="#myCarousel" data-slide-to="6"/>
                <li data-target="#myCarousel" data-slide-to="7"/>
                <li data-target="#myCarousel" data-slide-to="8"/>
                </ol>
                <div className="carousel-inner">
                <div className="item active">
                <img src={Image1} alt="Bigbasket" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Anub Sinha</h5>
                <h6>Founder (Opscale.io)</h6>
                </div>
                </div>

                <div className="item">
                <img src={Image2} alt="Curefit" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Arvind Pandey</h5>
                <h6>Amazon, India</h6>
                </div>
                </div>

                <div className="item">
                <img src={Image3} alt="Flipkart" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Ashish Goyal</h5>
                <h6>Amazon, India</h6>
                </div>
                </div>

                <div className="item">
                <img src={Image4} alt="Grofers" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Mayank Mittal</h5>
                <h6>Tech Lead Intugine Technologies</h6>
                </div>
                </div>

                <div className="item">
                <img src={Image5} alt="Hike" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Neeraj</h5>
                <h6>Co-Founder TheDroid</h6>
                </div>
                </div>

                <div className="item">
                <img src={Image6} alt="Inmobi" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Revti Raman Singh</h5>
                <h6>AWS Seattle</h6>
                </div>
                </div>

                <div className="item">
                <img src={Image7} alt="Ola" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Sanjeev</h5>
                <h6>Ola, India</h6>
                </div>
                </div>

                <div className="item">
                <img src={Image8} alt="Paytm" className="trainer-image-cl"/>
                <div className="mobile-biocard">
                <h5>Vipul Gupta</h5>
                <h6>IIT Kanpur, University of Berkely</h6>
                </div>
                </div>

                </div>
            </div>

            </div>
        </div>
</div>

);
}
}
export default Course;

import * as React from 'react';
import '../css/common.css';
import Bigbasket from '../images/bigbasket.png';
import Curefit from '../images/curefit.png';
import Flipkart from '../images/flipkart.png';
import Grofers from '../images/grofers-logo.png';
import Hike from '../images/Hike.png';
import Inmobi from '../images/inmobi.png';
import Ola from '../images/ola.png';
import Paytm from '../images/Paytm.png';
import Policybazar from '../images/Policybazar.png';
import Practo from '../images/practo.png';
import Rivigo from '../images/Rivigo.png';
import Zomato from '../images/Zomato.png';

class Technology extends React.Component {
  public render() {
    return (
    <div className="tech-cl">
        <div className="container tech-header">
          <div className="row">
            <div className="col-md-12 header-text">
            <h3>Startups working on same technologies</h3>
            <p>Have a look at the startups where these technologies are used extensively. </p>
            </div>
          </div>
          </div>
          <div className="container tech-card-slider">
          <div className="row technology">
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Bigbasket} alt="Bigbasket" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Curefit} alt="Curefit" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Flipkart} alt="Flipkart" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>Reactjs</li>
                            <li>NodeJS</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
              <div className="col-md-3">
                  <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                          <img src={Grofers} alt="Grofers" className="technologyimage-cl"/>
                          </div>
                              <div className="flip-card-back fullstack">
                                  <div className="card-details">
                                    <ul>
                                      <li>Reactjs</li>
                                      <li>JavaScript</li>
                                    </ul>
                                  </div>
                              </div>
                            </div>
                  </div>
              </div>
          </div>
          <div className="row technology">
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Hike} alt="Hike" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>MongoDB</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Inmobi} alt="Inmobi" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Reactjs</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Ola} alt="Ola" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
              <div className="col-md-3">
                  <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                          <img src={Paytm} alt="Grofers" className="technologyimage-cl"/>
                          </div>
                              <div className="flip-card-back fullstack">
                                  <div className="card-details">
                                    <ul>
                                      <li>NodeJS</li>
                                      <li>JavaScript</li>
                                    </ul>
                                  </div>
                                </div>
                            </div>
                      </div>
                </div>
          </div>
          <div className="row technology">
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Policybazar} alt="Policybazar" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Reactjs</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Practo} alt="Practo" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>BootStrap</li>
                            <li>MongoDB</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={Rivigo} alt="Rivigo" className="technologyimage-cl"/>
                    </div>
                      <div className="flip-card-back fullstack">
                        <div className="card-details">
                          <ul>
                            <li>JavaScript</li>
                            <li>Reactjs</li>
                          </ul>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
              <div className="col-md-3">
                  <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                          <img src={Zomato} alt="Zomato" className="technologyimage-cl"/>
                          </div>
                              <div className="flip-card-back fullstack">
                                  <div className="card-details">
                                    <ul>
                                      <li>NodeJS</li>
                                      <li>JavaScript</li>
                                    </ul>
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
    <li data-target="#myCarousel" data-slide-to="9"/>
    <li data-target="#myCarousel" data-slide-to="10"/>
    <li data-target="#myCarousel" data-slide-to="11"/>
    <li data-target="#myCarousel" data-slide-to="12"/>
    </ol>
    <div className="carousel-inner">
    <div className="item active">
    <img src={Bigbasket} alt="Bigbasket" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Curefit} alt="Curefit" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Flipkart} alt="Flipkart" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Grofers} alt="Grofers" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Hike} alt="Hike" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Inmobi} alt="Inmobi" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Ola} alt="Ola" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Paytm} alt="Paytm" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Policybazar} alt="Policybazar" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Practo} alt="Practo" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Rivigo} alt="Rivigo" className="slider-image-cl"/>
    </div>

    <div className="item">
    <img src={Zomato} alt="Zomato" className="slider-image-cl"/>
    </div>
    </div>
    </div>

    </div>
    );
  }
}

export default Technology;

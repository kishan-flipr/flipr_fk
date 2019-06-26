import * as React from 'react';
import '../css/common.css';
import Backend from '../images/backend.svg';
import Frontend from '../images/frontend.svg';
import Fullstack from '../images/fullstack.svg';

class Course extends React.Component {
  public render() {
    return (
    <div className="course-back-cl">
    <div className="container course-header" id="whyus">
        <div className="row">
          <div className="col-md-12 header-text">
          <h3>Curriculum</h3>
          <p>We have tailored the curriculum to enable and empower you with the right skill sets to thrive.</p>
          </div>
        </div>
          <div className="container desktop course-detail">
          <div className="row">
                                <div className="col-md-4">
                                                <div className="flip-card">
                                                        <div className="flip-card-inner">
                                                                  <div className="flip-card-front">
                                                                      <div className="course-header-cl">
                                                                      <h3>Full Stack</h3>
                                                                      </div>
                                                                  <img src={Fullstack} alt="Avatar" className="courseimage-cl"/>
                                                                  </div>
                                                                  <div className="flip-card-back fullstack coursepage">
                                                                      <div className="back-head">
                                                                      <h4>Full Stack</h4>
                                                                      </div>
                                                                        <div className="course-card-details">
                                                                          <ul>
                                                                            <li>HTML/CSS</li>
                                                                            <li>REACT JS</li>
                                                                            <li>Node + Mongo</li>
                                                                            <li>GITHUB/ JIRA</li>
                                                                          </ul>
                                                                        </div>
                                                                  </div>
                                                        </div>
                                                </div>
                                          <div className="enroll-btn">
                                          <button type="button" className="btn  enrollbanner-btn" data-toggle="modal" data-target="#myModal">Enroll Now</button>
                                          </div>
                                </div>
                                <div className="col-md-4">
                                                <div className="flip-card">
                                                        <div className="flip-card-inner">
                                                                  <div className="flip-card-front">
                                                                      <div className="course-header-cl">
                                                                      <h3>Front End</h3>
                                                                      </div>
                                                                  <img src={Frontend} alt="Avatar" className="courseimage-cl"/>
                                                                  </div>
                                                                  <div className="flip-card-back fullstack coursepage">
                                                                  <div className="back-head">
                                                                  <h4>Front End</h4>
                                                                  </div>
                                                                        <div className="course-card-details">
                                                                          <ul>
                                                                            <li>HTML/CSS</li>
                                                                            <li>Javascript</li>
                                                                            <li>REACT JS</li>
                                                                            <li>GITHUB/ JIRA</li>
                                                                          </ul>
                                                                        </div>
                                                                  </div>
                                                        </div>
                                                </div>
                                          <div className="enroll-btn">
                                          <button type="button" className="btn enrollbanner-btn" data-toggle="modal" data-target="#myModal">Enroll Now</button>                                          </div>
                                </div>
                                <div className="col-md-4">
                                                <div className="flip-card">
                                                        <div className="flip-card-inner">
                                                                  <div className="flip-card-front">
                                                                      <div className="course-header-cl">
                                                                      <h3>Back End</h3>
                                                                      </div>
                                                                  <img src={Backend} alt="Avatar" className="courseimage-cl"/>
                                                                  </div>
                                                                  <div className="flip-card-back fullstack coursepage">
                                                                  <div className="back-head">
                                                                  <h4>Back End</h4>
                                                                  </div>
                                                                        <div className="course-card-details">
                                                                          <ul>
                                                                            <li>Node Js</li>
                                                                            <li>Express Js</li>
                                                                            <li>Mongo</li>
                                                                            <li>GITHUB/ JIRA</li>
                                                                          </ul>
                                                                        </div>
                                                                  </div>
                                                        </div>
                                                </div>
                                          <div className="enroll-btn">
                                          <button type="button" className="btn  enrollbanner-btn" data-toggle="modal" data-target="#myModal">Enroll Now</button>
                                          </div>
                                </div>
                          </div>
                      </div>


                      <div className="container mobile course-detail">
                      <div className="row">
                                            <div className="col-md-4">
                                                            <div className="flip-card">
                                                                    <div className="flip-card-inner">
                                                                              <div className="flip-card-back fullstack coursepage">
                                                                              <div className="image-align-cl">
                                                                              <img src={Fullstack} alt="Fullstack" className="course-image-cl"/>
                                                                              </div>
                                                                                  <div className="mobile-back-head">
                                                                                  <h3>Full Stack</h3>
                                                                                  </div>
                                                                                    <div className="course-card-details">
                                                                                      <ul>
                                                                                        <li>HTML/CSS</li>
                                                                                        <li>REACT JS</li>
                                                                                        <li>Node + Mongo</li>
                                                                                        <li>GITHUB/ JIRA</li>
                                                                                      </ul>
                                                                                    </div>
                                                                              </div>
                                                                    </div>
                                                            </div>
                                                      <div className="enroll-btn">
                                                      <button type="button" className="btn  enrollbanner-btn" data-toggle="modal" data-target="#myModal">Enroll Now</button>
                                                      </div>
                                            </div>
                                            <div className="col-md-4">
                                                            <div className="flip-card">
                                                                    <div className="flip-card-inner">
                                                                              <div className="flip-card-back fullstack coursepage">
                                                                              <div className="image-align-cl">
                                                                              <img src={Frontend} alt="Frontend" className="course-image-cl"/>
                                                                              </div>
                                                                                  <div className="mobile-back-head">
                                                                                  <h3>Front End</h3>
                                                                                  </div>
                                                                                    <div className="course-card-details">
                                                                                    <ul>
                                                                                      <li>HTML/CSS</li>
                                                                                      <li>Javascript</li>
                                                                                      <li>REACT JS</li>
                                                                                      <li>GITHUB/ JIRA</li>
                                                                                    </ul>
                                                                                    </div>
                                                                              </div>
                                                                    </div>
                                                            </div>
                                                      <div className="enroll-btn">
                                                      <button type="button" className="btn  enrollbanner-btn" data-toggle="modal" data-target="#myModal">Enroll Now</button>
                                                      </div>
                                            </div>
                                            <div className="col-md-4">
                                                            <div className="flip-card">
                                                                    <div className="flip-card-inner">
                                                                              <div className="flip-card-back fullstack coursepage">
                                                                              <div className="image-align-cl">
                                                                              <img src={Backend} alt="Backend" className="course-image-cl"/>
                                                                              </div>
                                                                                  <div className="mobile-back-head">
                                                                                  <h3>Back End</h3>
                                                                                  </div>
                                                                                    <div className="course-card-details">
                                                                                    <ul>
                                                                                      <li>Node Js</li>
                                                                                      <li>Express Js</li>
                                                                                      <li>Mongo</li>
                                                                                      <li>GITHUB/ JIRA</li>
                                                                                    </ul>
                                                                                    </div>
                                                                              </div>
                                                                    </div>
                                                            </div>
                                                      <div className="enroll-btn">
                                                      <button type="button" className="btn  enrollbanner-btn" data-toggle="modal" data-target="#myModal">Enroll Now</button>
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

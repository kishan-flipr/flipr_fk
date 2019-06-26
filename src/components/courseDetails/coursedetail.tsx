import * as React from 'react';
import axios from "../../axios";
import { Redirect,Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import '../css/common.css';
import Agile from '../images/agile.jpeg';
import Aws from '../images/aws.png';
import Github from '../images/github.png';

interface IProps {
  id:any;
  name:any;
  email:any;
  loginInfo:any;
  paymentInfo:any;
  MID : any;
  ORDER_ID: any;
  CUST_ID: any;
  INDUSTRY_TYPE_ID: any;
  WEBSITE: any;
  CHANNEL_ID: any;
  TXN_AMOUNT: any;
  CALLBACK_URL: any;
  CHECKSUMHASH: any;
  courseDetailInfo:any;
  courseDetail:any;
  addCartInfo:any;
  courseid: any;
  coursename: any;
  duration: any;
  price: any;
  customerid: any;
  courselist: any;
  courseInfo: any;
}

class Backend extends React.Component<IProps> {
  public state = {
    id:this.props.id,
    name:this.props.name,
    email:this.props.email,
    nextHomePage:false,
    nextPaytm:false,
    MID : this.props.MID,
    ORDER_ID: this.props.ORDER_ID,
    CUST_ID: this.props.CUST_ID,
    INDUSTRY_TYPE_ID: this.props.INDUSTRY_TYPE_ID,
    WEBSITE: this.props.WEBSITE,
    CHANNEL_ID: this.props.CHANNEL_ID,
    TXN_AMOUNT: this.props.TXN_AMOUNT,
    CALLBACK_URL: this.props.CALLBACK_URL,
    CHECKSUMHASH: this.props.CHECKSUMHASH,
    paytmForm:false,
  }

  public logoutSubmit=(e)=>{
    e.preventDefault();
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.clear();
    this.setState({nextHomePage: true});
}

public paytmapi=(data)=>{
  const formData = new FormData();
  const url='https://securegw.paytm.in/theia/processTransaction';
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  })

  const config = {
      headers: { 'content-type': 'multipart/form-data' }
  }

  axios.post(url, formData, config)
      .then(response => {
          console.log(response);
      })
      .catch(error => {
          console.log(error);
      });
}

public paymentApi=(e)=>{
  e.preventDefault();
  const num = this.props.price;
  axios.post('testtxn/testtxn'
    , {
      CUST_ID: this.props.customerid,
      name: this.props.name,
      email: this.props.email,
      TXN_AMOUNT: num.toString(),
      ORDER_ID: this.props.id,

  }
)
    .then((response) =>{
      if(response.status === 200){
        this.setState({paytmForm:true});
        this.props.paymentInfo(
          response.data.MID,
          response.data.ORDER_ID,
          response.data.CUST_ID,
          response.data.INDUSTRY_TYPE_ID,
          response.data.WEBSITE,
          response.data.CHANNEL_ID,
          response.data.TXN_AMOUNT,
          response.data.CALLBACK_URL,
          response.data.CHECKSUMHASH,
        );
      }
    })
      .catch((error)=> {
        console.log(error);
    });
}
  public render() {
    return (
      <div className="frontend-cl">
      <div className="content-detail" id="description">
      <h3>Hi {this.props.name},</h3>
      <p>Our Codecamp is a 480 hrs of Project driven & community-based learning experience that consists of learning Development, an online community forum, Chat rooms, Mentorship and Networking opportunities with the Startup Co-Founders and Tech leaders. Our aim is to make learning coding and industry experience accessible to the young aspiring and coders.</p>
      <div className="coursename-cl">
        <h3>{this.props.coursename} Course:</h3>
        <p className="tag">{this.props.duration} course</p>
      </div>
      <div className="course-header-cl">
      <h4>Course Curriculum</h4>
      </div>
      <ul className="courselist-cl">
      <div className="row">
        <div className="col-md-6">
        <li><i className="fa fa-chevron-circle-right"/> {this.props.courselist[0]}</li>
        <li><i className="fa fa-chevron-circle-right"/> {this.props.courselist[1]} </li>
        <li><i className="fa fa-chevron-circle-right"/> {this.props.courselist[2]}</li>
        </div>
        <div className="col-md-6">
        <li><i className="fa fa-chevron-circle-right"/> {this.props.courselist[3]}</li>
        <li><i className="fa fa-chevron-circle-right"/> {this.props.courselist[4]}</li>
        </div>
      </div>
      </ul>
        <div className="course-header-cl">
      <h4>Get Bonus</h4>
      </div>
            <div className="bonus-top courselist-cl">
              <div className="row bonus-cl">
                <div className="col-md-4">
                <img src={Github} alt="Github"/>
                </div>
                <div className="col-md-4">
                <img src={Agile} alt="Agile"/>
                </div>
                <div className="col-md-4">
                <img src={Aws} alt="Aws"/>
                </div>
              </div>
              <div className="row feature-cl">
              <div className="col-md-6">
              <h4><i className="fa fa-chevron-circle-right"/> Exposure to Agile Framework</h4>
              </div>
              <div className="col-md-6">
              <h4><i className="fa fa-chevron-circle-right"/> Placement in good Startups</h4>
              </div>
              </div>
            </div>
          <div className="course-header-cl">
          <h4>Get connected with Experts in the industry</h4>
          </div>
          <div className="dt-cl">
          <p className="bold"><b>Our Code Camp is driven by developers, not by traditional faculty members.</b></p>
          <ul className="experts-detail">
          <li>Knowledge Transfer by developers</li>
          <li>Connect with experts from Amazon, Ola and other reputed companies or startups </li>
          <li>Network and get Mentored by IIT/NIT Alumni</li>
          </ul>
          </div>
          <div className="emi-payment">
              <div className="emicontent">
                      <div className="row">
                          <div className="col-md-6">
                          <h3 className="emi-banner-text">EASY <br/>FLEXIBLE <br/> FINANCING</h3>
                          </div>
                          <div className="col-md-6 center">
                          <div className="emi-button">
                          <button type="button" className="btn  register">Apply For Loan</button>
                          <Link to="/checkout"><button type="button" className="btn  register">Pay Now</button></Link>
                          </div>
                          </div>
                      </div>
               </div>
          </div>
          <p className="note-cl"><b className="notebk-cl">Note:</b> We accept UPI, Paytm, Credit Card, Prepaid for No cost EMI</p>
          <div className="footer-text">
            <p className="ac-cl"><i className="fa fa-hand-o-right" aria-hidden="true"/> We care for your security and safety. We have partnered with <b>OYO </b>
              rooms to provide accommodations starting from INR 7000.</p>
            <p className="note-c12"><b className="notebk-cl">Note:</b> Programme Fee excludes accommodations fee</p>
          </div>
        {this.state.nextPaytm?<Redirect to="/login"/>:null}
        {this.state.paytmForm?<Redirect to ="/checkout"/>:null}
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    id: state.form.id,
    name:state.form.name,
    email: state.form.email,
    MID : state.form.MID,
    ORDER_ID: state.form.ORDER_ID,
    CUST_ID: state.form.CUST_ID,
    INDUSTRY_TYPE_ID: state.form.INDUSTRY_TYPE_ID,
    WEBSITE: state.form.WEBSITE,
    CHANNEL_ID: state.form.CHANNEL_ID,
    TXN_AMOUNT: state.form.TXN_AMOUNT,
    CALLBACK_URL: state.form.CALLBACK_URL,
    CHECKSUMHASH: state.form.CHECKSUMHASH,
    courseDetail: state.form.courseDetail,
    courseid: state.form.courseid,
    coursename: state.form.coursename,
    duration: state.form.duration,
    price: state.form.price,
    customerid: state.form.customerid,
    courselist: state.form.courselist

});
/**
 * define the dispatch actions
 * @param dispatch the actions to be dispatched
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loginInfo: (id,name,email) => dispatch({ type: "loginInfo", value:{id,name,email} }),
        paymentInfo: (
          MID,
          ORDER_ID,
          CUST_ID,
          INDUSTRY_TYPE_ID,
          WEBSITE,
          CHANNEL_ID,
          TXN_AMOUNT,
          CALLBACK_URL,
          CHECKSUMHASH
        ) =>dispatch({ type: "paymentInfo", value:{
          MID,
          ORDER_ID,
          CUST_ID,
          INDUSTRY_TYPE_ID,
          WEBSITE,
          CHANNEL_ID,
          TXN_AMOUNT,
          CALLBACK_URL,
          CHECKSUMHASH
          }} ),
          courseDetailInfo:(courseDetail) =>dispatch({ type: "courseDetailInfo", value:{
            courseDetail
            }} ),
         addCartInfo:(id,courseid,coursename,duration,price,customerid) =>dispatch({ type:"addCartInfo", value:{
           id,
           courseid,
           coursename,
           duration,
           price,
           customerid
         }} ),
         courseInfo:(courseid,courselist,coursename,duration,price,customerid) =>dispatch({ type:"courseInfo", value:{
           courseid,
           courselist,
           coursename,
           duration,
           price
         }})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Backend);

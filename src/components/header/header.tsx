import * as React from 'react';
import '../css/common.css';
import Logo from '../images/flipr-logo.png';
import {Redirect,Link} from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";

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
  count:any;
}


class Header extends React.Component<IProps> {

  public state = {
                nextHomePage:false,
              }

  public logoutFunction=(e)=>{
    console.log("header logout")
      e.preventDefault();
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.clear();
    //  this.setState({nextHomePage: true});
    window.location.href = '/';
  }
  public render() {
    console.log(this.props.id);
    return (
      <div>
      <header className="App-header">
      <nav className="navbar navbar-default">
      <div className="container-fluid header-top-cl">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </button>

      <div className="header-logo">
      <Link to="/">
      <a className="navbar-brand" href="#">
      <img src={Logo} alt="logo" className="logo-cl"/>
      </a>
      </Link>
      <p><b>|</b> Get Where You Belong</p>
      </div>
    </div>
      {this.props.id ==="" ?
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
        <li><a href="/#whatyouget">What you get</a></li>
        <li><a href="/#whyus">Why Us</a></li>
        <li><a href="/#ourstory">Our Story</a></li>
        <li><a href="/#gettouch">Get in Touch</a></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        </ul>
      </div>
       :
       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul className="nav navbar-nav navbar-right">
         <li><a href="/#whatyouget">What you get</a></li>
         <li><a href="/#whyus">Why Us</a></li>
         <li><a href="/#ourstory">Our Story</a></li>
         <li><a href="/#gettouch">Get in Touch</a></li>
         <li><Link to="/checkout" className="cart-icon"><i className="fa fa-shopping-cart"/></Link><span className="" data-count={this.props.count}/></li>
         <li><Link to="/myaccount" className="cart-icon"><i className="fa fa-list-alt" aria-hidden="true"/></Link></li>
         <li><Link to="/login" onClick={this.logoutFunction}><i className="fa fa-sign-out"/></Link></li>
         </ul>
       </div>
     }
     {this.state.nextHomePage?<Redirect to="/home"/>:null}
  </div>
</nav>

          </header>
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
    courselist: state.form.courselist,
    count: state.form.count,
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
         addCartInfo:(id,courseid,coursename,duration,price,customerid,count) =>dispatch({ type:"addCartInfo", value:{
           id,
           courseid,
           coursename,
           duration,
           price,
           customerid,
           count,
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

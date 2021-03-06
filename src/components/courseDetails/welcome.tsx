import * as React from 'react';
import axios from "../../axios";
import { Redirect, Link } from 'react-router-dom'
import '../css/common.css';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Fullstack from '../images/fullstack.svg';

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
  count: any;
}

class Welcome extends React.Component<IProps> {

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
                errorMsg:false,
                courseDetailView:[],
                nextCheckoutPage:false,
                detailPage:false,
                courseList:''
  }

public logoutSubmit=(e)=>{
    e.preventDefault();
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.clear();
    this.setState({nextHomePage: true});
}

public componentDidMount(){
  axios.get('course/getcoursedetail')
    .then((response) =>{
      const courseDetail = response.data.data;
      this.props.courseDetailInfo(courseDetail);
      this.setState({courseDetailView : courseDetail});
    })
    .catch((error)=> {
    this.setState({ errorMsg:false });
    });
}

public handleClick=(courseid,coursename,price,duration)=>{
  axios.post('cart/addcart'
    , {
        courseid: (courseid),
        coursename: (coursename),
        price: (price),
        duration: (duration),
        customerid: this.props.id
  }
  )
    .then((response) =>{
      const addCartDetail = response.data.message;
      this.props.addCartInfo(addCartDetail._id,addCartDetail.courseid,addCartDetail.coursename,addCartDetail.duration,addCartDetail.price,addCartDetail.customerid,addCartDetail.count)
      this.setState({nextCheckoutPage:true});
    })
      .catch((error)=> {
        console.log("Test error")
    });
}

public handleDetailClick=(courseid)=>{
  axios.post('course/coursedetail'
    , {
        courseid: (courseid),
  }
  )
    .then((response) =>{
      const courseList = response.data.data[0];
      this.props.courseInfo(courseList.courseid,courseList.courselist,courseList.coursename,courseList.duration,courseList.price);
      this.setState({detailPage:true});
    })
      .catch((error)=> {
        console.log("Test error")
    });
}

public render() {
      return (
      <div className="welcome-cl">
      <div className="coursecard-cl">
      <div className="frontend-header">
      <div className="row hl-6">
        <div className="col-md-6 name-cl">
        <h3 className="welcome-header">Hi {this.props.name},</h3>
        </div>
        <div className="col-md-6 logout"/>
      </div>
      </div>
      <div className="row">
      {this.state.courseDetailView.map(n => {
        return (
                    <div className="col-md-4"  key={n.id} >
                    <figure className="card card-product">
                    <div className="img-wrap"><img src={Fullstack} alt="CourseImages"/></div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{n.coursename}</h4>
                        <p className="course-duration">Course Duration : {n.duration}</p>
                    </figcaption>
                    <div className="bottom-wrap">
                      <Link to="#" className="btn btn-sm btn-primary pull-right sp-2" id={n.courseid} onClick={ ()=>
                       this.handleDetailClick(n.courseid)
                     }>Details</Link>
                      <Link to="#" className="btn btn-sm btn-primary pull-right" id={n.courseid} onClick={ ()=>
                       this.handleClick(n.courseid,n.coursename,n.price,n.duration)
                      }>Add To Cart</Link>
                      <div className="price-wrap h5">
                        <span className="price-new">₹ {n.price}</span>
                      </div>
                    </div>
                    </figure>
                    </div>
                  );
                })}
                </div>
                {this.state.detailPage?<Redirect to="/coursedetail"/>:null}
                {this.state.nextCheckoutPage?<Redirect to="/checkout"/>:null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

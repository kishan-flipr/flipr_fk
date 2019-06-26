import * as React from 'react';
import axios from "../../axios";
import { Redirect,Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import '../css/common.css';

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
  courseDetailInfo: any;
  courseDetail: any;
  addCartInfo: any;
  courseid: any;
  coursename: any;
  duration: any;
  price: any;
  customerid: any;
  courselist: any;
  courseInfo: any;
  count: any;
}

class Checkout extends React.Component<IProps> {
  public state = {
              id:this.props.id,
              name:this.props.name,
              email:this.props.email,
              nextHomePage:false,
              nextPaytm:false,
              MID: this.props.MID,
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
          localStorage.removeItem("coursename");
          localStorage.removeItem("price");
          localStorage.removeItem("duration");
        }
      })
        .catch((error)=> {
          console.log(error);
      });
  }


  public render() {
    return (
      <div className="checkout-cl">
      <div className="course-header-cl"><h4>MY CART</h4></div>
      <p>You can remove and add quantity to each item in the cart</p>
      <div className="item">
                  <div className="row">
                    <div className="col-md-6 item-title">
                    <h4>{this.props.coursename} Course</h4>
                    <div className="item-description"><b>Duration:</b> {this.props.duration} </div>
                    <div className="item-description"><b>Time:</b> Full Time </div>
                    </div>
                    <div className="col-md-6 pricedetail-cl">
                    <h4>₹ {this.props.price}</h4>
                    </div>
                  </div>
			 </div>
            <div className="row total-price-cl">
               <div className="col-md-6"/>
               <div className="col-md-6">
               <div className="total-info" data-calculate-me="">
               <div className="total-item total">
               <div className="total-name"><h4><b>Total Amount</b></h4></div>
               <div className="total-value" id="total-all" data-price=""><h4><b>₹ {this.props.price}</b></h4></div>
             </div>
             <div className="checkout-button">
             <Link to="/form" className="checkout-btn" onClick={this.paymentApi}>Next</Link>
             {this.state.paytmForm?<Redirect to="/form"/>:null}
             </div>
            </div>
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

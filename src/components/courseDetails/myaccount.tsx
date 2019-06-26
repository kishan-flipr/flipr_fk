import * as React from 'react';
import axios from "../../axios";
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

class MyAccount extends React.Component<IProps> {
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
    listOfOrder:[]
  }

public componentDidMount(){
  axios.post('cart/ordered_cart'
  , {
      customerid: this.props.id
   }
)
    .then((response) =>{
      const orderList = response.data.message;
      this.setState({listOfOrder:orderList});
    })
    .catch((error)=> {
    this.setState({ errorMsg:false });
    });
}

  public render() {
    console.log(this.state.listOfOrder)
    return (
      <div className="frontend-cl">
      <div>
          <table className="myaccount-table">
          <tr>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Price</th>
          <th>Status</th>
          </tr>
  {this.state.listOfOrder.map(n => {
    return (
      <tr key={n.id}>
      <td>{n.coursename}</td>
      <td>{n.duration}</td>
      <td>{n.price}</td>
      <td>{n.Status}</td>
      </tr>
    );
  })}
          </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);

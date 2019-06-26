import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import '../css/common.css';

interface IProps {
  id:any;
  name:any;
  email:any;
  loginInfo:any;
  payInfo:any;
  orderId: any;
  customerid: any;
  ORDER_ID: any;
  CUST_ID: any;
  MID: any;
  CHANNEL_ID: any;
  PAYTM_MERCHANT_KEY: any;
  CALLBACK_URL: any;
  CHECKSUMHASH: any;
  TXN_AMOUNT: any;
}

class Payment extends React.Component<IProps> {
  public state = {
                id:this.props.id,
                name:this.props.name,
                email:this.props.email,
                nextHomePage:false,
                nextPaytm:false,
                ORDER_ID: this.props.ORDER_ID,
                CUST_ID: this.props.CUST_ID,
                MID: this.props.MID,
                CHANNEL_ID: this.props.CHANNEL_ID,
                PAYTM_MERCHANT_KEY: this.props.PAYTM_MERCHANT_KEY,
                CALLBACK_URL: this.props.CALLBACK_URL,
                CHECKSUMHASH: this.props.CHECKSUMHASH,
                TXN_AMOUNT: this.props.TXN_AMOUNT,
                paytmForm:false,
  }

  public render() {
    return (
      <div className="payment-cl"/>
    );
  }
}

const mapStateToProps = state => ({
    id: state.form.id,
    name:state.form.name,
    email: state.form.email,
    orderId: state.form.orderId,
    customerid: state.form.customerid,
    ORDER_ID: state.form.ORDER_ID,
    CUST_ID: state.form.CUST_ID,
    MID: state.form.MID,
    CHANNEL_ID: state.form.CHANNEL_ID,
    PAYTM_MERCHANT_KEY: state.form.PAYTM_MERCHANT_KEY,
    CALLBACK_URL: state.form.CALLBACK_URL,
    CHECKSUMHASH: state.form.CHECKSUMHASH,
    TXN_AMOUNT: state.form.TXN_AMOUNT,

});
/**
 * define the dispatch actions
 * @param dispatch the actions to be dispatched
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loginInfo: (id,name,email) => dispatch({ type: "loginInfo", value:{id,name,email} }),
        payInfo: (ORDER_ID,CUST_ID,MID,CHANNEL_ID,PAYTM_MERCHANT_KEY,CALLBACK_URL,CHECKSUMHASH,TXN_AMOUNT) =>dispatch({ type: "payInfo", value:{ORDER_ID,CUST_ID,MID,CHANNEL_ID,PAYTM_MERCHANT_KEY,CALLBACK_URL,CHECKSUMHASH,TXN_AMOUNT}} ),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);

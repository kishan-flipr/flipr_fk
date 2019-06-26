import * as React from 'react';
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
}

class PaytmSuccess extends React.Component<IProps> {
  public state = {
                id:this.props.id,
                name:this.props.name,
                email:this.props.email,
                nextHomePage:false,
                nextPaytm:false,
                paytmForm:false,
                MID : this.props.MID,
                ORDER_ID: this.props.ORDER_ID,
                CUST_ID: this.props.CUST_ID,
                INDUSTRY_TYPE_ID: this.props.INDUSTRY_TYPE_ID,
                WEBSITE: this.props.WEBSITE,
                CHANNEL_ID: this.props.CHANNEL_ID,
                TXN_AMOUNT: this.props.TXN_AMOUNT,
                CALLBACK_URL: this.props.CALLBACK_URL,
                CHECKSUMHASH: this.props.CHECKSUMHASH,
  }

  public componentDidMount(){
     $("#success-msg").mouseover(()=> {
      setTimeout(()=> {
        window.location.href = "/welcome";
      }, 1000);
  });
    }

  public render() {
        return (
      <div className="message-cl" id="success-msg">
                <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">
                  ×</button>
                <span className="glyphicon glyphicon-ok"/><strong>Success Message</strong>
                <hr className="message-inner-separator"/>
                <p>
                  Payment is Successfully Done.</p>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaytmSuccess);

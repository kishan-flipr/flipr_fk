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

class Frontend extends React.Component<IProps> {
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

  public componentWillMount(){
    setTimeout(() => {
       document.getElementById('form-id').click();
     }, 2000);
  }

  public render() {
        return (
      <div className="frontend-cl">
          <div className="row setup-content" id="step-1">
          <div className="loader-cl">
          <div className="lds-default">
          <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
          </div>
          </div>
          <br/>
          <h4>Please wait few seconds</h4>
            <div className="col-xs-12">
          <form method="POST" id="myForm" action="https://securegw.paytm.in/theia/processTransaction" hidden>
          <div className="form-group">
          <label>MID</label>
          <input type="text"
            className="form-control"
            name="MID"
             value={this.props.MID}
              />
          </div>
          <div className="form-group">
          <label>ORDER ID </label>
          <input type="text"
          name="ORDER_ID"
          value={this.props.ORDER_ID}
          />
          </div>
          <div className="form-group">
          <label>CUSTID </label>
          <input type="text"
           name="CUST_ID"
           value={this.props.CUST_ID}
           />
          </div>
          <div className="form-group">
          <label>INDUSTRY_TYPE_ID</label>
          <input type="text"
           name="INDUSTRY_TYPE_ID"
           value={this.props.INDUSTRY_TYPE_ID}
           />
          </div>
          <div className="form-group">
          <label>WEBSITE</label>
          <input type="text"
           name="WEBSITE"
           value={this.props.WEBSITE}
           />
          </div>
          <div className="form-group">
          <label>CHANNEL_ID</label>
          <input type="text"
           name="CHANNEL_ID"
           value={this.props.CHANNEL_ID}
           />
          </div>
          <div className="form-group">
          <label>TXN_AMOUNT</label>
          <input type="text"
           name="TXN_AMOUNT"
           value={this.props.TXN_AMOUNT}
           />
          </div>
          <div className="form-group">
          <label>CALLBACK_URL</label>
          <input type="text"
           name="CALLBACK_URL"
           value={this.props.CALLBACK_URL}
           />
          </div>
          <div className="form-group">
          <label>CHECKSUMHASH</label>
          <input type="text"
           name="CHECKSUMHASH"
           value={this.props.CHECKSUMHASH}
           />
          </div>
          <input type="submit" id="form-id" className="btn btn-primary otp-button" value="Submit"/>
          </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Frontend);

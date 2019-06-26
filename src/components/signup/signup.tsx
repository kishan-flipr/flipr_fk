import * as React from 'react';
import axios from "../../axios";
import { Redirect, Link } from 'react-router-dom';
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
  MID: any;
  CHANNEL_ID: any;
  PAYTM_MERCHANT_KEY: any;
  CALLBACK_URL: any;
  CHECKSUMHASH: any;
  signupInfo: any;
}

class Signup extends React.Component<IProps> {
  public state = {
                name:'',
                email:'',
                contactno:'',
                password:'',
                confirmPassword:'',
                passwordNotMatch:false,
                otp:'',
                contactnoSuccess:'',
                unableToSend:'',
                errorMsg:'',
                otpSuccess:'',
                emailExist:'',
                emailSuccess:'',
                formSuccess:'',
                signupSuccess:'',
                directPage:false,
                emailExitsRegister:false,
  }

  public componentDidMount(){
     $("#successMsg").mouseover(()=> {
      setTimeout(()=> {
        window.location.href = "/welcome";
      }, 1000);
  });
    }

  public onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }

  public onBluDomainHandle=(e)=>{
    axios.post('userRegister/emailverify'
      , {
      email: this.state.email,
    }
  )
      .then((response) =>{
        if(response.status === 200){
          this.setState({emailSuccess:true});
          this.setState({emailExist:false});
          this.setState({errorMsg:false});
          this.setState({formSuccess:false});
        }
      })
        .catch((error)=> {
        if(error.response.status === 403 ){
          this.setState({emailExist:true});
          this.setState({emailSuccess:false});
          this.setState({errorMsg:false});
          this.setState({formSuccess:false});
      }
        else{
          this.setState({errorMsg:true});
          this.setState({formSuccess:false});
          this.setState({emailExist:false});
          this.setState({emailSuccess:false});
        }
      });
  }

  public contactHandle = (e) =>{
    axios.post('userRegister/sendotp'
      ,
      {
      contactno: this.state.contactno,
    }
  )
      .then((response) =>{
        if(response.status === 200){
          this.setState({contactnoSuccess:true});
          this.setState({errorMsg:false});
          this.setState({unableToSend:false});
          this.setState({formSuccess:false});
        }
      })
        .catch((error)=> {
        if(error.response.status === 400 ){
          this.setState({unableToSend:true});
          this.setState({contactnoSuccess:false});
          this.setState({errorMsg:false});
          this.setState({formSuccess:false});
      }
        else{
          this.setState({errorMsg:true});
          this.setState({unableToSend:false});
          this.setState({contactnoSuccess:false});
          this.setState({formSuccess:false});
        }
      });
  }

  public otpSubmit = (e) =>{
    axios.put('userRegister/otpverification'
      , {
      otp: this.state.otp,
    }
  )
      .then((response) =>{
        if(response.status === 200){
          this.setState({otpSuccess:true});
          this.setState({invalidOtp:false});
          this.setState({errorMsg:false});
          this.setState({unableToSend:false});
          this.setState({contactnoSuccess:false});
          this.setState({formSuccess:false});
        }
      })
        .catch((error)=> {
        if(error.response.status === 400 ){
          this.setState({invalidOtp:true});
          this.setState({otpSuccess:false});
          this.setState({errorMsg:false});
          this.setState({unableToSend:false});
          this.setState({contactnoSuccess:false});
          this.setState({formSuccess:false});
      }
        else{
          this.setState({errorMsg:true});
          this.setState({invalidOtp:false});
          this.setState({otpSuccess:false});
          this.setState({unableToSend:false});
          this.setState({contactnoSuccess:false});
          this.setState({formSuccess:false});
        }
      });

  }

  public signUpSubmit = (e) => {
   e.preventDefault();
   const { password, confirmPassword } = this.state;
   if (confirmPassword !== password) {
      this.setState({passwordNotMatch:true});
   } else {
     axios.post('userRegister/register'
       , {
       name: this.state.name,
       email: this.state.email,
       contactno: this.state.contactno,
       password: this.state.password,

     }
   )
       .then((response) =>{
         if(response.status === 200){
            const signUpData = response.data.data;
            this.props.signupInfo(signUpData._id, signUpData.name, signUpData.email, signUpData.contactno);
            this.setState({signupSuccess:true});
            $("#successMsg").mouseover(()=> {
             setTimeout(()=> {
               window.location.href = "/welcome";
             }, 2000);
         });
            this.setState({errorMsg:false});
            this.setState({emailExitsRegister:false});
         }
       })
         .catch((error)=> {
         if(error.response.status === 403 ){
            this.setState({emailExitsRegister:true});
            this.setState({signupSuccess:false});
            this.setState({directPage:false});
         }
         else{
           this.setState({errorMsg:true});
           this.setState({emailExitsRegister:false});
           this.setState({signupSuccess:false});
           this.setState({directPage:false});
         }
       });
   }

  }
  public render() {
    const { name, email, contactno, password, otp } = this.state;
    return (
      <div className="signup-top">
      <div className="signup-cl">
      <div className="signup-header">
      <h3>Sign up</h3>
      </div>
    <div className="row setup-content" id="step-1">
      <div className="col-xs-12">
      <form method="POST" onSubmit={this.signUpSubmit}>
    <div className="form-group">
    <label>Your Name *</label>
    <input
     type="text"
     className="form-control"
      id="fname"
      placeholder="Enter Name"
      name="name"
      autoComplete="nope"
      value={name}
      onChange={this.onChange}
      required
      />
    </div>
    <div className="form-group">
    <label>Email *</label>
    <input
    type="email"
    className="form-control"
    id="emailId"
    autoComplete="nope"
    placeholder="Enter Email"
    name="email"
    value={email}
    onChange={this.onChange}
    onBlur={this.onBluDomainHandle}
    required
    />
    </div>
    {this.state.emailSuccess?<p className="success-cl">You can use this email id</p>:null}
    {this.state.emailExist?<p className="error-cl">Email is already exist</p>:null}
    <div className="form-group">
    <label>Password *</label>
    <input
    type="password"
    className="form-control"
    id="password"
    placeholder="Enter Password"
    name="password"
    autoComplete="nope"
    value={password}
    onChange={this.onChange}
    required
    />
    </div>
    <div className="form-group">
    <label>Confirm Password *</label>
    <input
    type="password"
    className="form-control"
    id="confirmPassword"
    placeholder="Enter Confirm Password"
    name="confirmPassword"
    autoComplete="nope"
    onChange={this.onChange}
    required
    />
    </div>
    {this.state.passwordNotMatch?
      <div className="passwordError">
      <p>Password not matched</p>
      </div>
      :null}
    <span id='message'/>                  <div className="contactnumber">
                                          <form method="POST">
                                          <div className="form-group">
                                          <label>Contact Number *</label>
                                          {this.state.otpSuccess?
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="contactnoId"
                                            autoComplete="nope"
                                            placeholder="Enter Contact Number"
                                            name="contactno"
                                            onChange={this.onChange}
                                            value={contactno}
                                            required
                                            disabled
                                            />
                                            :
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="contactnoId"
                                            autoComplete="nope"
                                            placeholder="Enter Contact Number"
                                            name="contactno"
                                            onChange={this.onChange}
                                            value={contactno}
                                            required
                                            />
                                          }

                                          </div>
                                          <input type="button" className="btn btn-primary otp-button" onClick={this.contactHandle} value="Send"/>
                                          <input type="button" className="btn btn-primary otp-button" onClick={this.contactHandle} value="Resend"/>
                                          </form>
                                          </div>
    {this.state.contactnoSuccess?<p className="contactno-success">Submitted Successfully. Please wait you will get otp</p>:null}
      <br/>
              <div className="otp">
                <form method="POST">
                <div className="form-group">
                <label>OTP *</label>
                <input
                type="text"
                className="form-control"
                id="otpid"
                autoComplete="nope"
                placeholder="Enter OTP Number"
                name="otp"
                onChange={this.onChange}
                value={otp}
                required
                />
                </div>
                <input type="button" className="btn btn-primary otp-button" onClick={this.otpSubmit} value="Verify"/>
                </form>
                </div>
                <br/>
    {this.state.otpSuccess?<p className="contactno-success">Mobile Number Verified Successfully</p>:null}
    {this.state.otpSuccess?
      <button className="btn btn-primary nextBtn pull-right" type="submit" data-toggle="modal" data-target="#successMsg" >Submit</button>
      :
      <button className="btn btn-default disabled-button pull-right" type="submit" disabled>Submit</button>
    }
    <Link to="/login" className="btn btn-primary backtobtn pull-left">Sign In Instead</Link>
    </form>
      </div>
      {this.state.errorMsg?<p>Please Try again later</p>:null}
      {this.state.unableToSend?<p>Unable to send OTP. Please try after some time.</p>:null}

    </div>
    {this.state.directPage?<Redirect to="/welcome" />:null}
    {this.state.signupSuccess?
      <div id="successMsg" className="modal fade">
      <div className="modal-dialog modal-confirm">
		<div className="modal-content">
			<div className="modal-header">
      <button type="button"
      className="close"
      data-dismiss="modal" id="success_close">&times;</button>
				<div className="icon-box">
					<i className="material-icons">&#xE876;</i>
				</div>
				<h4 className="modal-title">Awesome!</h4>
			</div>
			<div className="modal-body">
				<p className="text-center">Your Sign up is done. Please wait few mins</p>
			</div>
		</div>
	</div>
  </div>

      :null}
    </div>
    </div>
    );
  }
}




const mapStateToProps = state => ({
    id: state.form.id,
    name:state.form.name,
    email: state.form.email,
    contactno: state.form.contactno,
});
/**
 * define the dispatch actions
 * @param dispatch the actions to be dispatched
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signupInfo: (id,name,email,contactno) => dispatch({ type: "signupInfo", value:{id,name,email,contactno} }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

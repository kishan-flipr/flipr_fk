import * as React from 'react';
import axios from "../../axios";
import '../css/common.css';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IProps {
  id:any;
  name:any;
  email:any;
  loginInfo:any;
}

class Login extends React.Component<IProps> {

  public state = {
                email:'',
                password:'',
                errorMsg:false,
                loginSuccess:false,
                loginFailure:false,
  }

  public onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }

public loginhandleSubmit=(e)=>{
  e.preventDefault();
  axios.post('login/login'
    , {
    email: this.state.email,
    password: this.state.password
  }
)
    .then((response) =>{
      if(response.status === 200){
        const responseData =response.data.message;
        this.props.loginInfo(responseData._id,responseData.name,responseData.email);
         this.setState({loginSuccess:true});
         this.setState({errorMsg:false});
         this.setState({loginFailure:false});
      }
    })
      .catch((error)=> {
      if(error.response.status === 404 ){
        this.setState({loginSuccess:false});
        this.setState({errorMsg:false});
        this.setState({loginFailure:true});
      }
      else{
        this.setState({errorMsg:true});
        this.setState({loginSuccess:false});
        this.setState({loginFailure:false});
      }
    });
}
  public render() {
    const { email, password } = this.state;
    return (
      <div>
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
         <form method="POST"  className="login100-form validate-form" onSubmit={this.loginhandleSubmit}>
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"/>
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
					  <input type="text"
             className="input100"
              id="loginemail"
              name="email"
              placeholder="Enter Email"
              autoComplete="nope"
              value={email}
              onChange={this.onChange}
              required
              />
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"/>
						</span>
						<input
             type="password"
             className="input100"
             id="loginpassword"
             placeholder="Enter Password"
             autoComplete="nope"
             value={password}
             name="password"
             onChange={this.onChange}
             required
             />
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"/>
							<button className="login100-form-btn" type="submit">
								Login
							</button>
						</div>
					</div>
          {this.state.loginSuccess ?
            <Redirect to="/welcome" />
            :null}
          {this.state.loginFailure ?
            <div className="errorMsg">
         <p>
         Crediantials are worng or you are not verified
         </p>
         </div>
         :null}
          {this.state.errorMsg ?
            <div className="errorMsg">
             <p>
             Please try again later.</p>
             </div>
             :null}
					<div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account ? &nbsp;
						</span>
						<Link to="/signup">
							Sign Up
						</Link>
            <br/>
						<Link to="/forgotPassword">
	           Forgot Password ?
  					</Link>
					</div>
				</form>
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
    isverified: state.form.isverified
});
/**
 * define the dispatch actions
 * @param dispatch the actions to be dispatched
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loginInfo: (id,name,email) => dispatch({ type: "loginInfo", value:{id,name,email} })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

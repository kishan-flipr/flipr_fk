import * as React from 'react';
import axios from "../../axios";
import '../css/common.css';
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IProps {
  id:any;
  name:any;
  email:any;
  loginInfo:any;
}

class ForgotPassword extends React.Component<IProps> {

  public state = {
                email:'',
                forgotSuccess:false,
                emailNotExist:false,
                emailRequired:false,
                tryError:false,
  }

  public onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }

public forgotSubmit=(e)=>{
  e.preventDefault();
  axios.post('userRegister/forgotpassword'
    , {
    email: this.state.email,
  }
)
    .then((response) =>{
      if(response.status === 200){
        this.setState({forgotSuccess:true});
        this.setState({email:''});
        this.setState({emailRequired:false});
        this.setState({emailNotExist:false});
        this.setState({tryError:false});

      }
    })
      .catch((error)=> {
      if(error.response.status === 400 ){
        this.setState({emailRequired:true});
        this.setState({forgotSuccess:false});
        this.setState({emailNotExist:false});
        this.setState({tryError:false});
      }
      else if(error.response.status === 403 ){
        this.setState({emailNotExist:true});
        this.setState({emailRequired:false});
        this.setState({forgotSuccess:false});
        this.setState({tryError:false});
      }
      else{
        this.setState({tryError:true});
        this.setState({emailNotExist:false});
        this.setState({emailRequired:false});
        this.setState({forgotSuccess:false});
      }
    });
}
  public render() {
    const { email } = this.state;
    return (
      <div>
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
         <form method="POST"  className="login100-form validate-form" onSubmit={this.forgotSubmit}>
					<span className="login100-form-title p-b-26">
						Forgot Password
					</span>
          <br/>
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
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"/>
							<button className="login100-form-btn" type="submit">
								Submit
							</button>
						</div>
					</div>
          <br/>
          {this.state.forgotSuccess?<p className="success-cl">Email Sent Successfully. Could you please check your mail.</p>:null}
          {this.state.emailNotExist?<p className="ferror-cl">Your Email is not Exist.</p>:null}
          {this.state.emailRequired?<p className="ferror-cl">Email id is required.</p>:null}
          {this.state.tryError?<p className="ferror-cl">Please Try after some time.</p>:null}
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

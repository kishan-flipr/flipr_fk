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
  match: {
        params: {
        token: string
        }
      },
  setPasswordInfo:any;
}

class SetPassword extends React.Component<IProps> {

  public state = {
                password:'',
                confirmPassword:'',
                passwordNotMatch:false,
  }

  public onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }

  public componentDidMount() {
        const paramsvalue = this.props.match.params;
        console.log(paramsvalue);
        axios.post(`userRegister/reset`, {
          token: paramsvalue.token
        })
        .then((response) =>{
          if(response.status === 200){
           const setResponseData = response.data.data;
           this.props.setPasswordInfo(setResponseData._id, setResponseData.name, setResponseData.email);
          }
        })
        .catch((error)=>{
        console.log(error);
        })
      }

 public setPasswordSubmit=(e)=>{
   e.preventDefault();
   const { password, confirmPassword } = this.state;
   if (confirmPassword !== password) {
      this.setState({passwordNotMatch:true});
   } else {
     const paramsvalue = this.props.match.params;
       axios.put(`userRegister/updatepassword`, {
         email: this.props.email,
         resetPasswordToken: paramsvalue.token,
         password: this.state.password,
       })
       .then((response) =>{
         if(response.status === 200){
           console.log("Update Password is success")
         }
       })
       .catch((error)=>{
       console.log(error);
       })
   }
 }
  public render() {
    const { password,confirmPassword } = this.state;
    return (
      <div>
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
         <form method="POST"  className="login100-form validate-form" onSubmit={this.setPasswordSubmit}>
					<span className="login100-form-title p-b-26">
						Set Password
					</span>
          <br/>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"/>
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
					  <input type="password"
             className="input100"
              id="password"
              name="password"
              placeholder="Enter Password"
              autoComplete="nope"
              value={password}
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
             id="confirmPassword"
             placeholder="Enter Confirm Password"
             autoComplete="nope"
             value={confirmPassword}
             name="confirmPassword"
             onChange={this.onChange}
             required
             />
					</div>
          {this.state.passwordNotMatch?
            <div className="passwordError">
            <p>Password not matched</p>
            </div>
            :null}
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"/>
							<button className="login100-form-btn" type="submit">
							 Submit
							</button>
						</div>
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
      loginInfo: (id,name,email) => dispatch({ type: "loginInfo", value:{id,name,email} }),
      setPasswordInfo: (id,name,email) => dispatch({ type: "setPasswordInfo", value:{id,name,email} })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SetPassword);

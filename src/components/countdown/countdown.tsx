import * as React from 'react';
import axios from "../../axios";
import FlipClock from 'x-react-flipclock';
import Location from '../images/location.svg';
import ReeValidate from 'ree-validate';
import '../css/common.css';

class Countdown extends React.Component {

  public validator = new ReeValidate({
    name:'required|min:3',
    email: 'required|email',
    contactno:'required|min:10',
    chooseprogram:'required',

});

public state = {
              name:'',
              email:'',
              contactno:'',
              chooseprogram:'',
              successMsg:'',
              errorMsg:'',
              emailExits:'',
}

public onChange=(e)=>{
  this.setState({ [e.target.name]: e.target.value });
}

public handleSubmit = (e) => {
  e.preventDefault();
  const formData ={ name:this.state.name,email:this.state.email,contactno:this.state.contactno,chooseprogram:this.state.chooseprogram};
  console.log(formData);
  axios.post('userprofile/create'
    , {
    name: this.state.name,
    email: this.state.email,
    contactno: this.state.contactno,
    course: this.state.chooseprogram,
  }
)
    .then((response) =>{
      console.log(response);
      if(response.status === 200){
          this.setState({successMsg:true});
          this.setState({emailExits:false});
          this.setState({errorMsg:false});
          this.setState({name:'',email:'',contactno:'',chooseprogram:''});
          setTimeout(() => {
            document.getElementById('modal_close').click();
          }, 1000)
      }
    })
      .catch((error)=> {
      if(error.response.status === 403 ){
        this.setState({emailExits:true});
        this.setState({errorMsg:false});
        this.setState({successMsg:false});
      }
      else{
        this.setState({errorMsg:true});
        this.setState({emailExits:false});
        this.setState({successMsg:false});
      }
    });
  }

public render() {
  const { name, email, contactno, chooseprogram } = this.state;
return (
<div className="count-top">
    <div className="countdown-cl">
        <FlipClock units={[ { sep: '' , title: 'days' , type: 'days' , }, { sep: ' ' , title: 'hour' , type: 'hours' , }, { sep: ':' , title: 'minute' , type: 'minutes' , }, { sep: ':' , title: 'sec',  type: 'seconds' , } ]} type="countdown" count_to="2019-07-10 00:00:00" />
    </div>
    <div className="banner-text">
        <h2>Code Bootcamp 10 July 2019</h2>
        <h4><img src={Location} alt="LocationMap" className="locationmap-cl"/> Koramangala, Bengaluru | Map
        </h4>
        <div className="banner-button">
            <a className="btn find-btn" href="#gettouch">Find More</a>
            <button type="button" className="btn enrollbanner-btn" data-toggle="modal" data-target="#myModal">Enroll Now</button>
        </div>
    </div>
    <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button"
                    className="close"
                    data-dismiss="modal" id="modal_close">&times;</button>
                    <h4 className="modal-title">Enroll for Training</h4>
                </div>
                <div className="modal-body">
                <form method="POST" onSubmit={this.handleSubmit}>
              <div className="form-group">
              <label>Your Name *</label>
              <input type="text"
               className="form-control"
                id="name"
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
              id="email"
              placeholder="Enter Email"
              name="email"
              onChange={this.onChange}
              value={email}
              required
              />
              </div>
              <div className="form-group">
              <label>Contact Number *</label>
              <input
              type="text"
              className="form-control"
              id="contactno"
              placeholder="Enter Contact Number"
              name="contactno"
              onChange={this.onChange}
              value={contactno}
              required
              />
              </div>
              <div className="form-group">
              <label>Choose Program *</label>
              <select className="form-control select"
               onChange={this.onChange}
               name="chooseprogram"
               id="sel1"
               value={chooseprogram}
               required
               >
                  <option value="select">Select Program</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                </select>
              </div>
              <div className="paybutton">
              <button type="submit" className="btn btn-default">Submit</button>
              </div>
              </form>
              {this.state.successMsg ?<p className="alert alert-success">Successfully Submitted. We Will get back to you soon</p>:null}
              {this.state.errorMsg ?<p className="alert alert-danger">Please try after sometimes</p>:null}
              {this.state.emailExits ?<p className="alert alert-warning">Your Email Id is already exists</p>:null}
                </div>
            </div>
        </div>
    </div>
</div>
);
}
}
export default Countdown;

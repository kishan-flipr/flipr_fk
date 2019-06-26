import * as React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Welcome from './components/courseDetails/welcome';
import Form from './components/courseDetails/form';
import CourseDetail from './components/courseDetails/coursedetail';
import Checkout from './components/courseDetails/checkout';
import PaytmSuccess from './components/courseDetails/paytmsuccess';
import PaytmFailure from './components/courseDetails/paytmfailure';
import Payment from './components/courseDetails/payment';
import Myaccount from './components/courseDetails/myaccount';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import SetPassword from './components/setPassword/setPassword';
import {Route} from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
    <div className="App">
    <Header/>
    <Route path="/" exact component={Home}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/welcome" exact component={Welcome}/>
    <Route path="/coursedetail" exact component={CourseDetail}/>
    <Route path="/form" exact component={Form}/>
    <Route path="/myaccount" exact component={Myaccount}/>
    <Route path="/paytmsuccess" exact component={PaytmSuccess}/>
    <Route path="/paytmfailure" exact component={PaytmFailure}/>
    <Route path="/forgotPassword" exact component={ForgotPassword}/>
    <Route path="/setPassword/token/:token" exact component={SetPassword}/>
    <Route path="/payment" exact component={Payment}/>
    <Route path="/checkout" exact component={Checkout}/>
    <Footer/>
    </div>
    );
  }
}

export default App;

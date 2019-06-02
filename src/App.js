import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Country from './components/pages/Country';
import Staff from './components/pages/Staff';


import './App.css';

import Austria from "./components/pages/Countrys/Austria";
import Belgium from "./components/pages/Countrys/Belgium";
import Relax from "./components/pages/Relax";
import CustomScroll from 'react-custom-scroll';
import Profile from "./components/pages/Profile";
import Germany from "./components/pages/Countrys/Germany";
import Question from "./components/Question";
import {connect} from "react-redux";
import Monaco from "./components/pages/Countrys/Monaco";
import France from "./components/pages/Countrys/France";
import Switzerland from "./components/pages/Countrys/Switzerland";
import Denmark from "./components/pages/Countrys/Denmark";
import Iceland from "./components/pages/Countrys/Iceland";
import Latvia from "./components/pages/Countrys/Latvia";
import Estonia from "./components/pages/Countrys/Estonia";
import Sweden from "./components/pages/Countrys/Sweden";
import Spain from "./components/pages/Countrys/Spain";
import HelloWorldPage from './components/HelloWorldPage/HelloWorldPage'
import CounterPage from './components/CounterPage/CounterPage'
import TimePage from './components/TimePage'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import setAuthToken from './components/setAuthToken'

import jwt_decode from 'jwt-decode';
import store from './store';

import { logoutUser, setCurrentUser } from './actions/authentication'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
function onAuthRequired({history}) {
    history.push('/login');
}

class App extends Component {
    render() {
        return (
          <Router>
                <Security
                    issuer="https://dev-562705.oktapreview.com/oauth2/default"
                    client_id="0oai7xd931LzK5Lmr0h7"
                    redirect_uri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={onAuthRequired}
                >
                    <div className="App">


                        <Route path="/" exact={true} component={Home}/>
                        <div>
                            <Route path="/country" exact={true} component={Country}/>
                            <Route path="/austria" exact={true} component={Austria}/>
                            <Route path="/belgium" exact={true} component={Belgium}/>
                            <Route path="/germany" exact={true} component={Germany}/>
                            <Route path="/monaco" exact={true} component={Monaco}/>
                            <Route path="/france" exact={true} component={France}/>
                            <Route path="/switzerland" exact={true} component={Switzerland}/>
                            <Route path="/denmark" exact={true} component={Denmark}/>
                            <Route path="/iceland" exact={true} component={Iceland}/>
                            <Route path="/latvia" exact={true} component={Latvia}/>
                            <Route path="/estonia" exact={true} component={Estonia}/>
                            <Route path="/sweden" exact={true} component={Sweden}/>
                            <Route path="/spain" exact={true} component={Spain}/>
                        </div>
                        <Route path="/relax" exact={true} component={Relax}/>
                        <Route path="/register" exact={true} component={Register}/>
                        <Route path="/auth" exact={true} component={Login}/>
                        <Route path="/staffs" exact={true} component={HelloWorldPage}/>
                        <Route path="/user" exact={true} component={Profile}/>
                        <Route path='question' exact={true} component={Question}/>
                        <Route path='/implicit/callback' component={ImplicitCallback}/>
                        <SecureRoute path="/staff" exact={true} component={Staff}/>
                        <Route
                            path="/login"
                            render={() => (
                                <Login baseUrl="https://dev-562705.oktapreview.com"/>
                            )}
                        />
                        <Route path="/implicit/callback" component={ImplicitCallback}/>
                        <Route component={CounterPage} path='counters' />
                        <Route component={TimePage} path='time' />
                    </div>

                </Security>
            </Router>
        );
    }
}
const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user,
    }
}
export default connect(mapStateToProps)(App);

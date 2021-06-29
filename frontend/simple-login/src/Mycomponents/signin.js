import React from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import validator from 'validator';
import Login from './login.js';
import Signup from './signup.js'
import './signin.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default class Signin extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <Router>
            <NavLink activeClassName='active' className='authlink' to='/sigin/login'>
            Login
            </NavLink>
            
            <NavLink activeClassName='active' className='authlink' to='/signin/logup'>
            Create new account
            </NavLink>
            
            <switch>
            <Route exact path='/sigin/login' component={Login}/>
            <Route exact path='/signin/logup' component={Signup}/>
            </switch>
            
            </Router>
            </div>
        );
    }
}
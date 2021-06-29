import React from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import Message from './message.js';
import Adddonor from './adddonor.js';
import Getdonors from './getdonors.js';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import './home.css';
import Contactus from './contactus.js';
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
             <Router>
              <NavLink to='/adddonor' className='donor'>Add Donor</NavLink>
              <NavLink to='/showdonor' className='donor'>Show Donors</NavLink>
              <switch>
            <Route exact path='/' component={Message}/>
             <Route exact path='/adddonor' component={Adddonor}/>
            <Route exact path='/showDonor' component={Getdonors}/>
            </switch>
            </Router>
        </div>
        );
    }
}
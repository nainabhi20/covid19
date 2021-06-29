import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './contactus.css';
import corona from './corona.jpg';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import {motion} from 'framer-motion';
export default class Contactus extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div>
              <motion.div id='aboutus'
               initial={{x:'-200px',y:'-100px',opacity:0}}
               animate={{x:'0',y:'0',opacity:1}}
               transition={{duration: 1,type:'spring'}}
               >
            <p>This is covid19 help club for helping people in such pandemic through this site we are tracking the <i>bed ,oxygen,plasma,hospital
            </i> available near you<br/>
            <i>stay home stay safe </i>:)</p>
              </motion.div>
            <motion.div
               initial={{x:'200px',y:'-100px',opacity:0}}
               animate={{x:'0',y:'0',opacity:1}}
               transition={{duration: 1,type:'spring'}}
               >
            <img src={corona} alt="Girl in a jacket" className='img'/>
            </motion.div>
            <motion.div id='contactus'
            initial={{x:'-200px',y:'100px',opacity:0}}
               animate={{x:'0',y:'0',opacity:1}}
               transition={{duration: 1,type:'spring'}}
            >
                <h2>Address</h2>
                 <p>3030N. Rocky Point Dr.W.#600 Tampa,Fl 126116</p>
                 <h2>Contact Information</h2>
                 
                 <p>abhihsheknain1200@gmail.com<br/>
                 phone no:-9991361402
            </p>
            </motion.div>
            </div>
        );
    }
}
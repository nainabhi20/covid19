import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import './getdonors.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default class Getdonors extends React.Component{
    constructor(props){
        super(props);
        this.state={donors_data:[],loading:true};
    }
   async componentDidMount(){
        const res=await axios('/get_donor_data');
        const x=await res.data;
       this.setState({donors_data:x,loading :false});
    }
    render(){
        if(this.state.loading==true){
            return(
            <div className='loading' style={{position:'absolute', top:'22rem',left:'45%'}}>
                 <div id='p1'></div>
                <div id='p2'>  </div>
                <div id='p3'>  </div>
                <p id='p4'>Loading...</p>
                </div>
            );
        }else
        return(
            <div>
           {this.state.donors_data.map((val)=>{return(<motion.div
            initial={{scale:0,opacity:0}}
            animate={{scale:[.5,1.05,1],opacity:1}}
            transition={{duration:1,type:'spring'}}
            className='donor_data'>
            <p className='data'>Donor name:-  {val.DONOR_NAME}</p>
            <p className='data'>Donor city:- {val.DONOR_CITY}</p>
            <p className='data'>Donor Contact:- {val.DONOR_CONTACT}</p>
            <p className='data'>Resource:- {val.DONOR_RES}</p>
            <p className='data'>Resources count:-{val.DONOR_COUNT}</p>
            <p className='data'>Description:- {val.DESCRIPTION}</p>
            </motion.div>)})}
    </div>
        );
    }
}
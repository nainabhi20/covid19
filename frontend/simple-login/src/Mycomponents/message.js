import React from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default class Message extends React.Component{
    render(){
        return(
        <motion.div style={{position:'absolute',left:'25%',top:'16rem',color:'white',backgroundColor:'black',padding:'1rem',borderRadius:7,opacity:.5,fontFamily:'cursive'}}
            initial={{x:'-100%'}}
            animate={{x:0,rotateZ:'360deg'}}
            transition={{duration:1,type:'spring'}}
            >
            <h2>Let fight together with covid19</h2>
            <h2>Stay Home Stay Safe</h2>
            <h2>Wash your hand frequently</h2>
        </motion.div>
        );
    }
}
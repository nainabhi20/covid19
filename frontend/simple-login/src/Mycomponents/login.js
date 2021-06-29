import React from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import validator from 'validator';
import { instanceOf } from 'prop-types';
import './signin.css';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={email:'',pass:'',islogin:false};
    }
    render(){
        //check weither there is any cookie present or not if 
        //present then set state islogin as true and do not the
        //login page now
        if(this.state.islogin==false){
        return(
        <motion.div 
            initial={{scaleX:0,opacity:0}}
            animate={{scaleX:1,opacity:1}}
            transition={{duration:.8,type:'spring'}}
            className='signin'>
            <form>
              <input type='email' value={this.state.email} 
                onChange={(e)=>{this.setState({email:e.target.value});}}
                 placeholder='Enter your email'
                 className='input_type'
               /><br/>
                <input type='password' value={this.state.pass} 
                 onChange={(e)=>{this.setState({pass:e.target.value});}}
                 placeholder='Enter your password'
                 className='input_type'
                  /><br/><br/>
                     <button className='signinbut' type='submit'
                        onClick={(e)=>{
                                 e.preventDefault();
                           if(this.state.email==''||this.state.pass=='')
                                 alert("Enter email or password")
                                 else{
                                 if(!validator.isEmail(this.state.email)){
                                 alert("Enter coorect email");
                                }else{
                                axios.post('/login',this.state).then((resp)=>{
                                 if(resp.data=='success'){
                                 alert("Login successfully");
                                 this.setState({islogin:true});
                                 //also set cookies here 
                                 //
                                 this.setState({email:'',pass:''});
                                }
                                if(resp.data=='Incorrect password'){
                                    alert("Incorrect password");
                                }
                                if(resp.data=="No such user is present")
                                    {
                                        alert("No such users is present");
                                    }

                                }).catch((err)=>{alert("Some error occured try again later")});
                                }
                         }
                                }} 
                        >Login
                         </button>
            </form>
            </motion.div>
        
        );
     }else{
         return(
            <motion.div
             initial={{scaleX:0,opacity:0}}
            animate={{scaleX:1,opacity:1}}
            transition={{duration:.8,type:'spring'}}
             className='logout'>
              <p>You are already sign in as cookie values</p>
             <button id='signout_but'
             onClick={()=>{
             this.setState({islogin:false});
             alert("Log out sucessfuly")
               //set islogin as false 
             //and deletes the cookies from the web
             }}
             >Log out</button>
             </motion.div>
         );
     }
    }
}
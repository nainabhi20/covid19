import React from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import validator from 'validator';
import Login from './login.js';
import axios from 'axios';
import './signin.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={email:'',pass:'',name:'',confirmpass:'',status:0};
    }
    render(){
        return(
            
           <motion.div 
            initial={{scaleX:0,opacity:0}}
            animate={{scaleX:1,opacity:1}}
            transition={{duration:.8,type:'spring'}}
            className='signin'>
              <form>
            <input type='text' className='input_type' value={this.state.name} placeholder='Enter your name'
            onChange={(e)=>{this.setState({name:e.target.value});}}
            /><br/>
            <input type='email' className='input_type' value={this.state.email} placeholder='Enter your email'
            onChange={(e)=>{this.setState({email:e.target.value})}}
            /><br/>
            <input type='password' className='input_type' value={this.state.pass}
            placeholder='Enter your password'
            onChange={(e)=>{
               this.setState({pass:e.target.value});
             }}
            /><br/>
            <input id='confirm' type='password' className='input_type' value={this.state.confirmpass}
            placeholder='Confirm password'
            onChange={(e)=>{
                this.setState({confirmpass:e.target.value});
                let size=e.target.value.length;
                    if(e.target.value!=this.state.pass)
                        document.getElementById('confirm').style.borderColor='red';
                    else
                        document.getElementById('confirm').style.borderColor='black';
                
             }}
            /><br/><br/>
            <button className='signinbut' type='submit'
              onClick={(e)=>{
                       e.preventDefault();
                       
                       
                       
                       this.setState({status:1});
                       if(!validator.isEmail(this.state.email)){
                          alert("Enter a valid email");
                      }else{
                          if(this.state.name==''||this.state.name.length<3)
                              alert("Name is too short");
                          else{
                              if(this.state.pass!=this.state.confirmpass)
                                  alert("Password is not correct");
                              else{
                                  
                                  
                                  //code to send http request and send user data to the //server 
                                  
                                  axios.post('/signup',this.state).then((resp)=>{
                                      if(resp.data=="success"){
                                          this.setState({status:0});
                                          alert("Account created successfully");
                                          this.setState({name:'',email:'',pass:'',confirmpass:''});
                                      }
                                      else{
                                          this.setState({status:0});
                                          alert("This email is already registred try with another email");
                                      }
                                  }).catch((err)=>{console.log(err)});
                                  
                              }
                          }
                              
                      }
                    setTimeout(()=>{this.setState({status:0})},3000)
                      }}
              >Create account</button>
            </form>
              <div className='loading' style={{position:'absolute', top:'22rem',left:'45%',opacity:this.state.status}}>
                 <div id='p1'></div>
                <div id='p2'>  </div>
                <div id='p3'>  </div>
                <p id='p4'>wait...</p>
                </div>
            </motion.div>
        );
    }
}
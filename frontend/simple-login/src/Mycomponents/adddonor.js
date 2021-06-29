import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import './adddonor.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default class Adddonor extends React.Component{
    constructor(props){
        super(props);
        this.state={donor_name:'',donor_city:'',donor_contact:'',donor_res:'choose the Resources',description:'Enter the description',res_count:1};
    }
    render(){
        
        return(
        <motion.div
            initial={{x:'-100%',opacity:0,width:0}}
            animate={{x:0,opacity:1,rotateZ:'360deg',width:'auto'}}
            transition={{duration:1,type:'spring'}}
            className='form_div'>
            <fieldset id='feildsets'>
            <legend id='legends'>
            Enter your detail here *
            </legend>
            <form >
               <input 
            onChange={(e)=>{this.setState({donor_name:e.target.value});}}
            type='text' value={this.state.donor_name} placeholder='Enter your name' className='input_type' id='donor_name'/><br/>
            
            
            <input
             onChange={(e)=>{this.setState({donor_city:e.target.value});}}
            type='text' value={this.state.donor_city} placeholder='Enter city name of service' className='input_type' id='donor_city'/><br/>
            
            
            <input type='phone' 
             onChange={(e)=>{this.setState({donor_contact:e.target.value})}}
             value={this.state.donor_contact} placeholder='Enter your contact number' className='input_type' id='donor_contact'/><br/>
            
            
               <select 
                 style={{height:'2rem'}}
            onChange={(e)=>{this.setState({donor_res:e.target.value})}}
           value={this.state.donor_res} className='input_type' id='donor_resource'>
        <option>Choose the Resources</option>
        <option>Oxygen</option>
        <option>Ambulance</option>
        <option>Plasma</option>
        <option>Vantilator</option>
        <option>Advice for fight</option>
                   </select><br/>
            
            <input 
              onChange={(e)=>{this.setState({res_count:e.target.value});}}
              value={this.state.res_count} placeholder='Enter product count ie. 1,2,..' className='input_type'/><br/>
            
            <textarea 
            style={{backgroundColor:'lightblue',borderRadius:5}}
            onChange={(e)=>{this.setState({description:e.target.value})}}
            value={this.state.description} rows='4' cols='45' name='donor_detail'>Enter description here...</textarea><br/>
            <button onClick={(e)=>{e.preventDefault();
                              if(this.state.donor_name==''){
                                 document.getElementById('donor_name').style.borderColor='red';
                                  document.getElementById('donor_name').placeholder='Donor name is required enter again';
                            }else{
                                if(this.state.donor_name.length<3){
                                    this.setState({donor_name:''});
                                    document.getElementById('donor_name').style.borderColor='red';
                                    document.getElementById('donor_name').placeholder='name is too short';
                                }else{
                                    if(this.state.donor_city==''){
                                        document.getElementById('donor_city').style.borderColor='red';
                                    document.getElementById('donor_city').placeholder='city name is required';
                                    }else{
                                        if(this.state.donor_contact==''||this.state.donor_contact.length<10){
                                            this.setState({donor_contact:''});
                                            document.getElementById('donor_contact').style.borderColor='red';
                                    document.getElementById('donor_contact').placeholder='Enter a valid contact number';
                                        }else{
                                            if(this.state.donor_res=='choose the Resources'){
                                                document.getElementById('donor_resource').borderColor='red';
                                            }else{
                                                 axios.post('/add',this.state)
                            .then(resp=>{alert(resp.data.donor_name);
                                        }).catch(err=>{
                                                      console.log(err);
                            });
                                                this.setState({donor_name:'',donor_city:'',donor_contact:'',donor_res:'choose the Resources',description:'Enter the description',res_count:1});
                                                alert('Your data is added sucessfully');
                                            }
                                        }
                                    }
                                }
                            }
                            }} className='buttons' type='submit'>Submit</button>
            </form>
            </fieldset>
            </motion.div>
            );
    }
}
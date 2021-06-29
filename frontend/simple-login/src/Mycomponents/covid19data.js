import React from 'react';
import reactDOM from 'react-dom';
import {motion} from 'framer-motion';
import axios from 'axios';
import './getdonors.css';
export default class extends React.Component{
    constructor(props){
        super(props);
        this.state={coviddata:[],loading:true};
    }
     async componentDidMount(){
         var res=await fetch('https://www.trackcorona.live/api/countries');
         var a=await res.json();
         this.setState({coviddata:a.data,loading:false});
         
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
        }else{
            return(
            <div className='covid_data'>
                <motion.table
                initial={{opacity:0,x:'-120%'}}
                animate={{opacity:1,x:0}}
                transition={{duration:2,type:'spring'}}
                
                >
                <tr>
                <td>
                Country name
                </td>
                <td>
                Confirmed cases
                </td>
                <td>
                Dead
                </td>
                <td>
                recovered
                </td>
                <td>
                updated
                </td>
                </tr>
                {this.state.coviddata.map((val)=>{
                      return(<motion.tr
                             initial={{opacity:0,scale:.3}}
                             animate={{opacity:1,scale:1,transition:{duration:.5,type:'spring'}}}
                             ><td>{val.location}</td><td>{val.confirmed}</td>
                             <td>{val.dead}</td>
                             <td>{val.recovered}</td>
                             <td>{val.updated}</td>
                             </motion.tr>);
                 })}
             </motion.table>
                </div>
            );
        }
    }
}
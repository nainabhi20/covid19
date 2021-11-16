import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import './getdonors.css';
import './news.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state={input:'breaking news',data:[],loading:true};
    }
    async componentDidMount(){
        var res=await fetch("https://gnews.io/api/v4/search?q="+this.state.input+"&token=599c5c898461cd49eb42f2e111f8f329");
        var a=await res.json();
        this.setState({data:a.articles,loading:false});
        
        
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

                <div>
                    <form>
                        <legend>Enter </legend>
                        <input type="text" value={this.state.input} className="input" onChange={(e)=>{this.setState({input:e.target.value})}}/>
                        <button onClick={async (e)=>{
                            e.preventDefault();
                            var res=await fetch("https://gnews.io/api/v4/search?q="+this.state.input+"&token=599c5c898461cd49eb42f2e111f8f329");
                            var a=await res.json();
                            this.setState({data:a.articles,loading:false});
        
                        }}>Go</button>
                    </form>
                    {this.state.data.map((obj)=>{
                        return(<div className="newsbox">
                            <a href={obj.source.url}><img className="img" src={obj.image} alt="image loading" width="100%" height="80%"></img></a>
                           <a href={obj.source.url}> <h3>{obj.title}</h3></a>
                         <p>{obj.content}</p>
                         <h4 style={{padding:0,margin:0}}>publish At:- {obj.publishedAt}</h4>
                         <a href={obj.source.url}><h4>{obj.source.name}</h4></a>
                        </div>);

                    })}
                </div>

            );
        }
    }

}
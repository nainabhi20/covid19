import './App.css';
import axios from 'axios';
import Header from './header.js';
import Covid19data from './Mycomponents/covid19data.js';
import Signin from './Mycomponents/signin.js';
import Aboutcovid19 from'./Mycomponents/aboutcovid19.js';
import Mypost from './Mycomponents/Mypost';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import Contactus from './Mycomponents/contactus.js';
import Home from './Mycomponents/home.js';
import cookie from 'react-cookies';
function App() {
    return (
      <div>
        <div>
       <Router>
        <div id='Navbar'>
        <NavLink exact activeClassName='active' className='links' to='/'>
        Home
        </NavLink>
           <NavLink exact activeClassName='active' className='links' to='/covid19data'>
           Covid19 data
        </NavLink>
           <NavLink exact activeClassName='active' className='links' to='/bmicalculator'>
          BMI Calculator
        </NavLink>
           <NavLink exact activeClassName='active' className='links' to='/signin'>
        Sign in
        </NavLink>
          <NavLink exact activeClassName='active' className='links' to='/contactus'>
        Contact us
        </NavLink>
         <NavLink exact activeClassName='active' className='links' to='/aboutus'>
        About Covid19
        </NavLink>
        <NavLink exact activeClassName='active' className='links' to='/showmypost'>
        Show My Posts
        </NavLink>
        <div className="userDetail">
          <p>
            {(cookie.load("islogin"))?cookie.load("userName"):"No user login"}
        </p>
        </div>
        </div>
        <switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contactus' component={Contactus}/>
        <Route exact path='/covid19data' component={Covid19data}/>
        <Route exact path='/bmicalculator' component={BMI}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/aboutus' component={Aboutcovid19}/>
        <Route exact path="/showmypost" component={Mypost}/>
        </switch>
        </Router>
        </div>
      </div>
  );
}

function calculateBMI(a,b){
   let x=b/100;
   let bmi=a/(x*x);
   return bmi;
}

function BMI(){
  return(
    <div>
      <div>
        <h1 id="heading">Calculate Body mass index</h1>
        <form style={{margin:'1rem',padding:'1rem',borderRadius:'1rem',opacity:'0.8'}} className="BMI">
          <input type="number" placeholder="Enter the mass in kg" className="input" id="mass"/>
          <input type="number" placeholder="Enter the height int cm" className="input" id="height"/><br/>
          <button  style={{backgroundColor:'black',color:'white',padding:'5px',borderRadius:'5px',marginLeft:'1rem'}} 
          onClick={(e)=>{
            e.preventDefault();
            let a,b;
            a=document.getElementById("mass");
            b=document.getElementById("height");
            let c,d;
            c=parseFloat(a.value);
            d=parseFloat(b.value);
            

            let bmi=calculateBMI(c,d).toPrecision(4);
            let status="";
            if(bmi<18.5)
            status="UnderWeight need exercise daily";
            else if(bmi>23)
            status="OverWeight";
            else
            status="fit";
            document.getElementById("bmi").innerHTML=(calculateBMI(c,d).toPrecision(4))+"  <br/>"+status;
            
          }}
          
          >Calculate</button>
          <h1  style={{margin:'1rem'}} id="bmi"></h1>

        </form>
      </div>
    </div>
  );
}
export default App;
/*
	
BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/

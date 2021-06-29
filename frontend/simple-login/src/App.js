import './App.css';
import axios from 'axios';
import Header from './header.js';
import Covid19data from './Mycomponents/covid19data.js';
import Signin from './Mycomponents/signin.js'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import Contactus from './Mycomponents/contactus.js';
import Home from './Mycomponents/home.js';
function App() {
    return (
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
        </div>
        <switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contactus' component={Contactus}/>
        <Route exact path='/covid19data' component={Covid19data}/>
        <Route exact path='/signin' component={Signin}/>
        </switch>
        </Router>
      </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {motion} from 'framer-motion';
import validator from 'validator';
import Login from './login.js';
import  { useState } from 'react';
import axios from 'axios';
import front from './front.png';
import './aboutcovid19.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
export default function Aboutcovid19(){
    return(
    <motion.div
        initial={{scaleY:0}}
        animate={{scaleY:1}}
        transition={{duration:'1s',type:'spring'}}
        >
        <div className="front">
          <img className="image" src={front} style={{height:'30rem',width:'98%',margin:'1rem',marginTop:'0',marginBottom:'0'}}></img>
        <div className="heading">
        <h1>CoronaVirus</h1>
        </div>
        <div>
        <Router>
        <NavLink to='/aboutus/overview' activeClassName='newactive' className='newlink'>Overview</NavLink>
        <NavLink to='/aboutus/prevention' activeClassName='newactive' className='newlink'>Prevention</NavLink>
        <NavLink to='/aboutus/symptoms' activeClassName='newactive' className='newlink'>Symptoms</NavLink>
        <switch>
        <Route exact path='/aboutus' component={Overview}/>
        <Route path='/aboutus/overview' component={Overview}/>
        <Route exact path='/aboutus/prevention' component={Prevention}/>
        <Route exact path='/aboutus/symptoms' component={Symptoms}/>
        </switch>
        </Router>
        </div>
        </div>
    </motion.div>
    );
}
function Overview(){
    return(
        <motion.div
        initial={{scaleX:0}}
        animate={{scaleX:1}}
        transition={{duration:'1s',type:'spring'}} class="sf_cols singleTabWrapper visible" data-id="tab_1" style={{marginTop:'4rem',marginLeft:'1rem',marginBottom:'1rem',border:'1px solid black',padding:'5px',backgroundColor:'grey',borderRadius:'5px',color:'blue'}}>
            

            <div class="sf_colsOut tabContent" data-sf-element="Tab contents" data-placeholder-label="Tab contents">
                <div class="sf_colsOut tabHeaderWrapper" data-sf-element="Tab header" data-placeholder-label="Tab header">
                <div class="sf_colsIn tabHeaderText">
                    <div className="nain">
                        Overview
                    </div>
                </div>
            </div><div class="sf_colsIn">
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
<p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.&nbsp; Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
<p>The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.&nbsp; </p>
<p>The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).</p>
<p></p>
<p>Stay informed:</p>
<ul>
    <li><strong><a href="/emergencies/diseases/novel-coronavirus-2019/advice-for-public">Protect yourself: advice for the public</a> </strong></li>
    <li><strong><a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-covid-19">Myth busters</a></strong></li>
    <li><strong><a href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-covid-19">Questions and answers</a></strong></li>
    <li><strong><a href="/emergencies/diseases/novel-coronavirus-2019/situation-reports">Situation reports</a></strong></li>
    <li><strong><a href="/emergencies/diseases/novel-coronavirus-2019"><strong>All information on the COVID-19 outbreak</strong></a></strong></li>
</ul>
<br/>
<p>&nbsp;</p>
                </div>
            </div>
        </motion.div>
    );
}
function Prevention(){
    return(
    <motion.div
        initial={{scaleX:0}}
        animate={{scaleX:1}}
        transition={{duration:'1s',type:'spring'}} class="sf_colsIn" style={{marginTop:'4rem',marginBottom:'1rem',marginLeft:'1rem',border:'1px solid black',padding:'5px',backgroundColor:'grey',borderRadius:'5px',color:'blue'}}>
                    <p>To prevent infection and to slow transmission of COVID-19, do the following:
</p>
<ul>
    <li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.
    </li>
    <li>Maintain at least 1 metre distance between you and people coughing or sneezing.
    </li>
    <li>Avoid touching your face.
    </li>
    <li>Cover your mouth and nose when coughing or sneezing.
    </li>
    <li>Stay home if you feel unwell.
    </li>
    <li>Refrain from smoking and other activities that weaken the lungs.
    </li>
    <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.
    <br/>
    <br/>
    </li>
</ul>
                </motion.div>
    );
}
function Symptoms(){
    return(
    <motion.div
        initial={{scaleX:0}}
        animate={{scaleX:1}}
        transition={{duration:'1s',type:'spring'}} class="sf_cols singleTabWrapper visible" data-id="tab_3" style={{marginTop:'4rem',marginLeft:'1rem',marginBottom:'1rem',border:'1px solid black',padding:'5px',backgroundColor:'grey',borderRadius:'5px',color:'blue'}}>
            <div class="sf_colsOut tabHeaderWrapper" data-sf-element="Tab header" data-placeholder-label="Tab header">
                <div class="sf_colsIn tabHeaderText">
                    <div class="sf-content-block content-block">
                        Symptoms
                    </div>
                </div>
            </div>

            <div class="sf_colsOut tabContent" data-sf-element="Tab contents" data-placeholder-label="Tab contents">
                <div class="sf_colsIn">
                    <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
<p>Most common symptoms:</p>
<ul>
    <li>fever.</li>
    <li>dry cough.</li>
    <li>tiredness.</li>
</ul>
<p>Less common symptoms:</p>
<ul>
    <li>aches and pains.</li>
    <li>sore throat.</li>
    <li>diarrhoea.</li>
    <li>conjunctivitis.</li>
    <li>headache.</li>
    <li>loss of taste or smell.</li>
    <li>a rash on skin, or discolouration of fingers or toes.</li>
</ul>
<p>Serious symptoms:</p>
<ul>
    <li>difficulty breathing or shortness of breath.</li>
    <li>chest pain or pressure.</li>
    <li>loss of speech or movement.</li>
</ul>
<p>Seek immediate medical attention if you have serious symptoms.&nbsp; Always call before visiting your doctor or health facility.&nbsp;</p>
<p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.&nbsp;</p>
<p>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.&nbsp;</p>
<p>&nbsp;</p>
                </div>
            </div>
        </motion.div>
    );
}
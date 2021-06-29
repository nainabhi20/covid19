const express=require('express');
const mysql=require('mysql');
const bodyParser=require('body-parser');
const con=mysql.createConnection({
   host: 'localhost',
    user:'root',
    password:'Abhishek9991361402'
});
con.connect((err)=>{
    if(err)
        console.log('There is something error in the connection as: '+err);
    else{
        console.log('Connected sucessfully done');
    }
});
if(con){
con.query('use nodejsdata');
const que='CREATE TABLE IF NOT EXISTS DONOR_DATA(DONOR_NAME VARCHAR(30),DONOR_CITY VARCHAR(30),DONOR_CONTACT VARCHAR(20),DONOR_RES VARCHAR(30),DONOR_COUNT INT,DESCRIPTION VARCHAR(100))';
    const que2='CREATE TABLE IF NOT EXISTS USERS_DETAIL(NAME VARCHAR(30),EMAIL VARCHAR(50) primary key,PASSWORD VARCHAR(30))';
con.query(que);
    con.query(que2);
}
const app=express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{ console.log('Hi im in');  res.send('<h1>Home page request</h1>')});
app.post('/add',(req,res)=>{
    console.log(req.body);
    con.query("INSERT INTO DONOR_DATA VALUES("+"'"+req.body.donor_name+"'"+","+"'"+req.body.donor_city+"'"+','+"'"+req.body.donor_contact+"'"+','+"'"+req.body.donor_res+"'"+','+"'"+req.body.res_count+"'"+','+"'"+req.body.description+"'"+")");
});
app.get('/get_donor_data',(req,res)=>{
    console.log('get a request to get data donors data...');
    
    
    
    
    
   con.query('SELECT * FROM DONOR_DATA',(err,result,feilds)=>{
        res.send(result);
   });
});
app.post('/signup',(req,res)=>{
    const que='INSERT INTO USERS_DETAIL VALUES('+"'"+req.body.name+"'"+","+"'"+req.body.email+"'"+","+"'"+req.body.pass+"'"+")";
            con.query(que,(err, result, fields)=>{
            if(err)
                res.send("some error");
            else{
                res.send("success");
            }
        });
});
app.post('/login',(req,res)=>{
   const que="SELECT * FROM USERS_DETAIL WHERE EMAIL="+"'"+req.body.email+"'";
    con.query(que,(err,result,feilds)=>{
       if(err)
           res.send("There is some error try again later");
        else{
            console.log(result);
        if(result.length==0)
            res.send("No such user is present");
        else{
             if(result[0].PASSWORD==req.body.pass)
              res.send("success");
            else
                res.send("Incorrect password");
        }
        }
    });
});
app.listen(3001,err=>{console.log('Listen to port number 3000')});

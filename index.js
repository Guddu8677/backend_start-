
require('dotenv').config();
const express = require('express');

const app = express();

const port = 3001;


app.get('/' , (req , res) => {

 res.send("hello this  the  express server");

})

app.get('/login' , (req , res) => {

res.send("this  is  the our login page");

})

app.listen(process.env.PORT , (req , res) =>{

console.log(`listen the port on the prot number ${port}`);

} );
    

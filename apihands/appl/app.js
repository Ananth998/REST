const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
 app.use(express.json());
 const foodRoute= require('./routes/foods'); 
app.use('/foods',foodRoute); 

 //Routes // listening 

mongoose.connect("mongodb://localhost:27017/foodcart",() =>{ console.log("Connected to Server"); });

 app.listen(5000);
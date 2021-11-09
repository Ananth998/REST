const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
 app.use(express.json());

 const snackRoute= require('./route/snacktype'); 
app.use('/snacks',snackRoute); 


const uploadRoute= require('./routes/snack'); 
app.use('/images',uploadRoute); 

 //Routes // listening 

mongoose.connect("mongodb://localhost:27017/snack",() =>{ console.log("Connected to Server"); });

 app.listen(5000);
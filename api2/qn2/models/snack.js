const mongoose = require('mongoose'); 
 const SnackSchema= mongoose.Schema({ 
   item:{ 
     itemname:{
     type:String, 
     required:true },

     price:{
      type:Number, 
      required:true }
     },
   nutritionfact:{ 
  
  calories:{
    type:Number, 
    required:true },

    fat:{
     type:Number, 
     required:true },
    
     
   }, 
   mainingredients:{
     type:String, 
     required :true 
    } 
  
  });

 module.exports=mongoose.model('Snacks',SnackSchema);
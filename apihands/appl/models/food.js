const mongoose = require('mongoose'); 
 const FoodSchema= mongoose.Schema({ 
   item:{ 
     itemname:{
     type:String, 
     required:true },

     price:{
      type:Number, 
      required:true }
     },
   delivery:{ 
  
  deliveryplace:{
    type:String, 
    required:true },

    deliverycharge:{
     type:Number, 
     required:true },
    
     
   }, 
   totalbill:{
     type:Number, 
     required :true 
    } 
  
  });

 module.exports=mongoose.model('Foods',FoodSchema);
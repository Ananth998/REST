const express= require('express'); 
const router= express.Router();
 const Food= require('../models/food'); 
 // getting all 
  router.get('/', async(req,res) =>{ 
    try{ 
      const foods = await Food.find();
       res.json(foods);
     }catch (err)
     { res.json({message:err}); 
     } 
   });

 // getting 
 router.get("/:foodid", async (req, res) => {
  try {
    const food = await Food.findById(req.params.foodid);
    res.json(food);
  } catch (err) {
    res.json({ message: err });
  }
});

 

 // create

 router.post('/',(req,res)=>{ 
     const food =new Food({
          item:{
              itemname: req.body.item.itemname,
              price:req.body.item.price,
            },
             delivery:{
                 deliveryplace: req.body.delivery.deliveryplace,
                 deliverycharge:req.body.delivery.deliverycharge},
                 
                 totalbill:req.body.totalbill
                  });
                   food.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) }); 

 // delete

 router.delete('/:foodid', async(req,res) =>{ 
   try{
      const removepost = await Food.deleteOne({_id: req.params.foodid});
       res.json(removepost); }
       catch(err){ res.json({message:err});
       }
       } ); 

// update

    router.patch("/:foodid", async (req, res) => {
    try {
      const food = await Food.findOne({ _id: req.params.foodid });
      if (req.body.item) {
        food.item = req.body.item;
      }
      if (req.body.delivery) {
        food.delivery = req.body.delivery;
      }
      if (req.body.totalbill) {
        food.totalbill = req.body.totalbill;
      }
      await food.save();
      res.json(food);
    } catch (err) {
      res.json({ message: err });
    }
  });

 module.exports= router;
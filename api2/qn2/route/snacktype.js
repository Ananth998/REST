const express= require('express'); 
const router= express.Router();
 const Snack= require('../models/snack'); 
 // getting all 
  router.get('/', async(req,res) =>{ 
    try{ 
      const snacks = await Snack.find();
       res.json(snacks);
     }catch (err)
     { res.json({message:err}); 
     } 
   });

 // getting 
 router.get("/:snackid", async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.snackid);
    res.json(snack);
  } catch (err) {
    res.json({ message: err });
  }
});


 // creating 

     router.post('/',(req,res)=>{ 
     const snack =new Snack({
          item:{
              itemname: req.body.item.itemname,
              price:req.body.item.price,
            },
             nutritionfact:{
                 calories: req.body.nutritionfact.calories,
                 fat: req.body.nutritionfact.fat
            },
                 
               mainingredients: req.body.mainingredients
             });
                   snack.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) }); 

 // deleting 

 router.delete('/:snackid', async(req,res) =>{ 
   try{
      const removepost = await Snack.deleteOne({_id: req.params.snackid});
       res.json(removepost); }
       catch(err){ res.json({message:err});
       }
       } ); 

// updating  id

    router.patch("/:snackid", async (req, res) => {
    try {
      const snack = await Snack.findOne({ _id: req.params.snackid });
      if (req.body.item) {
        food.item = req.body.item;
      }
      if (req.body.nutritionfact) {
        snack.nutritionfact = req.body.nutritionfact;
      }
      if (req.body.mainingredients) {
        snack.mainingredients = req.body.mainingredients;
      }
      await snack.save();
      res.json(snack);
    } catch (err) {
      res.json({ message: err });
    }
  });

 module.exports= router;
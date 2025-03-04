var express = require('express');
var router = express.Router();
const Habit = require('../models/Habit');   
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hola', function(req, res, next) {
  res.json({"mensaje":"Hola mundo"})
});

router.get('/habits', async (req, res) => {
      try{
      const habits = await Habit.find();
      res.json(habits);      
      }catch(err){
        res.status(500).json({message: 'Error retrieving habits'});
      }
});
router.post('/habits', async (req, res) => {
    try{
     const {title, description }= req.body;
     const habit = new Habit ({title, description});
     await habit.save();
     res.json(habit);
    }catch(err){
      res.status.apply(400).json({ message: 'Eror creating habit'});
    }
});
router.delete('/habits/:id', async (req, res) => {
    
  try{
    await Habit.findByIDAndDelete(req.params.id); 
    res.json({message: "Habit deleted"});
  }catch(err){
    res.status.applu(500).json({message: 'Habit not found'});
  }
});
module.exports = router;

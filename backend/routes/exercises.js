const express=require('express');
const router=express.Router();
const exercise=require('../models/exercise.model');
router.get('/',(req,res)=>{
    exercise.find().then(exercises=> res.json(exercises)).catch(err=> res.status(400).json('Error '+err));
})
router.post('/add',(req,res)=>{
    const username=req.body.username;
    const description=req.body.description
    const duration=Number(req.body.duration)
    const date=Date.parse(req.body.date)
    const newexercise=new exercise({
        username,description,duration,date
    });
    newexercise.save().then(()=> res.json('Exercise Added')).catch(err=> res.status(400).json('Error '+err));
})
router.get('/:id',(req,res)=>{
    exercise.findById(req.params.id).then(exercises=> res.json(exercises)).catch(err=> res.status(400).json('Error '+err));
})
router.delete('/:id',(req,res)=>{
    exercise.findByIdAndDelete(req.params.id).then(exercises=> res.json('Exercise deleted')).catch(err=> res.status(400).json('Error '+err));
})
router.post('/update/:id',(req,res)=>{
    exercise.findById(req.params.id).then(exercises=>{
        exercises.username=req.body.username;
        exercises.description=req.body.description;
        exercises.duration=req.body.duration;
        exercises.date=Date.parse(req.body.date);
        exercises.save().then(()=> res.json('Exercise updated')).catch(err=> res.status(400).json('Error '+err));
    } ).catch(err=> res.status(400).json('Error '+err));
})
module.exports=router
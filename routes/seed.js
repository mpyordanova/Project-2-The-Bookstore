const express = require('express');
const seedRouter = express.Router();
const Book = require('../models/Products');
const User = require('../models/Users');
const Publisher = require('../models/Publishers')

seedRouter.post('/', (req, res)=>{
    const book = req.body
    Book.insertMany(req.body, (err, book)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({book})
        }
    })
})

seedRouter.post('/publishers', (req, res)=>{
    const publisher = req.body
    Publisher.insertMany(req.body, (err, user)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({publisher})
        }
    })
})



module.exports = seedRouter;
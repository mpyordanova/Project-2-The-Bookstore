const express = require('express');
const seedRouter = express.Router();
const Book = require('../models/Products');
const User = require('../models/Users');
const Publisher = require('../models/Publishers');
const PublisherRouter = require('../routes/publishers')

seedRouter.post('/', (req, res)=>{
    Book.insertMany(book, (err, book)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({book})
        }
    })
})

// Publishers. Not sure how to seed withiout pasting the whole array/
seedRouter.post('/publishers', (req, res)=>{
        Publisher.insertMany([
        {   name: 'Simpsons',
            location: '742 Evergreen Terrace, Springfield',
            size: 'Large publishing house',
            format: 'hard copy',
            website: 'www.Simpsons.com',
        
        },
        {
            name: 'South Park',
            location: 'Park County, Colorado',
            size: 'Medium publishing house',
            format: 'digital',
            website: 'www.sputhpark.com'
        }
           
        ], (err, publishers)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({publishers})
        }
    })
})



module.exports = seedRouter;
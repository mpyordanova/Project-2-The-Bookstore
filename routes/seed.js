const express = require('express');
const seedRouter = express.Router();
const Book = require('../models/Products');
const User = require('../models/Users');
const Publisher = require('../models/Publishers');
const PublisherRouter = require('../routes/publishers')
const bookData = require('./Book');
const userData = require('./UserData')

// 1st create Book.js file with the book array, export it and reference it on line 7.
seedRouter.post('/', (req, res)=>{
    Book.insertMany(bookData, (err, BookData)=>{
        if(err){
            //            err not error because i Have it as err on line 12.
            console.error(err)
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({bookData})
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

seedRouter.post('/users', (req, res)=>{
    Users.insertMany(userData, (err, userData)=>{
        if(err){
            //            err not error because i Have it as err on line 12.
            console.error(err)
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({userData})
        }
    })
})



module.exports = seedRouter;
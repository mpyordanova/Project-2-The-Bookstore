const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { Schema } = require('mongoose');
const PublisherRouter = express.Router();

const Publisher = require('../models/Publishers');

const publisher = [
{   name: 'Simpsons',
    location: '742 Evergreen Terrace, Springfield',
    size: 'Large publishing house',
    format: 'hard copy',
    website: 'www.Simpsons.com',
    publishedBooks: [{type: Schema.Types.ObjectId, ref: 'Products'}]

},
{
    name: 'South Park',
    location: 'Park County, Colorado',
    size: 'Medium publishing house',
    format: 'digital',
    website: 'www.sputhpark.com',
    publishedBooks: [{type: Schema.Types.ObjectId, ref: 'Products'}]
}
   
]

PublisherRouter.post('/', (req, res)=>{
    const publisherData = req.body
    Publisher.insertMany(publisher, (err, publisher)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({publisher})
        }
    })
})

// Create connection with published books
PublisherRouter.put('/published/:publisherId/:productId', (req, res)=> {
    const publishedData= req.body
    Publisher.updateOne({ _id:req.params.publisherId}, {_id:req.params.productId}, (error, publishedData)=>{
if(error){
    console.log(error);
    res.status(404).json({error:'Product not found'});
    } else {
        Book.updateOne({_id: req.params.publisherId},{_id: req.params.productId}
    ,(error, publishedData)=>{
        if(error){
            res.status(404).json({
                error: 'Book not found'
            })
        }else{
            res.status(202).json({
                message:'Successfully updated publisher and books'
            })
        }
    })
}
        })
    })
    
        
    





module.exports = PublisherRouter;
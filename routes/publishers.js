const express = require('express');
const PublisherRouter = express.Router();

const Publisher = require('../models/Publishers');

const publisher = [
{   name: 'Simpsons',
    location: '742 Evergreen Terrace, Springfield',
    size: 'Large publishing house',
    format: 'hard copy',
    website: 'www.Simpsons.com'
},
{
    name: 'South Park',
    location: 'Park County, Colorado',
    size: 'Medium publishing house',
    format: 'digital',
    website: 'www.sputhpark.com'
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



module.exports = PublisherRouter;
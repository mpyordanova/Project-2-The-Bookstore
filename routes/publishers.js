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

// create one
PublisherRouter.post('/new', (req, res)=>{
    const publisherData = req.body
    //            We dont use publisher only because it is array and has many objects and we're trying to create 1 only.
    Publisher.create(publisherData, (err, publisher)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({publisherData})
        }
    })
})
// Delete One
PublisherRouter.delete('/:id',(req, res) => {
    Publisher.deleteOne({_id: req.params.id},(error, deletedPublisher)=>{
            if(error){
                res.status(404).json({error: 'No book found'})
            }else{
                res.status(204).json({message: "Successfully deleted!"})
            }
        })
    })

// Create connection with published books
// PublisherRouter.put('/published/:publisherId/:productId', (req, res)=> {
//     const publishedData= req.body
//     //                   what is being updated          data we r updating with       what does after update
//     Publisher.updateOne({ _id:req.params.publisherId}, {_id:req.params.productId}, (error, publishedData)=>{
// if(error){
//     console.log(error);
//     res.status(404).json({error:'Product not found'});
//     } else {
//         Book.updateOne({_id: req.params.publisherId},{_id: req.params.productId}
//     ,(error, publishedData)=>{
//         if(error){
//             res.status(404).json({
//                 error: 'Book not found'
//             })
//         }else{
//             res.status(202).json({
//                 message:'Successfully updated publisher and books'
//             })
//         }
//     })
// }
//         })
//     })
    
// Update one 
PublisherRouter.put('/update/:_id', (req, res)=> {
    const _id = req.params._id;
    Publisher.updateOne({_id:req.params._id}, req.body, (err, updatedPublisher) =>{
         if (err){
             res.status(404).json({message: 'Book not found!'})
         }else {
             res.status(202).json(updatedPublisher)
         }
    
    })
})
   
   // GET User by ID
   PublisherRouter.get("/:_id", (req, res)=>{
    const _id = req.params._id
    Publisher.findById(req.params._id, (err, Publisher)=>{
        if(err){
            res.status(404).json({message: err. message})
        }else{
            res.status(200).json(Publisher)
        }
    })
}) 





module.exports = PublisherRouter;
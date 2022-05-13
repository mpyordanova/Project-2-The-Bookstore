const express = require('express');
const BookRouter = express.Router()
// schema model inport
const Book = require('../models/Products');
const Publisher = require('../models/Publishers');
const BookData = require('./Book')

// Get request Index
BookRouter.get('/', (req, res)=> {
    res.status(200).json(book)
})

// Insert the data into mongoDB. To check localhost:3000/products
BookRouter.post("/", (req, res) => {
    const bookData = req.body
 // model         array[]      array[]
    Book.insertMany(bookData, (err, book)=>{
        if(err){
            res.status(400).json({message: err.message})
        }else{
            res.status(201).json({book})
        }
    })
})


BookRouter.post("/two/", (req, res) => {
    Book.insertMany(bookData, (err, book)=>{
        if(err){
            res.status(400).json({message: err.message})
        }else{
            Publisher.updateMany({
                $in:{
                    _id: ['book.publisher']
                }
            },{
                $push:{
                    publishedBooks: {
                        _id:'book._id.$[]'
                    }
                }
            },(err,publisher)=>{
                if(err){
                    res.status(400).json({message: err.message})
                }else { 
                    res.status(201).json({book})

                }
            })
        }
    })
})

BookRouter.put("/two/", (req, res) => {
let bookData = req.params

    Book.updateMany(bookData, (err, book)=>{

    })
    })

// delete route/ delete product by ID
BookRouter.delete('/:id',(req, res) => {
    Book.deleteOne({_id: req.params.id},(error, deletedBook)=>{
            if(error){
                res.status(404).json({error: 'No book found'})
            }else{
                res.status(204).json({message: "Successfully deleted!"})
            }
        })
    })

// PUT route
BookRouter.put('/update/:_id', (req, res)=> {
    const _id = req.params._id;
    Book.updateOne({_id:req.params._id}, req.body, (err, updatedBook) =>{
         if (err){
             res.status(404).json({message: 'Book not found!'})
         }else {
             res.status(202).json(updatedBook)
         }
    
    })
})

// // update with $inc
// BookRouter.put('/update/qty/:_id', (req, res)=> {
//     Book.updateOne({_id}, {$inc:{number_of_copies:(1)}},(err, updatedBook))=>{
//         if (err){
//             res.status(404).json({message: 'Book not found!'})
//         }else {
//             res.status(202).json(updatedBook)
//         }
//     }
// })

BookRouter

// GET product by ID
BookRouter.get("/:_id", (req, res)=>{
    const _id = req.params._id
    Book.findById(req.params._id, (err, bookData)=>{
        if(err){
            res.status(404).json({message: err. message})
        }else{
            res.status(200).json(bookData)
        }
    })
})

module.exports = BookRouter;
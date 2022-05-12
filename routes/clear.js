const express = require('express');
const clearRouter = express.Router();
const Book = require('../models/Products');
const User = require('../models/Users');
const Publisher = require('../models/Publishers')

clearRouter.delete("/", (req, res)=>{
    Book.deleteMany(
          (err)=>{
         if(err){
             res.status(404).json({message: err.message})
         }else{
             res.status(204).json({})
         }
     })
 
 })

 clearRouter.delete("/users", (req, res)=>{
    User.deleteMany(
          (err)=>{
         if(err){
             res.status(404).json({message: err.message})
         }else{
             res.status(204).json({})
         }
     })
 
 })

 clearRouter.delete("/publishers", (req, res)=>{
    Publisher.deleteMany(
          (err)=>{
         if(err){
             res.status(404).json({message: err.message})
         }else{
             res.status(204).json({})
         }
     })
 
 })
 module.exports = clearRouter
const express = require('express');
const Book = require('../models/Products');
const UserRouter = express.Router();
// model
const User = require('../models/Users');


const user = [
{
    name: "Micky Mouse",
    age: 42,
    address:'12 Main ave, MouseDen',
    email:"agnela@abv.bg",
  
},
{
    name:'Patric_Star' ,
    age: 20,
    address:'2 Bikini Lane, Bikini Bottom, Ocean',
    email:'patric.star@google.com',
 
},
{
    name: 'SpongeBob_SquarePants',
    age: 15,
    address:'1 Bikini line, Bikini Bottom, Ocean',
    email:"sponge.bob@gmail.com",

},
{
    name: "Scrooge MsDuck",
    age: 72,
    address:'1000 Tressure Islands, Tresor City',
    email:'more.money@gmail.com',
  
},
{
    name: 'Eugene Crabs',
    age: 50,
    address:'Crab Shack st, Bikini Bottom, Ocean',
    email:'mr.crabs@hotmail.com',
    
},
{
    name: 'Pearl',
    age: 17,
    address:'Crab Shack st.,Bikini Bottom, Ocean',
    email:'pearl.whaleee@yahoo.com',
 
}
]

// Get Index route
UserRouter.get('/', (req, res)=> {
    res.status(200).json(user)
})

// user post
UserRouter.post("/", (req, res) => {
    const userData = req.body
 // model         array[]      array[]
    User.insertMany(user, (err, user)=>{
        if(err){
            res.status(400).json({message: err.message})
        }else{
            res.status(201).json({user})
        }
    })
})

// delete user
UserRouter.delete('/:id',(req, res) => {
    User.deleteOne({_id: req.params.id},(error, deletedUser) =>{
            if(error){
                res.status(404).json({error: "No user found!"})
            }else{
                res.status(204).json({message: "Successfully deleted!"})
            }
        })
    })

    // Get User route
    UserRouter.put('/update/:_id', (req, res)=> {
        const _id = req.params._id;
        User.updateOne({_id:req.params._id}, req.body, (err, updatedUser) =>{
             if (err){
                 res.status(404).json({message: 'Book not found!'})
             }else {
                 res.status(202).json(updatedUser)
             }
        
        })
    })

// // PUT to update favorites
UserRouter.put('/favourite/:userId/:productId', (req, res)=>{
   User.updateOne({
       _id:req.params.userId}, {$push:{favourites: req.params.productId}},(error,updatedUser)=>{
           if(error){
               console.log(error);
               res.status(404).json({error: 'User not found!'});
           }else{
               Book.updateOne({
                   _id: req.params.productId},{
                    //    publisher.:obj 
                       $push:{
                           in_user_library: req.params.userId
                       }
                       },(error, updatedProduct) =>{
                           if(error){
                               console.error(error);
                               res.status(404).json({
                                   error:'Book not found'
                               })
                           }else{
                               res.status(202).json({
                                   message: "Successfully updated user and favorite books"
                               })
                           }
                       })
                   }
               })
        
       
   })



    // GET User by ID
    UserRouter.get("/:_id", (req, res)=>{
        const _id = req.params._id
        User.findById(req.params._id, (err, user)=>{
            if(err){
                res.status(404).json({message: err. message})
            }else{
                res.status(200).json(user)
            }
        })
    })
module.exports = UserRouter;
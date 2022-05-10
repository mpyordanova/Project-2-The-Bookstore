const express = require('express');
const UserRouter = express.Router();
const User = require('../models/Users');

const user = [
{
    name: "Micky Mouse",
    age: 42,
    address:'12 Main ave, MouseDen',
    email:"agnela@abv.bg"
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
    email:"sponge.bob@gmail.com"
},
{
    name: "Scrooge MsDuck",
    age: 72,
    address:'1000 Tressure Islands, Tresor City',
    email:'more.money@gmail.com'
},
{
    name: 'Eugene Crabs',
    age: 50,
    address:'Crab Shack st, Bikini Bottom, Ocean',
    email:'mr.crabs@hotmail.com'
},
{
    name: 'Pearl',
    age: 17,
    address:'Crab Shack st.,Bikini Bottom, Ocean',
    email:'pearl.whaleee@yahoo.com'
}
]

module.exports = UserRouter;
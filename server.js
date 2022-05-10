const express = require("express");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const helmet = require('helmet');
const cors = require('cors');

// import Book model
const Book = require('./models/Products');
const User = require('./models/Users');

const mongoConfig = require('./config');
const BookRouter = require('./routes/products')
const UserRouter = require('./routes/users')
require('dotenv').config();


const PORT = process.env.PORT || 3000;
const server = express();


server.use(cors('*'));
server.use(helmet());
server.use(bodyParser.json());
server.use(express.json());
server.use(morgan("dev"));

server.use('/products', BookRouter);
server.use('/users', UserRouter);


// A schema should never be declared in app.js, and you should never 
// have multiple schemas in a single file (even if you intend to nest one schema in another).
// const {Schema} = require('./models/productSchema');
// const {Schema} = require('./models/userSchema');

server.get('/', (req, res) =>{
res.status(200).json({message: 'Welcome to the bookstore!'})
})

server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening on port ${PORT}`)
})
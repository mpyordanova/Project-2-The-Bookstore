const express = require('express');
const BookRouter = express.Router()
// schema model inport
const Book = require('../models/Products');

const book = [
{
title: 'The_lost_symbol', 
genre: 'mystery', 
author: 'Dan_Brown', 
year_published: 2009, 
in_stock:'yes',
number_of_copies: 10,
stars: 3.5,
},
{
title: 'The_Hunchback_of_Notre-Dam',
genre: 'classics',
author:  'Victor_Hugo',
year_published: 1831,
in_stock:'yes',
number_of_copies: 3, 
stars: 4,
},
{
title:  'A_Game_of_Thrones',
genre: 'fantasy',
author:  'George_Martin',
year_published: 1996,
in_stock:'yes',
number_of_copies: 6,
stars: 4.44,
},
{
title:  'The_Hunger_Games',
genre: 'fiction',
author: 'Suzanne_Collins',
year_published: 2008,
in_stock:'yes',
number_of_copies:1, 
stars: 4.32
},
{
title:  'Going_postal',
genre: 'fantasy',
author:  'Terry_Pratchett',
year_published: 2004,
in_stock:'no',
number_of_copies:0, 
stars: 4.38
},
{
title: 'The_Fault_in_our_Stars',  
genre: 'yourng adult',
author:  'John_Green',
year_published: 2012,
in_stock:'yes',
number_of_copies: 1,
stars: 4.17
},
{
title:  'Lolita',
genre: 'classics',
author:  'Vladimir_Nabokov',
year_published: 1955,
in_stock: 'yes',
number_of_copies: 2,
stars: 3.88,
},
{
title:  'Cleopatra',
genre: 'history',
author:  'Stacy Shiff',
year_published: 2010,
in_stock:'yes',
number_of_copies: 4,
stars: 3.70,
},
{
    title:  'The_Girl_with_The_lower_Back_Tatoo',
    genre: 'nonfiction',
    author:  'Amy Schumer',
    year_published: 2016,
    in_stock: 'yes',
    number_of_copies: 11,
    stars: 3.72,
}
]


// Insert the data into mongoDB. To check localhost:3000/products
BookRouter.post("/", (req, res) => {
    const bookData = req.body
 // model         array[]      array[]
    Book.insertMany(book, (err, book)=>{
        if(err){
            res.status(400).json({message: err.message})
        }else{
            res.status(201).json({book})
        }
    })
})

// get route


module.exports = BookRouter;
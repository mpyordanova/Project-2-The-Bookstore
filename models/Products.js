const {Schema} = require('mongoose');
const mongoose = require ('mongoose');

const productSchema = new Schema ({

    title:{ type :String, required: true},
    genre: {type: String},
    author: {type: String, required: true},
    year_published: {type: Number},
    in_stock: {type: Boolean},
    number_of_copies: {type: Number},
    stars:{type: Number},
    // in_user_library: [{ type: typeof Schema.Types.ObjectId, ref: 'Users'}],
})
const Book = mongoose.model('Book', productSchema);

module.exports = Book;

// Book - model
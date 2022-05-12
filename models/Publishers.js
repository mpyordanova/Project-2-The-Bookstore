const {Schema} = require('mongoose');
const mongoose = require ('mongoose');

const publisherSchema = new Schema ({
    name: {type: String, required: true},
    location: {type: String, required:true},
    size: {type: String},
    format: {type: String},
    website: {type: String},
    publishedBooks: [{type: Schema.Types.ObjectId, ref: 'Products'}],

});




const Publisher = mongoose.model ('Publisher', publisherSchema);
module.exports = Publisher;
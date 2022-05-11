const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema ({
    name: {type: String, required: true},
    age:{type: Number},
    address:{type: String},
    email: {type: String, required: true, unique: true, required: true},
    // favourites: [{type: typeof Schema.Types.ObjectId, ref: 'Books'}],
})

const User = mongoose.model("User", userSchema);

module.exports = User; 
// User = model 
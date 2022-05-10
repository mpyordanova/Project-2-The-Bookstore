const mongoose = require("mongoose")
const db = mongoose.connection;

require("dotenv").config()
async function main(){
    await mongoose.connect(process.env.MONGO_URI)
    
    db.on('error', (error) => {
        console.log(error.message);
      })
      db.on('connected', () => {
        console.log('mongo connected!')
      })
      db.on('disconnected', () => {
        console.log('mongo disconnected')
      })
    
      db.on('open', () => {
        console.log('connection made!')
      })
}

module.exports = main
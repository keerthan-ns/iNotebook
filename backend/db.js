const mongoose = require('mongoose')
const keys = require('./env')
const uname = encodeURIComponent(keys[0])
const password = encodeURIComponent(keys[1])

const mongoURI = "mongodb+srv://"+uname+":"+password+"replace with mongodb url "

const connectToMongo = async () =>{
    await mongoose.connect(mongoURI)
    console.log("Connected to MongoDB!");
}

module.exports = connectToMongo
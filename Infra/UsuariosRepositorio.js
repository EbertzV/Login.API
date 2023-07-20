var User = require('../Domain/User')
const mongoose = require('mongoose')
require("dotenv").config()

module.exports = async function recuperarPorUsername(username){
    console.log(process.env.DATABASE_URL)
    await mongoose.connect(process.env.DATABASE_URL);
    var userSchema = new mongoose.Schema({
        _id: String,
        username: String,
        password: String
    })
    var users = mongoose.model("users", userSchema);
    var result = await users.findOne({ username: username });
    console.log(result)
    mongoose.disconnect();
    return new User(result._id, result.username, result.password);
}
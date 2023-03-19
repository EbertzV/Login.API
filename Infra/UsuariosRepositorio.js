var User = require('../Domain/User')
const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/login"

module.exports = async function recuperarPorUsername(username){
    await mongoose.connect(url);
    var userSchema = new mongoose.Schema({
        _id: String,
        username: String,
        password: String
    })
    var users = mongoose.model("users", userSchema);
    var result = await users.findOne({ username: username });
    mongoose.disconnect();
    return new User(result.id, result.username, result.password);
}
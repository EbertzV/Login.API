var Session = require("../../Domain/Session")
const mongoose = require("mongoose")
require("dotenv").config()

module.exports = async function insert(session){
    await mongoose.connect(process.env.DATABASE_URL)
    var sessionSchema = new mongoose.Schema({
        _id: String,
        userId: String,
        when: Date,
        token: String
    })

    var sessions = mongoose.model("sessions", sessionSchema)   
}
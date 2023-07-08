const mongoose = require("mongoose")
require("dotenv").config()

const sessionSchema = new mongoose.Schema({
    _id: String,
    userId: String,
    when: Date,
    token: String,
    minutesLength: Number
})

module.exports = mongoose.model("sessions", sessionSchema)
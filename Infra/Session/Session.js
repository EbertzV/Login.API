const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    _id: String,
    userId: String,
    when: Date,
    token: String
})

module.exports = sessionSchema.model("sessions", sessionSchema)
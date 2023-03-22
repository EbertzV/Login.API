var Session = require("../../Domain/Session")
const mongoose = require("mongoose")
require("dotenv").config()

module.exports = function insert(session){
    mongoose.connect(process.env.DATABASE_URL)
    var sessionSchema = new mongoose.Schema({
        _id: String,
        userId: String,
        when: Date,
        token: String
    })

    var sessions = mongoose.model("sessions", sessionSchema);

    sessions.insertMany([
        {
            _id: session._id,
            userId: session.userId,
            creationDate: session.creationDate,
            token: session.token
        }
    ])

    mongoose.disconnect()
}
var uuid = require("uuid")
var Session = require("../../Domain/Session")
const mongoose = require("mongoose")
require("dotenv").config()

module.exports = async function insert(session){
    mongoose.connect(process.env.DATABASE_URL)
    var sessionSchema = new mongoose.Schema({
        _id: String,
        userId: String,
        when: Date,
        token: String
    })

    var sessions = mongoose.model("sessions", sessionSchema);
    const sess = new sessions(
        {
            _id: session.id, 
            userId: session.userId,
            when: session.creationDate,
            token: session.token
        });
    try
    {
        console.log(sess)
        await sess.save();     
    } 
    catch (err)
    {
        console.log(err);
    } 
    finally{
        mongoose.disconnect()
    }
}
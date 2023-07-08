const mongoose = require("mongoose")
var SessionModel = require("./Session")
require("dotenv").config()

module.exports = async function insert(session){
    mongoose.connect(process.env.DATABASE_URL)
        .then(async function(res){
            const sess = new SessionModel(
                {
                    _id: session.id, 
                    userId: session.userId,
                    when: session.creationDate,
                    token: session.token,
                    minutesLength: session.minutesLength
                });
            sess.save()
                .then(function(res) {
                    mongoose.disconnect()
                })
                .catch(err => {
                    console.log(err)
                    mongoose.disconnect()
                })
            
        }).catch(err =>{
            console.log(err)
            mongoose.disconnect()
        })
}
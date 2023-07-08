var Session = require('../../Domain/Session')
var SessionModel = require('./Session')
const mongoose = require('mongoose')
require("dotenv").config()

module.exports = async function retrieve(myToken){
    return mongoose.connect(process.env.DATABASE_URL)
        .then(async function(res){
            return SessionModel.findOne({token: myToken})
                .then(function(result){
                    //console.log(result)
                    var resultSession = new Session(result._id, result.userId, result.when, result.token, result.minutesLength)
                    //console.log(resultSession)
                    mongoose.disconnect()
                    return resultSession
                })
                .catch(err => {
                    mongoose.disconnect()
                })
        })
        .catch(err => {
            console.log(err)
            mongoose.disconnect()
        })
}
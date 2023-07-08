var uuid = require("uuid")
var repository = require("../../Infra/Session/SessionsRepository")
var Session = require('../../Domain/Session')
require("dotenv").config()

module.exports = async function execute(command){
    var session = new Session(
        uuid.v4(),
        command.user, 
        command.when,
        command.token,
        process.env.SESSION_LENGTH_MINUTES
    )
    await repository(session)
    return session.token
}
var uuid = require("uuid")
var repository = require("../../Infra/Session/SessionsRepository")
var Session = require('../../Domain/Session')

module.exports = async function execute(command){
    var session = new Session(
        uuid.v4(),
        command.user, 
        command.when,
        command.token
    )
    await repository(session)
    return session.token
}
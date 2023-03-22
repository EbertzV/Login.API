var uuid = require("uuid")
var repository = require("../../Infra/Session/SessionsRepository")
var Session = require('../../Domain/Session')

module.exports = async function execute(command){
    console.log(command)
    var session = new Session(
        uuid.v4(),
        command.userId, 
        command.when,
        command.token
    )

    repository(session)
}
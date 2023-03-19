var uuid = require("uuid")

module.exports = function execute(command){
    var session = new Session(
        uuid.v4(),
        command.user.id, 
        command.when,
        command.token
    )

    
}
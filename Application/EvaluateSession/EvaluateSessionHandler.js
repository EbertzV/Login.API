var repo = require('../../Infra/Session/GetSessionRepository')
var Session = require('../../Domain/Session')

module.exports = async function execute(myToken){
    var currentSession = await repo(myToken)
    
    if(currentSession == null)
        return false
    else 
        return true
}
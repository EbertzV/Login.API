var express = require('express')
var app = express()
const cors = require("cors")
var AuthenticateUserCommand = require('./Application/AuthenticateUser/AuthenticateUserCommand')
var AuthenticateUser = require('./Application/AuthenticateUser/AuthenticateUser')
var CreateSessionCommand = require('./Application/CreateSession/CreateSessionCommand')
var CreateSessionCommandHandler = require('./Application/CreateSession/CreateSessionCommandHandler')
var EvaluateSessionHandler = require('./Application/EvaluateSession/EvaluateSessionHandler')

app.use(express.json())
app.use(cors())

app.post('/Login', async function(request, response) {
    var inputModel = new AuthenticateUserCommand(request.body.username, request.body.password);
    await AuthenticateUser(inputModel)
        .then(result => {
            var command = new CreateSessionCommand(result.userId, result.creationDate, result.token)
            CreateSessionCommandHandler(command)
                .then(res => {
                    response.end(res)
                }, err => {
                    console.log(err)
                })
        }).catch(result => response.end(result));
})

app.get('/Session', async function(request, response){
    var myToken = request.body.token;
    await EvaluateSessionHandler(myToken)
        .then(result => {
            response.send({ valid: result })
            response.end()
        }).catch(err => response.end(err))
})

app.listen(3000);
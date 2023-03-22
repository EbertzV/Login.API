var express = require('express')
var app = express()
const cors = require("cors")
var AuthenticateUserCommand = require('./Application/AuthenticateUser/AuthenticateUserCommand')
var AuthenticateUser = require('./Application/AuthenticateUser/AuthenticateUser')
var CreateSessionCommand = require('./Application/CreateSession/CreateSessionCommand')
var CreateSessionCommandHandler = require('./Application/CreateSession/CreateSessionCommandHandler')

app.use(express.json())
app.use(cors())

app.post('/Login', async function(request, response) {
    var inputModel = new AuthenticateUserCommand(request.body.username, request.body.password);
    await AuthenticateUser(inputModel)
        .then(result => {
            var command = new CreateSessionCommand(result.id, result.creationDate, result.token)
            CreateSessionCommandHandler(command)
                .then(res => {
                    response.end(res)
                }, err => {
                    console.log(err)
                })
        }).catch(result => retorno.end(result));
})

app.listen(3000);
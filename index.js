var express = require('express')
var app = express()
const cors = require("cors")
var AuthenticateUserCommand = require('./Application/AuthenticateUser/AuthenticateUserCommand')
var AuthenticateUser = require('./Application/AuthenticateUser/AuthenticateUser')

app.use(express.json())
app.use(cors())

app.post('/Login', async function(request, response) {
    var inputModel = new AuthenticateUserCommand(request.body.username, request.body.password);
    await AuthenticateUser(inputModel)
        .then(result => {
            response.end(result)
        }).catch(result => retorno.end(result));
})

app.listen(3000);
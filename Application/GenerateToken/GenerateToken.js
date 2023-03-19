var jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = function execute(usuario){
    var id = usuario.id
    var token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 1000
    })
    return token;
}
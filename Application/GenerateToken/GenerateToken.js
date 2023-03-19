var jwt = require("jsonwebtoken")

module.exports = function execute(usuario){
    var id = usuario.id
    var token = jwt.sign({ id }, 'teste', {
        expiresIn: 1000
    })
    console.log(token)
    return token;
}
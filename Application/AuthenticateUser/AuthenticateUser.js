var GenerateToken = require('../GenerateToken/GenerateToken')
var UsuariosRepositorio = require('../../Infra/UsuariosRepositorio')
var AuthenticatedUser = require('../../Domain/AuthenticatedUser')

module.exports = async function execute(command){
    return await UsuariosRepositorio(command.username)
        .then(usuario => {
            if(usuario == null)
                return `Usuário ${command.username} não encontrado`;
            if(usuario.PasswordHits(command.password))
            {
                var token = GenerateToken(usuario);
                return new AuthenticatedUser(
                    usuario.id,
                    Date.now(),
                    token
                );
            } else {
                return "Senha inválida";
            }
        }).catch(r => console.log(r));       
}
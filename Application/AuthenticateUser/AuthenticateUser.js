var GenerateToken = require('../GenerateToken/GenerateToken')
var UsuariosRepositorio = require('../../Infra/UsuariosRepositorio')

module.exports = async function execute(command){
    await UsuariosRepositorio(command.username)
        .then(usuario => {
            if(usuario == null)
                return `Usuário ${command.username} não encontrado`;
            if(usuario.PasswordHits(command.password))
            {
                var token = GenerateToken(usuario);
                return token;
            } else {
                return "Senha inválida";
            }
        }).catch(r => console.log(r));       
}
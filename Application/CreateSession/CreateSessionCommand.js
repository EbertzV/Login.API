module.exports = class CreateSessionCommand{
    constructor(user, when, token)
    {
        this.user = user
        this.when = when
        this.token = token
    }
}
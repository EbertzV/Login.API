module.exports = class CreateSessionCommand{
    constructor(user, when, token, sessionLength)
    {
        this.user = user
        this.when = when
        this.token = token
        this.sessionLength = sessionLength
    }
}
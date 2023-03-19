var uuid = require("uuid")

module.exports = class Session{
    constructor(id, userId, creationDate, token)
    {
        this.id=id
        this.userId=userId
        this.creationDate=creationDate
        this.token=token
    }
}
module.exports = class AuthenticatedUser{
    constructor(userId, creationDate, token)
    {
        this.userId = userId;
        this.creationDate = creationDate;
        this.token = token;
    }
}
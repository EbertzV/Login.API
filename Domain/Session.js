var uuid = require("uuid")
require("dotenv").config()

module.exports = class Session{
    constructor(id, userId, creationDate, token, minutesLength)
    {
        this.id=id
        this.userId=userId
        this.creationDate=creationDate
        this.token=token
        this.minutesLength=minutesLength
    }

    IsValidAt(date)
    {
        var minutes = parseInt(process.env.SESSION_LENGTH_MINUTES);
        var expireTime = new Date(
            this.creationDate.getFullYear(), 
            this.creationDate.getMonth(), 
            this.creationDate.getDate(), 
            this.creationDate.getHours(), 
            (this.creationDate.getMinutes() + minutes), 
            this.creationDate.getSeconds(),
            this.creationDate.getMilliseconds());
        
        var comparisonDate = new Date(date);
        if(comparisonDate >= expireTime)
            return false;
        else 
            return true;
    }
}
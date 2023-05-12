module.exports = class User{
    constructor(_id, username, password)
    {
        this.id = _id;
        this.username = username;
        this.password = password;
    }

    PasswordHits(password) {
        if(this.password === password)
            return true;
        else return false;
    }
}
module.exports = class User{
    constructor(id, username, password)
    {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    PasswordHits(password) {
        if(this.password === password)
            return true;
        else return false;
    }
}
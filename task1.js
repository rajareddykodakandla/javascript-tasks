function User(username, password){
     this.username = username;
     this.password = password;
}

User.prototype.appname = "whatsapp";
User.prototype.appid = 1234;
User.prototype.getinfo= function(){
    return this.username+ " " +this.password+ " "+this.appname+" "+this.appid;
}
var user = new User("taka", 641865);
console.log(user.getinfo());

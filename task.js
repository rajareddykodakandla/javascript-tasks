/*


Create a Function constructor for a user with details username,password

create two keys, appname, appid to prototype object  and print 
username, password, appname, appid using a function.

*/

  function User(username,password){
    this.username=username;
    this.password=password;
  }
  User.prototype.appName="LMS";
  User.prototype.appId=1234;
  User.prototype.getUserInfo= function(){
      return this.username+"\t"+ this.appId+"\t"+ this.appName+"\t"+ this.password
  }

  var x= new User("ravi","ram");

   console.log(x.getUserInfo());

/*

Self study on call, apply and bind functions

*/
var users = [
    {
        name:"ravi",
        address:"hyd"
    },
    {
        name:"kiran",
        address:"hyd"
    }
]
var keys = Object.keys(users[0]);
console.log(keys);

for(var i=0; i<users.length; i++){
    var values = Object.values(users[i]);
    console.log(values);
}
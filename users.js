var users = [
    {
        "name": "Liam",
        "age": 20,
        "course":"Angular"
    },
    {
        "name": "Noah",
        "age": 22,
        "course": "MERN stack"
    },
    {
        "name": "Oliver",
        "age": 23,
        "course": "MEAN stack"
    },
    {
        "name": "William",
        "age": 21,
        "course": "Reactjs"
    },
    {
        "name": "Elijah",
        "age": 19,
        "course": "Vuejs"
    },
    {
        "name": "James",
        "age": 20,
        "course": "Nodejs"
    },
    {
        "name": "Benjamin",
        "age": 22,
        "course": "Nextjs"
    },
    {
        "name": "Lucas",
        "age": 23,
        "course": "React native"
    },
    {
        "name": "Mason",
        "age": 21,
        "course": "Flutter"
    },
    {
        "name": "Ethan",
        "age": 24,
        "course": "javascript"
    }
]


function User(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
}

for(var i=0; i<users.length; i++){
    var name = users[i].name;
    var age = users[i].age;
    var course = users[i].course;
    var user = new User(name, age, course);
    console.log(user);
}

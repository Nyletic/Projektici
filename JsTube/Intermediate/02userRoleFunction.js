
// In Js you can have a function inside a variable, it works the same as the example below
// this is also a part of functional programming

//var getUserRole = function(role, name){}
//var getUserRole = (role, name) => {} , this makes it an arrow function
function getUserRole(role, name){
    switch (role) {
        case "admin":
            return `${name} is fully authorised`;
        case "subadmin":
            return `${name} gets access to create or delete courses`;
        case "testprep":
            return `${name} gets access to create or delete tests`;
        case "user":
            return `${name} gets access to consume the content`;
        default:
            return `${name} is a trivial user`;
    }
}

console.log(getUserRole("admin", "zganjo"));

var getRole = getUserRole("testprep", "Ivan");
console.log(getRole);
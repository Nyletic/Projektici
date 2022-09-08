// For objects we use curly braces
// everything is accessed by the key
// left side inside brackets are the keys and the right are the values

var user = {
    firstName : "Mihael",
    lastName : "Nikolic",
    role : "admin",
    logInCount : 32,
    facebookSingIn : true
};

// two ways of accessing the object
console.log(user.role);

// this is not very much used as it is not preffered by the programmers
console.log(user["logInCount"]);

user.role = "subscriber";

console.table(user);
function sayHello(name){
    console.log("Hello there,", name);
    // better way for doing this would be using backticks(``)
    // much easier to read and inject values
    console.log(`Hello there, ${name}. Have a great day!`);
}

//sayHello("Miha");


function namaste(){
    return "Ninja greeting.";
}

// console logging and returning values are two different things
// this is functional programming where we treat functions as variables
// var greeting is holding return value of the namaste function
var greeting = namaste();
console.log(greeting);

// avoiding the use of variable
console.log(namaste());
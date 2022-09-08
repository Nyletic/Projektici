// we can store this function inside a variable, have it as a normal function or even as an arrow function
//var isEven = function(number){}
//function isEven(number)
// there is also another type of function called 'Callback function' , they do not have the name
var isEven = (number) => {
    // if(number % 2 === 0){
    //     return true;
    // }
    // return false;
    // shorter way of doing it
    return number % 2 === 0;
}

//console.log(isEven(6));

// short way of declaring an array and all methods can be used on it, like this "every()" we can pass on callback function which we did in the code below 
// every() goes through array and checks for every single element inside of it
// so it goes inside this array and checks if every single element is Even, if it is it will return true otherwise false
// we don't want to run the function we just want to pass the reference to it

// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);

// arrow function callbacks
// simple function that does not have a name
// basic arrow function - (() => {}) 
// we have to return curly braces if we want to return something, if don't want to return something ()
// we gotta have a return keyword if we are using curly braces, if not we use ()

// var result = [2, 3, 6, 8].every((element) => {
//     return element % 2 === 0;
// });

// we can also do it like this
var result = [2, 5, 6, 8].every((element) => (element % 2 === 0))

console.log(result);
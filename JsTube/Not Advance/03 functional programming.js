// this is the functional way of declaring functions, functions are treated as first class citizen, functions are treated as variables
// this is holding a function as variable

// var sayHello = function(){
//     console.log("I say hello!");
// }
// sayHello();

// another way of executing the function, the function that calls itself immideatelly after its declaration, we don't wait for someone to call it

(function (){
    console.log("Hello there!");
})();

// self executing anonymous function
// nobody should call it(self-executing), and it shouldn't have a name(anonymous)
// another name for it is IIFE(Immediately Invoked Function Expression)
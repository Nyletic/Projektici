//...args //spread operator and REST operator

// console.log(Math.max(2, 5, 9, 12, 3, 7));

// var myObj = {};

// Object.assign(myObj={a: 3, d:14}, {b:3, c:4, x: 10, y: 9, z: 8})
// console.log(myObj);

function mySum(a, b) {
  return a + b;
}

// ne mozes (...args) myObject zato sto ne sadrzi samo brojeve u ovom slucaju
//const myObject = {a: 3, b: "krava", c: 5} 
var myArray = [3, 4, 5, 1, 2]
//console.log(mySum(myArray[0], myArray[1]));
console.log(sumAll(...myArray)); // spread operator

function sumAll(a, b, ...args){
    var sum = 0;

    let multiply = a * b

    args.forEach(element => {
        sum += element;
    });
    return [multiply, sum];
}
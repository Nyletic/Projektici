// 2 ways of defining arrays

var countries = ["Croatia", "New Zealand", "China", "Germany"];

// this way is more modern and a bit more object oriented, more over friendly approach
var states = new Array('Sisačko-moslavačka', "Istarska", "Zagrebačka");
console.log(states[1]);

// . after variable names gives you access to all kind of methods
console.log(states.length);

// this is not adding anything, it is replacing the value
states[1] = "Splitsko-dalmatinska";

console.log(states);

// multiple data types can be stored inside a single array, but it is not a good Data Structure
// There are other ways of storing these as objects which we are going to discuss later
var user = ["Hitesh", "hitesh@drok.com", 3, 52, true];

// removes the last value from the array
user.pop();
console.log(user);

// unshift means taking a value in, adding that value at the first place of the array and shifting everything to the right
// it is not wise to use shift and unshift because it is very expensive for memory and procesor
user.unshift("New User");
console.log(user);
// shift removes the first item in the array, and shifts other items to the left so the first item becomes 0th element in the array
user.shift();
console.log(user);
// it gives you position in the array of the wanted value
// if a searched value is not there, the output will be -1 which is very useful for comparison
console.log(user.indexOf(52));

// this method converts anything into an array 
console.log(Array.from("Marko"));
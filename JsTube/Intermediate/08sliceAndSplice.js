var users = ["Marko", "Domagoj", "Stjepan", "Arijan", "Jurica", "Dino"];

// slice is used to cut the array. If one parametar is assigned, it cuts off all items before. And if 2 parametars are assigend ti cuts from the first value till second
// first value inclued, second value excluded

//console.log(users.slice(2, 5));

// splice. First value is the start value, second value is count value and not the end value. 
// Third value is the value that is gonna be provided instead of targeted values provided with first two parametars.
// For the third value there can be as many as we like. So we can insert as many names in this case as we like instead of default values.
// with 0 at the second parametar, we insert the value at the numbered index without deleting anything

users.splice(1, 3, "Jan", "Mihael", "Tena");
console.log(users);
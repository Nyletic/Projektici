// fill and filter methods 
// three parametars in fill method

var testArray = [2, 4, 5, 8, 3, 7, 9];
// first value what value to fill up, second and third one are start and end of the filler with start being inclusive and end being exclusive
console.log(testArray.fill("h"));

// when using filter you get a new array
// filter expects you to put a callback function

const myNumbers = [22, 43, 51, 37, 89, 77, 95];

const newArray = myNumbers.filter((num) => num !== 51);
console.log(newArray);
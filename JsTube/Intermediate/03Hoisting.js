tipper(89);

// function can be called before the code of the function itself, that is possible in js
// because of the global execution context which scans the entire code and makes function available to us if they are declared

function tipper(a){
    var bill = parseInt(a);
    console.log(Math.round(bill * 1.15));
}

tipper(77);


//bigTipper(100);  This is not possible because function is stored in a variable and it can't be declared before the variable function
// Function declarations are scanned and made available.
// Variable declarations are scanned and made undefined.

// This is a big part of having a code hoisting

var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(Math.round(bill * 1.25));
}

bigTipper(100);

console.log(name);
var name = "Mihael";

function firstName(){
    var name = "Niksy";
    console.log(name);
}
firstName();

console.log(name);

var name = "Mihael";

console.log("Line 3", name);

// so this is a lesson about scope of the variables in global context and in functions
// function or method it is the same
// If I were to comment out name variables inside functions each function would carry out global name variable of value "Mihael"
function myName(){
    var name = "Mr. M";
    console.log("Line 7", name);
    myNameTwo();

    function myNameTwo(){
        var name = "Nixy";
        console.log("Line 13", name);
    }
}

myName();


// for all regular function calls, this points to global object or window object

console.log(this);

const object = {
    name: "Mihael",
    coursesEnrolled: 5,
    getCourseCount: function(){
        // using only "this" gets us the whole object
        console.log(this)

        function sayHello(){
            console.log("Hello!");
            // and this will refer to global object becuase this is a regular function call
            // this returns object only in an object call not in regular call
            console.log(this);
        }

        sayHello();
    }

}
// this is not regular function call, it is called through an object
object.getCourseCount();

// function sayHello(){
//     console.log("Hello!");
// }
// // this is regular function call
// sayHello();
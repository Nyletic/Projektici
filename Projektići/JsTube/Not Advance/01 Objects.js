// functional way of creating an object
// every object is unique and every function inside of it is unique as well 

var User = function(name, courseCount){
    // defining objects with "this" keyword
    // whenever there is constructor used there is "new" keyword involved
    this.name = name;
    this.courseCount = courseCount;
    this.getCourseCount = () => {
        console.log(`Your course count is ${this.courseCount}`);
    }
}

// we are able to inject unique properties inside our object without actually changing inside of it, we access it through prototype function

User.prototype.getFirstName = function(){
    console.log(`Your first name is: ${this.name}`)
}

var ivan = new User("Ivan", 3);
console.log(ivan);
var marko = new User('Marko', 2);

console.log(ivan.courseCount);
marko.getCourseCount();

ivan.getFirstName();

// when using "new" keyword it is not a regular function call and 
// when there is no regular function call "this" keyword is not going to point towards the window object
// it is going to point inside that object

// what is proto? we can inject and make our own constructors. Whatever is stored inside proto can be overriden or we can inject our own stuff in there   
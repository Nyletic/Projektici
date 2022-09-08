// defining method inside an object

var user = {
    firstName : "Mihael",
    lastName : "Nikolić",
    role : "admin",
    logInCount : 32,
    facebookSingIn : true,
    courseList : [],
    // object method or function inside an object
    buyCourse : function(courseName) {
        // if you want to refer to a variable inside the same object that you want to refer we use keyword 'this'
        // so in this case 'this' refers to a user
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} ${this.lastName} is enrolled in ${this.courseList.length} courses`;
    },
    getInfo : function(){
        return `First name : ${this.firstName} 
        Last name : ${this.lastName},
        Role : ${this.role},
        LogIn Count : ${this.logInCount},
        Is he signed up from Facebook: ${this.facebookSingIn},
        Number of courses enrolled : ${this.courseList.length}`;
    },
};

user.buyCourse("React");
user.buyCourse("Angular");
// console.log(user.courseList.length);

// since this is a method(getCourseCount) it needs to be run here, so it must not be passed as a reference since it has a return value 
//console.log(user.getCourseCount());

console.table(user.getInfo());

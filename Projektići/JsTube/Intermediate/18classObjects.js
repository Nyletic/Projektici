// import User from "./17classes";

const User = require("./17classes.js");

const nixy = new User("MihaJelda", "nikolijo_m_123@drkmail.com")

//console.log(nixy.getInfo());

nixy.enrollCourse("Pušenje Reacta", "Angular", "rasta trava zelena")
nixy.enrollCourse("nema nista bez vua")

console.log(nixy.showCourses());

// let courses = nixy.showCourses();
// courses.forEach((c) => console.log(c))
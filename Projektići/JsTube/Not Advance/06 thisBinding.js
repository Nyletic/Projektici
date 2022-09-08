
const mihael = {
    name : "Mihael",
    lastName: "Nikolic",
    role: "admin",
    courseCount: 4,
    getInfo : function(){
        console.log(`
        ${this.name} ${this.lastName} in the position 
        as ${this.role} is enrolled in ${this.courseCount}
        courses
        `);
    }
}

// there is a difference between referencing the method and calling the method
// reference - doAddition | call - doAddition()
//mihael.getInfo();

const dj = {
    name : "Dwayne",
    lastName: "The Rock Johnson",
    role: "sub - admin",
    courseCount: 2,
}

//mihael.getInfo.bind(dj)();
mihael.getInfo.call(dj);
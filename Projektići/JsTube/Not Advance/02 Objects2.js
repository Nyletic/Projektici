const User = {
    name: "",
    getUserName: function(){
        console.log(`Your username is: ${this.name}`);
    }
}

var mirko = Object.create(User);
mirko.name = "Mirko"
mirko.getUserName();

var ivan = Object.create(User, {
    name: {value: "Ivan"},
    courseCount: {value: 2}
})

ivan.getUserName();
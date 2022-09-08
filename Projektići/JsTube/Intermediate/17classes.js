// best not to use spaces when naming files.
// Use underscores, dashes, small to big letter etc.

class User {
  //name = "trava"; nemam pojma zasto al ovo uopce ne vidi i ne prepoznaje i ne reagira na to. Ne mozes ni pozvat
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  //# denotes private(variable)
  #courseList = [];

  getInfo() {
    return [this.name, this.email];
  }

  //this is actually a setter
  //we expect parameters, we want to set some value to the class which is private or some part of it is private, like courseList variable in our case
  enrollCourse(...courseName) {
    courseName.forEach((course) => {
      this.#courseList.push(course);
    });
  }

  //and this is a getter
  //method that helps me grab info from some private class or var
  //the idea behind it is so that not everybody can access your data directly
  //we usually return the variable, we dont expect parameters.
  showCourses() {
    return this.#courseList;
  }
  //static keyword infront so it cant be used outside this function
  static loggedIn() {
    return "You are logged in sire!";
  }
}

module.exports = User;

const rock = new User();
//console.log(rock.getInfo())

rock.enrollCourse("Hardening course", '"You rock" bootcamp');
rock.enrollCourse("mars");

//console.log(rock.showCourses());
//console.log(rock.courseList);

// const rocky = rock.showCourses();
// rocky.forEach((c) => console.log(c));

// learning about inheritance
class betterUser extends User {
  constructor(ime, mail) {
    super(ime, mail); // ovaj super() ocito funkcionira cak i ako das drugacija imena nego od gore navedenih varijabli
  }

  metodaNoveKlase() {
    console.log("Dobri den! Dobri den!");
  }

  static iNeedToLogIn() {
    return super.loggedIn() + " + tekst";
  }
}

const boljiKorisnik = new betterUser("konj", "konj@jebemtimater.com");

// console.log(boljiKorisnik.getInfo());
// boljiKorisnik.metodaNoveKlase();
//const ulogiran = boljiKorisnik.loggedIn();
//console.log(ulogiran);

console.log(betterUser.iNeedToLogIn());

class Rectangle {
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return super.logNbSides() + " which are all equal";
  }
}
console.log(Square.logDescription());


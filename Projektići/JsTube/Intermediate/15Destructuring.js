// most important thing with destructuring is to make sure
// the names are exactly the same
// Destructuring can happen on arrays as well as objects and bunch of other stuff

// const user = ["Mihael", 4, "admin"];
// // ispred moze ici ovaj var, ali ne mora. Radi normalno u ovom slucaju
// // ne znam mozda u nekim kompleksnijim slucajevima ima vise znacaja
// var [ime, courseCount, role] = user;

// console.log(role, courseCount);

const myUser = {
  ime: "mihael",
  courseCount: 4,
  role: "admin",
  number: 4.6,
};

console.log(myUser.ime);

const { imeM, courseCount, role, number } = myUser;

console.log(number);

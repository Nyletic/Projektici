"use strict";

async function ucitajKorisnike() {
  const response = await fetch("users.json");
  const users = await response.json();
  return users;
}

console.log(1);
console.log(2);
ucitajKorisnike().then((users) => console.log(users));
console.log(3);
console.log(4);

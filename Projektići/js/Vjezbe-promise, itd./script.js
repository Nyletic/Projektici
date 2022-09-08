"use strict";

fetch("https://reqres.in/api/users", {
  // method: "POST",
  // headers: { "Content-type": "application/json" },
  // body: JSON.stringify({
  //   first_name: "Igor",
  // }),
})
  .then((response) => {
    if (!response.ok) {
      throw Error("error");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    const html = data.data.map((user) => {
      return `<div class="user">
      <p><img src="${user.avatar}" alt="${user.first_name}"></p>
      <p>Zovem se ${user.first_name} </p>
      <p>Moj mail je ${user.email}</p>
      </div>`;
    });
    document.querySelector("#api").innerHTML = html.join("");
  })
  .catch((err) => console.log("err"));

//Promises
/* const jesam = false;
const nisam = false;

function promiseTutorial() {
  return new Promise((resolve, reject) => {
    if (jesam) {
      reject({
        ime: "Igor",
        prezime: "Jevremović",
      });
    } else if (nisam) {
      reject({
        ime: "Darko",
        prezime: "Darkić",
      });
    } else {
      resolve("Bravo majstore, nemaš imena");
    }
  });
}

promiseTutorial();

promiseTutorial()
  .then((poruka) => {
    console.log(`Ajmee... ${poruka}`);
  })
  .catch((error) => {
    console.log(`${error.ime} ${error.prezime}`);
  }); */

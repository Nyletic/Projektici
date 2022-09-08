"use strict";

document.querySelector("#povuciTekst").addEventListener("click", povuciTekst);
document.querySelector("#lokalniJson").addEventListener("click", povuciJson);
document.querySelector("#vanjskiJson").addEventListener("click", povuciAPI);
document.querySelector("#post").addEventListener("submit", dodajPost);

function povuciTekst() {
  fetch("uzorak.txt")
    .then((response) => response.text())
    .then((date) => {
      document.querySelector("#ispis").innerHTML = date;
    })
    .catch((error) => console.log(error));
}

function povuciJson() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let ispis = `<h2>Korisnici</h2>`;

      data.forEach((user) => {
        ispis += `
            <p>ID:${user.id}</p>
            <p>Ime:${user.ime}</p>
            <p>Prezime:${user.prezime}</p>
            `;
      });
      document.querySelector("#ispis").innerHTML = ispis;
    })
    .catch((error) => console.log(error));
}

function povuciAPI() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let APIispis = `<h2>API postovi</h2>`;

      data.forEach((user) => {
        APIispis += `
            <p>ID: ${user.id}</p>
            <p>Title: ${user.title}</p>
            <p>Tekst: ${user.body}</p>
            `;
      });
      document.querySelector("#ispis").innerHTML = APIispis;
    })
    .catch((error) => console.log(error));
}

function dodajPost(e) {
  e.preventDefault();

  let naslov = document.querySelector("#title").value;
  let tekst = document.querySelector("#body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: naslov, body: tekst }),
  })
    .then((response) => response.json())
    .then((data) => {
      data;
    })
    .catch((error) => console.log(error));
}

"use strict";

const inputValue = document.querySelector("#input");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", Search);

inputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") Search();
});

let loader = document.querySelector(".loader");

window.addEventListener("load", gifLoader);

function gifLoader() {
  loader.classList.add("hidden");
}

function Search(e) {
  e.preventDefault();

  loader.classList.remove("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 300);

  let input = inputValue.value;

  fetch(
    `https://itunes.apple.com/search?term=${input}&limit=5&entity=musicTrack`
  )
    .then((res) => {
      if (!res.ok) throw Error(`Responded with ${res.status}`);
      else return res.json();
    })
    .then((data) => {
      if (input === "") throw Error(`Song name not provided`);

      console.log(data);
      const songs = data.results
        .map((album) => {
          return `<div class="card">
        <p>Ime izvođača: ${album.artistName}</p>
        <p>Ime trake: ${album.trackName}</p>
        <img src=${album.artworkUrl100}>
          </div>
          </br>`;
        })
        .join("");

      console.log(songs);
      document.querySelector(".ispis").innerHTML = songs;
      inputValue.value = "";
    })
    .catch((error) => {
      console.error(error);
      inputValue.value = "";
    });
}

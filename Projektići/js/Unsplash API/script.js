"use strict";

document.querySelector("#search").addEventListener("click", () => apiRequest());
document.querySelector("#input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") apiRequest();
});

const loader = document.querySelector(".loader");

window.addEventListener("load", gifLoader);

function gifLoader() {
  loader.classList.add("hidden");
}

apiRequest = function () {
  loader.classList.remove("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 300);
  document.querySelector("#grid").textContent = "";
  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=10&client_id=i9hSyYCj80PDDyJKB8ylf5SLwvBcSGj_AdQKY8WYK6E";

  fetch(url)
    .then(function (response) {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(function (data) {
      loadImages(data);
    });
};

loadImages = function (data) {
  for (let i = 1; i < data.results.length; i++) {
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage =
      "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
    image.addEventListener("click", function () {
      window.open(data.results[i].links.download, "_blank");
    });
    document.querySelector("#grid").appendChild(image);
  }
};

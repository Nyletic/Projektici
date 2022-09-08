const hover = document.querySelector(".hover");

hover.addEventListener("mouseenter", () => {
  if (!hover.classList.contains("active")) {
    hover.classList.add("active");
  }
});

hover.addEventListener("mouseleave", () => {
  if (hover.classList.contains("active")) {
    hover.classList.remove("active");
  }
});

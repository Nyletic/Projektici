const emojiNeutral = document.querySelector(".emoji.closed");
const emojiSmile = document.querySelector(".emoji.open");

emojiNeutral.addEventListener("click", () => {
  if (emojiNeutral.classList.contains("active")) {
    emojiNeutral.classList.remove("active");
  } else {
    emojiNeutral.classList.add("active");
    emojiSmile.classList.remove("active");
  }
});

emojiSmile.addEventListener("click", () => {
  if (emojiSmile.classList.contains("active")) {
    emojiSmile.classList.remove("active");
  } else {
    emojiSmile.classList.add("active");
    emojiNeutral.classList.remove("active");
  }
});

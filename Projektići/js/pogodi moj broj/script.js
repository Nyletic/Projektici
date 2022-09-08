"use strict";

const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const number = document.querySelector(".number");
const highScore = document.querySelector(".highscore");
const again = document.querySelector(".again");

let numberNum = Math.ceil(Math.random() * 20);
let scoreNum = 10;
let highScoreNum = 0;

check.addEventListener("click", function Provjera() {
  const guessValue = Number(guess.value);

  if (scoreNum === 1) {
    message.textContent = "Izgubili ste";
    score.textContent = score - 1;
  } else if (!guessValue) {
    message.textContent = "🛑 Nema broja";
  } else if (guessValue === numberNum) {
    message.textContent = "🎖 Pogodili ste broj";
    number.textContent = numberNum;

    if (scoreNum > highScoreNum) {
      highScoreNum = scoreNum;
      highScore.textContent = highScoreNum;
    }

    check.removeEventListener("click", Provjera);
  } else if (guessValue > numberNum && scoreNum > 0) {
    message.textContent = "Vaš broj je veći od traženog broja";
    scoreNum--;
    score.textContent = scoreNum;
  } else if (guessValue < numberNum && scoreNum > 0) {
    message.textContent = "Vaš broj je manji od traženog broja";
    scoreNum--;
    score.textContent = scoreNum;
  }
});

again.addEventListener("click", () => {
  numberNum = Math.ceil(Math.random() * 20);
  scoreNum = 10;
  message.textContent = "Igra pogađanja";
  score.textContent = scoreNum;
  number.textContent = "?";
  guess.value = "";
  document.querySelector(".body").style.backgroundColor = "#222";
  number.style.width = "15rem";

  check.addEventListener("click", function Provjera() {
    const guessValue = Number(guess.value);

    if (scoreNum === 1) {
      message.textContent = "Izgubili ste";
      score.textContent = score - 1;
    } else if (!guessValue) {
      message.textContent = "🛑 Nema broja";
    } else if (guessValue === numberNum) {
      message.textContent = "🎖 Pogodili ste broj";
      number.textContent = numberNum;

      if (scoreNum > highScoreNum) {
        highScoreNum = scoreNum;
        highScore.textContent = highScoreNum;
      }

      check.removeEventListener("click", Provjera);
    } else if (guessValue > numberNum && scoreNum > 0) {
      message.textContent = "Vaš broj je veći od traženog broja";
      scoreNum--;
      score.textContent = scoreNum;
    } else if (guessValue < numberNum && scoreNum > 0) {
      message.textContent = "Vaš broj je manji od traženog broja";
      scoreNum--;
      score.textContent = scoreNum;
    }
  });
});

const cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
    firstCard.addEventListener("click", handler, true);
    // function handlerTwo(ev) {
    //   ev.stopPropagation();
    //   ev.preventDefault();
    // }
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    firstCard.removeEventListener("click", handler, true);
    // if (firstCard.style.order === secondCard.style.order) {
    //   fail();
    // } else
    checkIt();
  }
}

function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
  document.removeEventListener("click", handler, true);
  //cards.forEach((card) => card.addEventListener("click", flip));
}

function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  document.addEventListener("click", handler, true);

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
    //cards.forEach((card) => card.removeEventListener("click", flip));
  }, 1000);
}

const shuffleCards = () => {
  cards.forEach((card) => {
    var place = Math.floor(Math.random() * 16);
    card.style.order = place;
  });
};

window.addEventListener("load", shuffleCards());

// funkcija za disablanje clickanja
function handler(e) {
  e.stopPropagation();
  e.preventDefault();
}

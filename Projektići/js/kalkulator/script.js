"use strict";

let userInput = document.getElementById("userInput");
let expression = "";

function press(input) {
  expression += input;
  userInput.value = expression;
}

function equal() {
  userInput.value = eval(expression);
}

function erase() {
  userInput.value = "";
  expression = "";
}

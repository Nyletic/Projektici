const toDoItems = document.querySelector(".to-do_lista");
const input = document.querySelector("#input");
const trashIcon = document.querySelector("#trash");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItem();
});

function addItem() {
  let divParent = document.createElement("div");
  let divChild = document.createElement("div");
  let checkIcon = document.createElement("i");
  let trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "<div>";
  checkIcon.className = "fa-solid fa-square-check";
  checkIcon.style.color = "lightgrey";
  checkIcon.addEventListener("click", () => {
    this.style.color = this.style.color === "green" ? "lightgrey" : "green";
  });

  divChild.appendChild(checkIcon);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });
  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);
  input.value = "";
}

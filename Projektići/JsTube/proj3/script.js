// array of objects
const courses = [
    {
        name: "React",
        price: "2.5",
    },
    
    {
        name: "Angular",
        price: "2.7"
    },

    {
        name: "Something in Js",
        price: "2.2"
    },

    {
        name: "Some Js topic",
        price: "2.69"
    }];

/* <ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
      </ul> */

function generateList(){
    const ul = document.querySelector(".list-group");
    // i want to reset everything in ul so it does not repeat itself and generate some unnecessary stuff
    // so this is a quick fix for it
    ul.innerHTML = "";

    courses.forEach((course) => {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.appendChild(document.createTextNode(course.name));
        var span = document.createElement("span");
        span.classList.add("float-right");
        span.appendChild(document.createTextNode(course.price));

        li.appendChild(span);
        ul.appendChild(li);
    });
}

//generateList();

window.addEventListener("load", generateList());

var button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
})

var button2 = document.querySelector(".btn-primary");

button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateList();
})

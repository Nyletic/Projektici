"use strict";

let index = 0;

let show_slide = (i) => {
  index += i;

  const images = document.getElementsByClassName("image");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  if (index > images.length - 1) {
    index = 0;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  images[index].style.display = "block";
  dots[index].className += " active";
};

window.addEventListener("load", show_slide(index));

// 04bb2iR5

// XH4CEdxNHEqk4n2

"use strict";

let element = document.querySelector("div.menuside");
let target = document.querySelector("div.hamburger");

if (mediaQuery.matches) {
  target.addEventListener("click", () => {
    element.classList.toggle("clipped");
  });
}

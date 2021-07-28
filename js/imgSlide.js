"use strict";

let charImg = document.querySelector("#galaxyOps");
const aMediaQuery = window.matchMedia("(min-width: 1008px)");

if (aMediaQuery.matches) {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    let windowWidth = window.innerWidth;
    charImg.style.width = `${(value / windowWidth) * 200}%`;
    charImg.style.opacity = `${value / 600}`;
  });
}

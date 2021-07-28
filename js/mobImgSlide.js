"use strict";

if (mediaQuery.matches) {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  window.addEventListener("scroll", function () {
    let valueY = window.scrollY;
    let needValue = (((valueY / windowHeight) * windowWidth) / 8 / 100) * 8;
    if (valueY > 400) {
      document.querySelector("#galaxyOps").style.left = `${needValue}%`;
    }
  });
}

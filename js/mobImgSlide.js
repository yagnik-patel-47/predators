"use strict";

if (mediaQuery.matches) {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  window.addEventListener("scroll", function () {
    let left = -300;
    let valueY = window.scrollY;
    let needValue = (((valueY / windowHeight) * windowWidth) / 40) * 16;
    console.log(needValue);
    if (valueY > 400) {
      document.querySelector("#galaxyOps").style.left = `${left + needValue}px`;
    }
  });
}

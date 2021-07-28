"use strict";

const mediaQuery = window.matchMedia("(max-width: 600px)");

let dropdown = () => {
  $("nav").addClass("show-menu");
  $("nav").css("grid-template-rows", "var(--header-height) 30vh");
  // $("nav").css("transition", "all, 0.5s");
  $(".menuside").css({
    visibility: "visible",
    opacity: "1",
    "pointer-events": "all",
  });
};

let pickup = () => {
  $("nav").css("grid-template-rows", "var(--header-height)");
  $(".menuside").css({
    visibility: "hidden",
    opacity: "0",
    "pointer-events": "none",
  });
  $("nav").removeClass("show-menu");
};

let linkAction = () => {
  let navigationMenu = document.querySelector("nav");
  navigationMenu.classList.remove("show-menu");
  let menulinks = document.querySelector(".menuside");
  menulinks.classList.remove("clipped");
};

if (mediaQuery.matches) {
  var showMenu = () => {
    if ($("nav").attr("class") == "") {
      dropdown();
    } else if ($("nav").attr("class") == "show-menu") {
      pickup();
    }
  };
  let navLinks = document.querySelectorAll(".navLink");
  navLinks.forEach((n) => n.addEventListener("click", linkAction));
}

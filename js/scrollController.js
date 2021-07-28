"use strict";

(function ($, window) {
  var adjustAnchor = function () {
    var $anchor = $(":target"),
      fixedElementHeight = 90,
      windowHeight = window.innerHeight,
      mobileFixedHeight = windowHeight / 8.5;

    if ($anchor.length > 0) {
      $("html, body").stop();
      if (aMediaQuery.matches) {
        $("html, body").animate(
          {
            scrollTop: $anchor.offset().top - fixedElementHeight,
          },
          300
        );
      } else if (mediaQuery.matches) {
        $("html, body").animate(
          {
            scrollTop: $anchor.offset().top - mobileFixedHeight,
          },
          300
        );
      }
    }
  };

  $(window).on("hashchange load", function () {
    adjustAnchor();
  });
})(jQuery, window);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollValueY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // const sectionTop = current.offsetTop - 130;
    const sectionId = current.getAttribute("id");

    if (mediaQuery.matches) {
      const sectionTop = current.offsetTop - 280;
      if (
        scrollValueY > sectionTop &&
        scrollValueY <= sectionTop + sectionHeight
      ) {
        document
          .querySelector(".menuside a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".menuside a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    } else if (aMediaQuery.matches) {
      const sectionTop = current.offsetTop - 130;
      if (
        scrollValueY > sectionTop &&
        scrollValueY <= sectionTop + sectionHeight
      ) {
        document
          .querySelector(".menuside a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".menuside a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

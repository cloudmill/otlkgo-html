import { removeBurger, removeActive, removeOverlay } from "scripts/header-menu.js";



let offsetScroll = 100;

if (window.screen.width < 768) {
  offsetScroll = 70;
}

$(function () {
  var hash = document.location.hash;
  if (hash.length > 1 && $(hash).length) {
    $('html, body').animate({
      scrollTop: $(hash).offset().top - offsetScroll
    }, 700);
  }
});

document.addEventListener('DOMContentLoaded', () => {

  const allLinks = document.querySelectorAll('a');

  allLinks.forEach(btn => {
    btn.addEventListener('click', () => {
      $(function () {
        var hash = document.location.hash;
        if (hash.length > 1 && $(hash).length) {
          $('html, body').animate({
            scrollTop: $(hash).offset().top - offsetScroll
          }, 500);
        }
      });
      removeBurger();
      removeActive();
      removeOverlay();
    });
  });
});


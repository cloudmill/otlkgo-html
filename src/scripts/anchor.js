import { removeBurger, removeActive, removeOverlay } from "scripts/header-menu.js";



let offsetScroll = 100;

if (window.screen.width < 768) {
  offsetScroll = 70;
}

setTimeout(() => {
  $(function () {
    var hash = document.location.hash;
    if (hash.length > 1 && $(hash).length) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offsetScroll
      }, 100);
    }
  });
}, 600)


document.addEventListener('DOMContentLoaded', () => {

  // const allLinks = document.querySelectorAll('a');

  const allLinkTitles = document.querySelectorAll('.header-sub__item-title')
  const allLinkSubTitles = document.querySelectorAll('.header-sub__item-subsection')
  const reportHeroLinks = document.querySelectorAll('.report-hero__list-item')


  allLinkTitles.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
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
      }, 100)
      
    });
  });

  reportHeroLinks.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
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
      }, 500)
      
    });
  });

  allLinkSubTitles.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(() => {
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
      }, 100)

    });
  });
});


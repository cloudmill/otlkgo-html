import { removeBurger, removeActive, removeOverlay } from "scripts/header-menu.js"

$(function() {
  var hash = document.location.hash;
  if (hash.length>1 && $(hash).length){ 
      $('html, body').animate({
          scrollTop: $(hash).offset().top-100
      }, 700);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  
  const allLinks = document.querySelectorAll('a')
  
  allLinks.forEach(btn  => {
    btn.addEventListener('click', () => {
      $(function() {
        var hash = document.location.hash;
        if (hash.length>1 && $(hash).length){ 
            $('html, body').animate({
                scrollTop: $(hash).offset().top-100
            }, 500);
        }
      });
      removeBurger()
      removeActive()
      removeOverlay()
    })
  })
})


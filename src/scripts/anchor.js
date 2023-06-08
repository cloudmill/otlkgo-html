import { removeBurger, removeActive, removeOverlay } from "scripts/header-menu.js"

$(function() {
  var hash = document.location.hash;
  if (hash.length>1 && $(hash).length){ 
    console.log($(hash).offset().top)
      $('html, body').animate({
          scrollTop: $(hash).offset().top-100
      }, 100);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  
  
  const allLinks = document.querySelectorAll('a')
  
  allLinks.forEach(btn  => {
    btn.addEventListener('click', () => {
      $(function() {
        var hash = document.location.hash;
        console.log($(hash).offset().top)
        if (hash.length>1 && $(hash).length){ 
            $('html, body').animate({
                scrollTop: $(hash).offset().top-100
            }, 0);
        }
      });
      removeBurger()
      removeActive()
      removeOverlay()
    })
  })
})


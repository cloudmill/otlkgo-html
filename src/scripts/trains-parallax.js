import { mediaQuery } from "./mediaQueries"

document.addEventListener('DOMContentLoaded', () => {
  const parallaxContainer = document.querySelector('[data-parallax-container]')
  const parallaxImg = document.querySelector('[data-parallax-img]');

  const windowSize = window.screen.width;
  
  const parallaxScale = 1920/windowSize;

  
  

  if(parallaxContainer){

    $(window).on('scroll', function() {
      let windowScroll = window.scrollY;
  
      const parallaxStart = parallaxContainer.offsetTop;

      if (window.screen.width > 1024){
        if(windowScroll > parallaxStart - 1800){
          console.log(parallaxImg.style)
          let parallaxScroll = ((windowScroll - parallaxStart))/5 + 175 * parallaxScale + 'px';
          parallaxImg.style.transform = `translate3D(0px, ${parallaxScroll}, 0px)`;

        }
      } 

    })
  }

})
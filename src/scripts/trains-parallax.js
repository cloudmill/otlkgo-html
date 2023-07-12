import { mediaQuery } from "./mediaQueries"

document.addEventListener('DOMContentLoaded', () => {
  const parallaxContainer = document.querySelector('[data-parallax-container]')
  const parallaxImg = document.querySelector('[data-parallax-img]');

  const windowSize = window.screen.width;
  
  const parallaxScale = 1920/windowSize;

  
  

  if(parallaxContainer){

    window.addEventListener('scroll', () => {
      let windowScroll = window.scrollY;
  
      const parallaxStart = parallaxContainer.offsetTop;

      if (window.screen.width > 2000){
        if(windowScroll > parallaxStart - 1800){
          let parallaxScroll = ((windowScroll - parallaxStart))/5 - 50 * parallaxScale + 'px';
          parallaxImg.style.bottom = parallaxScroll;
        }
      } else if (window.screen.width < 1500){
        if(windowScroll > parallaxStart - 1300){
          let parallaxScroll = ((windowScroll - parallaxStart))/5 * parallaxScale + 75 + 'px';
          parallaxImg.style.bottom = parallaxScroll;
        }
      } else {
        if(windowScroll > parallaxStart - 1300){
          let parallaxScroll = ((windowScroll - parallaxStart))/5 * parallaxScale + 'px';
          parallaxImg.style.bottom = parallaxScroll;
        }
      }
    })
  }

})
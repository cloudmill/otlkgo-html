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
  
      if(windowScroll > parallaxStart - 900){
        let parallaxScroll = ((windowScroll - parallaxStart))/2 * parallaxScale + 'px';

        if (windowSize < 1540){
        }
        
        parallaxImg.style.bottom = parallaxScroll;
      }
    })
  }

})
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
  
      if(windowScroll > parallaxStart - 1300){
        let parallaxScroll = ((windowScroll - parallaxStart))/3 * parallaxScale + 'px';

        
        parallaxImg.style.bottom = parallaxScroll;
      }
    })
  }

})
import { mediaQuery } from "./mediaQueries"

document.addEventListener('DOMContentLoaded', () => {
  const parallaxContainer = document.querySelector('[data-parallax-container]')
  const parallaxImg = document.querySelector('[data-parallax-img]');

  if(parallaxContainer){

    window.addEventListener('scroll', () => {
      let windowScroll = window.scrollY;
  
      const parallaxStart = parallaxContainer.offsetTop;
  
      if(windowScroll > parallaxStart - 900){
        let scroll = ((windowScroll - parallaxStart) + 75)/2 + 'px';
        parallaxImg.style.bottom = scroll;
      }
    })
  }

})
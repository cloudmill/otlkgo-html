// import simpleParallax from 'simple-parallax-js';

// document.addEventListener('DOMContentLoaded', () => {
//   const image = document.querySelector('.thumbnail');
//   new simpleParallax(image, {
//     scale: 1.0,
//     transition: 'cubic-bezier(0,0,0,1)'
//   });
  
// })

document.addEventListener('DOMContentLoaded', () => {
  const parallaxContainer = document.querySelector('.formation-train')
  const parallaxOffset = parallaxContainer.offsetTop;
  const parallaxImg = document.querySelector('.formation-train__parallax')
  const windowHeight = window.screen.height;

  if (parallaxContainer && window.screen.width > 1024){
    window.addEventListener('scroll', () => {
      let windowScroll = window.scrollY;
  
      if (windowScroll > (parallaxOffset - windowHeight)){
        let sumScroll = windowScroll - parallaxOffset + 'px'
        parallaxImg.style.transform = `translateY(${sumScroll})`
        
        if (window.screen.width > 1660){
          parallaxImg.style.top = ((windowScroll - parallaxOffset)/10 - 300 + 'px')
        } else {
          parallaxImg.style.top = ((windowScroll - parallaxOffset)/20 - 300 + 'px')
        }
      }
    })
  }

})
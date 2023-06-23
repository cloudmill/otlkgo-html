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

  console.log(parallaxOffset)
  const windowHeight = window.screen.height;

  window.addEventListener('scroll', () => {
    let windowScroll = window.scrollY;

    if (windowScroll > (parallaxOffset - windowHeight)){
      let sumScroll = windowScroll - parallaxOffset + 'px'
      console.log(sumScroll)
      parallaxImg.style.transofrm = `translate-y(${sumScroll})`
    }
    
  })
})
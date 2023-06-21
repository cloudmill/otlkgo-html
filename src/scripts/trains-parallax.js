document.addEventListener('DOMContentLoaded', () => {
  const parallaxContainer = document.querySelector('[data-parallax-container]')
  const parallaxImg = document.querySelector('[data-parallax-img]');


  window.addEventListener('scroll', () => {
    let windowScroll = window.scrollY;

    const parallaxStart = parallaxContainer.offsetTop;

    if(windowScroll > parallaxStart - 900){
      console.log('done')
      parallaxImg.style.bottom = (windowScroll - parallaxStart) + 75 + 'px';
    }
  })
})
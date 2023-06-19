import AOS from 'aos';
import * as parallax from './parallax'

document.body.classList.add("body--hidden");

window.addEventListener('load', () => {
  document.body.classList.remove("body--notransition");
  const preloader = document.querySelector(".preloader")

  if (preloader) {
    // const video = document.querySelector('[data-main-video]')
    const DELAY = 1800
    preloader.classList.add('preloader--hidden')

    setTimeout(() => {
      document.body.classList.remove("body--hidden");
      window.scrollTo(0, 0);
      // video.setAttribute("autoplay", "");
      // video.load();

      preloader.classList.add('preloader--hide')
      // video.addEventListener('canplaythrough', () => {
      //   AOS.init({
      //     once: true,
      //     offset: 100,
      //     duration: 1000,
      //   });
      //   parallax.start()
      // const ecologyVideo = document.querySelector('[data-ecology-video]')
      // ecologyVideo.setAttribute("autoplay", "");
      // ecologyVideo.load()
      // })
    }, DELAY);
  } else {
    document.body.classList.remove("body--hidden");

    AOS.init({
      once: true,
      offset: 100,
      duration: 1000,
    });
  }
})
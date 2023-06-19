import AOS from 'aos';
import * as parallax from './parallax'

document.body.classList.add("body--hidden");

window.addEventListener('load', () => {
  const preloader = document.querySelector(".preloader")
  document.body.classList.remove("body--notransition");

  if (preloader) {
    const DELAY = 1800

    preloader.classList.add('preloader--hidden')


    setTimeout(() => {
      document.body.classList.remove("body--hidden");
      window.scrollTo(0, 0);
      preloader.classList.add('preloader--hide')

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
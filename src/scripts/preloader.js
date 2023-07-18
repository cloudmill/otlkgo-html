import AOS from 'aos';
import 'aos/dist/aos.css';

document.body.classList.add("body--hidden");

window.addEventListener('load', () => {
  const preloader = document.querySelector(".preloader")
  document.body.classList.remove("body--notransition");
  document.body.style.opacity = 1
  if (preloader) {
    const DELAY = 1800

    preloader.classList.add('preloader--hidden')


    setTimeout(() => {
      document.body.classList.remove("body--hidden");
      preloader.classList.add('preloader--hide')

    }, DELAY);
    AOS.init({
      once: true,
      offset: 100,
      duration: 1000,
    });
  } else {
    document.body.classList.remove("body--hidden");

    AOS.init({
      once: true,
      offset: 100,
      duration: 1000,
    });
  }


})
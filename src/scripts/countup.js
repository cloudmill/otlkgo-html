import { CountUp } from 'countup.js';

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let options = {
  separator: ' ',
};

function startCountUpOnScroll() {
  const countUpElements = document.querySelectorAll('.countup-element');
  countUpElements.forEach((element) => {
    if (!element.classList.contains('countup-started') && isElementInViewport(element)) {
      const countupValue = element.getAttribute('data-countup');
      const endValue = parseFloat(countupValue);
      const suffix = element.hasAttribute('data-countup-suffix')
        ? element.getAttribute('data-countup-suffix')
        : '';
      const prefix = element.hasAttribute('data-countup-prefix')
        ? element.getAttribute('data-countup-prefix')
        : '';

      const countUp = new CountUp(element, endValue, {
        ...options,
        suffix,
        prefix,
      });

      const targetElement = document.querySelector(`.number-animate-${countupValue}`);
      if (targetElement) {
        setTimeout(() => {
          targetElement.classList.add('fade-up');
        }, 2000);
      }

      if (!countUp.error) {
        countUp.start();
        element.classList.add('countup-started');
      } else {
        console.error(countUp.error);
      }
    }
  });
}

window.addEventListener('beforeprint', function () {
  const countUpElements = document.querySelectorAll('.countup-element');
  countUpElements.forEach((element) => {
    const countupValue = element.getAttribute('data-countup');
    const endValue = parseFloat(countupValue);
    const suffix = element.hasAttribute('data-countup-suffix')
      ? element.getAttribute('data-countup-suffix')
      : '';
    const prefix = !element.hasAttribute('data-countup-prefix')
      ? ''
      : element.getAttribute('data-countup-prefix');

    const countUp = new CountUp(element, endValue, {
      ...options,
      suffix,
      prefix,
    });
    const targetElement = document.querySelector(
      `.number-animate-${countupValue}`
    );

    if (targetElement) {
      targetElement.classList.add('fade-up');
    }
    if (!countUp.error) {
      countUp.start();
      element.setAttribute('data-countup-started', 'true');
    } else {
      console.error(countUp.error);
    }
  });
});
window.addEventListener('DOMContentLoaded', startCountUpOnScroll);
window.addEventListener('scroll', startCountUpOnScroll);

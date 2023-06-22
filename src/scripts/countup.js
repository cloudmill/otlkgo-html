import { CountUp } from 'countup.js';

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let options = {
  separator: ' ',
}
function startCountUpOnScroll() {
  const countUpElements = document.querySelectorAll('[data-countup]');

  countUpElements.forEach(element => {
    if (!element.hasAttribute('data-countup-started') && isElementInViewport(element)) {
      const countupValue = element.getAttribute('data-countup');
      const endValue = parseFloat(countupValue);
      const suffix = element.hasAttribute('data-countup-suffix') ? '%' : '';
      const prefix = element.hasAttribute('data-countup-prefix') ? '+' : '';
      const mines = element.hasAttribute('data-countup-mines') ? '-' : '';
      const dollar = element.hasAttribute('data-countup-prefdollar') ? '$' : '';

      const countUp = new CountUp(element, endValue, { ...options, suffix, mines, dollar, prefix });

      if (!countUp.error) {
        countUp.start();
        element.setAttribute('data-countup-started', 'true');
      } else {
        console.error(countUp.error);
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', startCountUpOnScroll);
window.addEventListener('scroll', startCountUpOnScroll);


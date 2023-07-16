import { CountUp } from 'countup.js';

let options = {
  separator: ' ',
};

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

function startCountUpOnScroll() {
  const countUpElements = document.querySelectorAll('.countup-element');
  countUpElements.forEach((element) => {
    if (
      !element.classList.contains('countup-started') &&
      isElementInViewport(element)
    ) {
      const countupValue = element.getAttribute('data-countup');
      const endValue = parseFloat(countupValue);
      const suffix = element.getAttribute('data-countup-suffix') || '';
      const prefix = element.getAttribute('data-countup-prefix') || '';
      const separator = element.getAttribute('data-countup-separator') || '';

      if (separator) {
        options.separator = '';
      }

      const countUp = new CountUp(element, endValue, {
        ...options,
        suffix,
        prefix,
      });

      const targetElement = document.querySelector(
        `.number-animate-${countupValue}`
      );

      if (targetElement) {
        const targetElements = document.querySelectorAll(
          `.number-animate-${countupValue}`
        );
        targetElements.forEach((targetEl) => {
          if (!targetEl.classList.contains('animate-started')) {
            targetEl.classList.add('animate-started');
            setTimeout(() => {
              targetEl.classList.add('fade-up');
            }, 2000);
          }
        });
      }

      if (!countUp.error) {
        countUp.start();
        element.classList.add('countup-started');
      } else {
        console.error(countUp.error);
      }
      options.separator = ' ';
    }
  });
}

function updateCountUpOnPrint() {
  const countUpElements = document.querySelectorAll('.countup-element');
  countUpElements.forEach((element) => {
    const countupValue = element.getAttribute('data-countup');
    const suffix = element.getAttribute('data-countup-suffix') || '';
    const prefix = element.getAttribute('data-countup-prefix') || '';

    const inner = `${prefix}${countupValue}${suffix}`;
    element.innerHTML = inner;

    const targetElement = document.querySelector(
      `.number-animate-${countupValue}`
    );
    if (targetElement) {
      targetElement.classList.add('fade-up');
    }
  });
}

window.addEventListener('DOMContentLoaded', startCountUpOnScroll);
window.addEventListener('scroll', startCountUpOnScroll);
window.addEventListener('beforeprint', updateCountUpOnPrint);

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export const fancybox = () => {
  const buttons = document.querySelectorAll('.fancy-button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let href = button.getAttribute('data-fancy')
      Fancybox.show([{
        src: href,
      }], {
        closeButton: true,
        Thumbs: false,
        Toolbar: false,
      });
    });
  });
};

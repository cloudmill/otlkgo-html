import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export const fancybox = () => {
  const buttons = document.querySelectorAll('.fancy-button');

  buttons.forEach((button) => {
    const img = button.getAttribute('fancy-modal');
    const fancyModal = document.querySelector(`[data-fancy-img="${img}"]`);

    Fancybox.bind(fancyModal, {
      closeButton: true,
      Thumbs: false,
      Toolbar: true,
      // on: {
      //   loading: (fancybox) => {
      //     fancybox.container.classList.add('my-custom-container');
      //     fancybox.container.style.opacity = 0;
      //     setTimeout(() => {
      //       fancybox.container.style.opacity = 1;
      //     }, 350);
      //   },
      // },
    });

    button.addEventListener('click', () => {
      Fancybox.show([{
        src: fancyModal.getAttribute('src'),
        caption: fancyModal.getAttribute('alt')
      }], {
        closeButton: true,
        Thumbs: false,
        Toolbar: false,
      });
    });
  });
};

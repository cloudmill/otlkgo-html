import './styles/app.scss';

import './scripts/swiper';
import './scripts/select2';

import './scripts/header-menu';
import './scripts/anchor';
import './scripts/preloader';
import './scripts/mediaQueries';
import './scripts/intersection';
import './scripts/aos';
import './scripts/countup';
import './scripts/trains-parallax';
import './scripts/parallax-containers';
import './scripts/fancyapps';
import 'lightbox2/dist/js/lightbox';
import 'lightbox2/dist/css/lightbox.css';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]', {
    closeButton: true,
    Thumbs: false,
    Toolbar: false,
    on: {
      loading: (fancybox) => {
        console.info('first');
        fancybox.container.classList.add('my-custom-container');
        fancybox.container.style.opacity = 0;
        setTimeout(() => {
          fancybox.container.style.opacity = 1;
        }, 350);
      },
    },
  });
});

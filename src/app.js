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
import './scripts/print-button';
import './scripts/fancyapps';
import './scripts/history';
import './scripts/form-components';
import { fancybox } from './scripts/fancybox';
import { modal } from './scripts/modal';

document.addEventListener('DOMContentLoaded', () => {
  fancybox();
  modal();
});

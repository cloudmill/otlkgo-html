import './styles/app.scss';

import './scripts/header-menu';
import './scripts/history';
import './scripts/anchor';
import './scripts/preloader';
import './scripts/mediaQueries';
import './scripts/intersection';
import './scripts/countup';
import './scripts/print-button';
import './scripts/form-components';
import { fancybox } from './scripts/fancybox';
import { modal } from './scripts/modal';

document.addEventListener('DOMContentLoaded', () => {
  fancybox();
  modal();
});

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const modal = () => {
  const modalBtn = document.querySelector('[data-modal]');
  const modal = document.querySelector('.modal ');
  const overlay = document.querySelector('.modal__overlay');
  const closeBtn = document.querySelector('.modal__close');

  if (!modalBtn) return;

  modalBtn.addEventListener('click', () => {
    disablePageScroll();
    modal.classList.add('--active');
  });

  function closeModal() {
    enablePageScroll();
    modal.classList.remove('--active');
  }

  overlay.addEventListener('click', () => {
    closeModal();
  });
  closeBtn.addEventListener('click', () => {
    closeModal();
  });
};

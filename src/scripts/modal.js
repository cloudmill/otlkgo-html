import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export const modal = () => {
  const modalBtn = document.querySelector('[data-modal]');
  const modal = document.querySelector('.modal ');
  const overlay = document.querySelector('.modal__overlay');
  const closeBtn = document.querySelector('.modal__close');
  const exitBtn = document.querySelector('.modal-submit__button')
  if (!modalBtn) return;

  modalBtn.addEventListener('click', () => {
    disablePageScroll();
    modal.classList.add('--active');
  });

  exitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    closeModal();
  })
  modal.addEventListener('submit', (e) => {
    e.preventDefault()
    modal.classList.add('--submit')
  })
  function closeModal() {
    enablePageScroll();
    modal.classList.remove('--active');
    setTimeout(() => {
      modal.classList.remove('--submit');

    }, 100)
  }

  overlay.addEventListener('click', () => {
    closeModal();
  });

  closeBtn.addEventListener('click', () => {
    closeModal();
  });
};

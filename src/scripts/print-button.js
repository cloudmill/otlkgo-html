document.addEventListener('DOMContentLoaded', () =>{
  const printBtn = document.querySelector('[data-print-button]')

  printBtn.addEventListener('click', () => {
    window.print();
  })
})
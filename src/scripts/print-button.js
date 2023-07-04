document.addEventListener('DOMContentLoaded', () =>{
  const printBtn = document.querySelector('[data-print-button]')
  if (printBtn){
    printBtn.addEventListener('click', () => {
      window.print();
    })
  }
})
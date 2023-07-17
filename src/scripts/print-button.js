


window.addEventListener('beforeprint', () => {
  isSafari()
  const body = document.querySelector('body')

  if (isSafari()) {
    body.classList.add('print-ios')
  } else {
    body.classList.add('print')
  }

})

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}









document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.querySelector('[data-print-button]')
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    })
  }
})

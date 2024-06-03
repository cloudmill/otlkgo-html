
export const select = () => {
  const selects = $('.select')
  if (selects.length === 0) return

  selects.on('click', function () {
    selects.not(this).removeClass('--active')
    $(this).toggleClass('--active')
  })

  selects.find('.select__list li').on('click', function (e) {
    e.stopPropagation() // блокируем всплытие события
    const input = $(this).closest('.select').find('input')
    let text = $(this).find('p').text();
    // const text = $(this).text()
    input.trigger('input')
    input.attr('value', text)
    $(this).closest('.select').removeClass('--active')
  })

  // Отслеживаем клики вне списка и закрываем список, если он открыт
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select.--active').removeClass('--active')
    }
  })
}
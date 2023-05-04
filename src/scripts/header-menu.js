document.addEventListener('DOMContentLoaded', () => {
  $('[data-header-burger]').on('click', () => {
    if (!$('[data-header-burger]').hasClass('active')){
      $('[data-header-menu]').addClass('active')
      $('[data-header-burger]').addClass('active')
    } else {
      removeBurger()
      removeActive()
    }
  })

  $('[data-header-item]').on('click', function() {
    const id = $(this).data('header-item')
    const subMenu = $(`[data-header-sub="${id}"]`)
    const current = $('.header-menu__item.active').data('header-item')
    
      if (!$(this).hasClass('active')){
        removeActive()
        subMenu.addClass('active')
        $(this).addClass('active')
      } else {
        removeActive()
      }
  })

  function removeActive (){
    $('.header-menu__item.active').removeClass('active')
    $('.header-sub.active').removeClass('active')
  }

  function removeBurger(){
    $('[data-header-menu]').removeClass('active')
    $('[data-header-burger]').removeClass('active')
  }
})
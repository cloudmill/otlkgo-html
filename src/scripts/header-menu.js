export function removeActive (){
  $('.header-menu__item.active').removeClass('active')
  $('.header-sub.active').removeClass('active')
}

export function removeBurger(){
  $('[data-header-menu]').removeClass('active')
  $('[data-header-burger]').removeClass('active')
}

export function removeOverlay(){
  $('.overlay-header').removeClass('active')
  $('.body').removeClass('overlay')
}

document.addEventListener('DOMContentLoaded', () => {
  const headerSearchBtn = document.querySelector('[data-header-search]')
  const headerSearchContainer = document.querySelector('[data-search-container]')

  $('[data-header-burger]').on('click', () => {
    if (!$('[data-header-burger]').hasClass('active')){
      $('[data-header-menu]').addClass('active')
      $('[data-header-burger]').addClass('active')
      addOverlay()
    } else {
      removeBurger()
      removeActive()
      removeOverlay()
    }
    if ($(headerSearchBtn).hasClass('active')){
      toggleSearchActive()
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

  function addOverlay(){
    $('.overlay-header').addClass('active')
    $('.body').addClass('overlay')
  }

  function removeOverlay(){
    $('.overlay-header').removeClass('active')
    $('.body').removeClass('overlay')
    toggleSearchActive()
  }

  $('.overlay-header').on('click', function(){
    removeActive()
    removeBurger()
    removeOverlay()
  })


  $('[data-sub-back]').on('click', function(){
    removeActive()
  })

  

  $(headerSearchBtn).on('click', function() {
    if (!headerSearchBtn.classList.contains('active')){
      toggleSearchActive()
      addOverlay()
      removeActive()
      removeBurger()
    } else {
      toggleSearchActive()
      removeOverlay()
    }
  })

  function toggleSearchActive(){
    $(headerSearchBtn).toggleClass('active')
    $(headerSearchContainer).toggleClass('active')
  }

})
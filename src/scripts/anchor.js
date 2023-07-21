$(document).ready(function () {
  function scrollToElementWithOffset(targetElement) {
    if (targetElement.length) {
      const offset = targetElement.offset().top - 130;
      $('html, body').animate(
        {
          scrollTop: offset,
        },
        500
      );
    }
  }

  function handleHashLinkClick(event) {
    event.preventDefault();

    const target = $(this).attr('href');
    const targetElement = $(target);

    scrollToElementWithOffset(targetElement);
  }

  const hash = window.location.hash;
  if (hash) {
    const targetElement = $(hash);
    scrollToElementWithOffset(targetElement);
  }

  $('a[href^="#"]').on('click', handleHashLinkClick);
});

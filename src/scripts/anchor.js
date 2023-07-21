document.addEventListener("DOMContentLoaded", function () {
  // Получаем все ссылки с атрибутом href, начинающимся с #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  // Получаем значение из localStorage для расстояния прокрутки
  let scrollOffsetValue = parseInt(localStorage.getItem("scrollOffsetValue")) || 200;

  // Обрабатываем клик по каждой якорной ссылке
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      // Отменяем стандартное поведение ссылки
      event.preventDefault();

      // Получаем элемент, к которому ведет якорь
      const targetElement = document.querySelector(link.getAttribute("href"));

      // Если элемент найден, выполняем прокрутку к нему
      if (targetElement) {
        // Вычисляем позицию элемента относительно верхней границы документа
        const targetPosition = targetElement.getBoundingClientRect().top;

        // Вычисляем позицию элемента относительно верхней границы окна просмотра
        const offsetPosition = targetPosition + window.pageYOffset;

        // Выполняем плавную прокрутку к элементу с учетом отступа
        window.scroll({
          top: offsetPosition - scrollOffsetValue,
          behavior: "smooth"
        });
      }
    });
  });

  // При загрузке страницы, учитываем якорь, если он присутствует в URL
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = targetPosition + window.pageYOffset;
      window.scroll({
        top: offsetPosition - scrollOffsetValue,
        behavior: "smooth"
      });
    }
  }

  // Сохраняем значение scrollOffsetValue в localStorage при изменении
  window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollOffsetValue", scrollOffsetValue.toString());
  });
});

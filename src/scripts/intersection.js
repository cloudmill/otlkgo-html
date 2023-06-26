document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.video-play');

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.8 && !entry.target.dataset.played) {
        entry.target.play();
        entry.target.dataset.played = true;

        const dataValue = entry.target.getAttribute('data-svg');
        const targetSvg = document.querySelectorAll(`.video-play-${dataValue}`);
        setTimeout(() => {

          targetSvg.forEach(e => {
            e.classList.add('fade-up')
          })

        }, 1300);
      }
    });
  }, { threshold: [0.8] });

  for (const item of videos) {
    if (!item.dataset.played) {
      observer.observe(item);
    }
  }
});

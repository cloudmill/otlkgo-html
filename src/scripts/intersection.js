document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('#my-video');

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.8 && !entry.target.dataset.played) {
        entry.target.play();
        entry.target.dataset.played = true;
      }
    });
  }, { threshold: [0.8] });

  for (const item of videos) {
    observer.observe(item);
  }
});

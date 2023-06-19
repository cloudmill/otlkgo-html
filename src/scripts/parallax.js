import { mediaQuery } from "./mediaQueries"

class Parallax {
  constructor(element, options) {
    this.root = element
    this.options = {
      start: 1,
      end: Infinity,
      offset: 1,
      speed: 2,
      ...options
    }

    this.scrollHandler()
  }

  scrollHandler() {
    window.addEventListener('scroll', () => {
      this.update()
    })
  }

  getParallax(scrollPos) {
    return scrollPos / 10 * this.options.speed
  }

  setParallax(value) {
    requestAnimationFrame(() => {
      this.root.style.transform = `translateY(${value}px)`;
    })
  }

  update() {
    const scrollPos = window.scrollY

    if (scrollPos > this.options.start &&
      scrollPos < this.options.end) {
      const relativeScrollPos = scrollPos - this.options.start + this.options.offset
      this.setParallax(this.getParallax(relativeScrollPos))
    }
  }

  updateOptions(options) {
    this.options = {
      ...this.options,
      ...options,
    }
  }

  onResize(callback) {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        callback()
      }, 300);
    })
  }
}

const start = () => {
  if (mediaQuery.matches) {
    const parallaxItems = document.querySelectorAll('[data-parallax]')

    parallaxItems.forEach(item => {
      const img = item.querySelector('[data-parallax-img]')
      const start = item.getBoundingClientRect().top - window.innerHeight
      const end = item.getBoundingClientRect().top + item.offsetHeight

      new Parallax(img, {
        start: start,
        end: end,
        speed: -1,
      })
    })
  }
}

export { start, Parallax }
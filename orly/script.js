(function () {
  function initPortfolio() {
    // 1. Manual Carousels with Arrows & Dots
    const carousels = document.querySelectorAll('[data-carousel]');

    carousels.forEach((carousel) => {
      if (carousel.dataset.initialized === 'true') return;
      carousel.dataset.initialized = 'true';

      const slides = Array.from(
        carousel.querySelectorAll('.carousel-track img, .carousel-slide')
      );
      const prevBtn = carousel.querySelector('.carousel-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-btn.next');
      const dotsContainer = carousel.querySelector('.carousel-dots');

      if (slides.length === 0) return;

      let currentIndex = 0;

      // Normalize classes so only slide 0 starts active (even if multiple <img> tags had 'active')
      slides.forEach((slide, idx) => {
        slide.classList.add('carousel-slide');
        slide.classList.toggle('active', idx === 0);
      });

      if (dotsContainer) {
        dotsContainer.innerHTML = '';
      }

      const dots = slides.map((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (idx + 1));
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          goToSlide(idx);
        });
        if (dotsContainer) dotsContainer.appendChild(dot);
        return dot;
      });

      const goToSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, idx) => {
          slide.classList.toggle('active', idx === currentIndex);
        });
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      };

      const nextSlide = () => goToSlide(currentIndex + 1);
      const prevSlide = () => goToSlide(currentIndex - 1);

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          prevSlide();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          nextSlide();
        });
      }
    });

    // 2. Lightbox Modal for Project Thumbnails & Carousel Images
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox && !lightbox.dataset.initialized) {
      lightbox.dataset.initialized = 'true';

      const zoomableImages = document.querySelectorAll(
        '.project-thumb, .carousel-track img, .carousel-slide'
      );

      zoomableImages.forEach((img) => {
        img.addEventListener('click', () => {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || '';
          lightboxCaption.textContent = img.alt || '';
          lightbox.classList.add('open');
          lightbox.setAttribute('aria-hidden', 'false');
        });
      });

      const closeLightbox = () => {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
      };

      if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
      }

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
          closeLightbox();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
  } else {
    initPortfolio();
  }
})();

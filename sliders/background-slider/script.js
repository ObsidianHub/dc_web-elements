const body = document.body,
  slides = document.querySelectorAll('.slide'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next');

let activeSlide = 0;

prevBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

nextBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) =>
    slide.classList.remove('active')
  );

  slides[activeSlide].classList.add('active');
}

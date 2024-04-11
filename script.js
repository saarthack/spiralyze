const swiperContainer = document.querySelector('.swiper-container');
const swipers = document.querySelectorAll('.swiper');
const nextBtn = document.querySelector('.swiper-nextbtn');
const prevBtn = document.querySelector('.swiper-prevbtn');

let currentIndex = 0;

function goToSlide(index) {
  if (index < 0 || index >= swipers.length) {
    return;
  }

  const currentSlide = swipers[currentIndex];
  const nextSlide = swipers[index];

  const translateX = -nextSlide.offsetLeft + (swiperContainer.offsetWidth - nextSlide.offsetWidth) / 2;

  swiperContainer.style.transform = `translateX(${translateX}px)`;
  currentIndex = index;
}

nextBtn.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

const swiperContainer = document.querySelector('.swiper-container');
const swipers = document.querySelectorAll('.swiper');
const nextBtn = document.querySelector('.swiper-nextbtn');
const prevBtn = document.querySelector('.swiper-prevbtn');
const paginationDots = document.querySelectorAll('.pagination-dot');

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

  // Update active pagination dot
  paginationDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

nextBtn.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

paginationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

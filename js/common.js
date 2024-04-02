const hamBtn = document.querySelector('.ham');
const gnb = document.querySelector('.gnb');
const snsList = document.querySelector('.sns_list');
const closeBtn = document.querySelector('.menu_close');

let toggleOn = () => {
  gnb.classList.toggle('on');
  snsList.classList.toggle('on');
  closeBtn.classList.toggle('on');
  hamBtn.classList.toggle('on');
};

hamBtn.addEventListener('click', toggleOn);

// swiper
let articleSlide = new Swiper('.articleSlide', {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: '.atcPg',
    dynamicBullets: true,
  },
  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const hamBtn = document.querySelector('.ham');
const gnb = document.querySelector('.gnb');
const snsList = document.querySelector('.sns_list');
const li = gnb.querySelectorAll('li');

hamBtn.addEventListener('click', (e) => {
  e.preventDefault();
  gnb.classList.toggle('on');
  snsList.classList.toggle('on');
  hamBtn.classList.toggle('on');
  if (hamBtn.classList.contains('on')) {
    hamBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else {
    hamBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

gnb.addEventListener('click', (e) => {
  let closestA = e.target.closest('a');
  let closestLi = e.target.closest('li');
  if (!closestA) return;
  if (closestA.parentElement.parentElement === gnb) {
    e.preventDefault();
  } else {
    li.forEach((el) => {
      el.classList.remove('on');
    });
    gnb.classList.remove('on');
    snsList.classList.remove('on');
  }
  li.forEach((el) => {
    if (el != closestLi || !gnb.classList.contains('on')) {
      el.classList.remove('on');
    }
  });
  if (!gnb.classList.contains('on')) {
    li.forEach((el) => {
      el.classList.remove('on');
      hamBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
      hamBtn.classList.remove('on');
    });
  } else if (e.target == closestLi) {
    return;
  }

  if (closestLi) {
    closestLi.classList.toggle('on');
  }
});

// swiper
let articleSlide = new Swiper('.articleSlide', {
  slidesPerView: 1,
  pagination: {
    el: '.atcPg',
    dynamicBullets: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
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

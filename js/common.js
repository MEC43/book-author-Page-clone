const hamBtn = document.querySelector('.ham');
const gnb = document.querySelector('.gnb');
const snsList = document.querySelector('.sns_list');
const li = gnb.querySelectorAll('li');

hamBtn.addEventListener('click', (e) => {
  gnb.classList.toggle('on');
  snsList.classList.toggle('on');

  if (hamBtn.classList.toggle('on')) {
    document.body.style.overflow = 'hidden';
    hamBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
  } else {
    document.body.style.overflow = 'auto';
    hamBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  li.forEach((e) => {
    if (e.classList.contains('on')) {
      e.classList.remove('on');
    }
  });
});

gnb.addEventListener('click', (e) => {
  const closestA = e.target.closest('a');
  const closestLi = e.target.closest('li');
  const targetLi = e.target == closestLi;
  // const gnbOn = gnb.classList.contains('on');

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
    if (el != e.target.closest('li') || !gnb.classList.contains('on')) {
      el.classList.remove('on');
    }
  });

  if (!gnb.classList.contains('on')) {
    li.forEach((el) => {
      el.classList.remove('on');
    });
    hamBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    hamBtn.classList.remove('on');
    document.body.style.overflow = 'auto';
  } else if (targetLi) {
    return;
  }

  if (closestLi) {
    closestLi.classList.toggle('on');
  }
});

// swiper
let articleSlide = new Swiper('.articleSlide', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.atcPg',
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

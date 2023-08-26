const flipswiper = new Swiper('.flip-swiper', {
  direction: 'horizontal',
  loop: true,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: '.card-next',
    prevEl: '.card-prev',
  },
});

const polswiper = new Swiper('.pol-swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.pol-next',
    prevEl: '.pol-prev',
  },
  centeredSlides: true,
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 10
    },

  }
});


//   git init
//   git add .
//   $ git config --global user.name "John Doe"
// $ git config --global user.email johndoe@example.com
//   git commit -m "First"
//   git branch -M main
//   git remote add origin https://github.com/Begdulla2006/8.git
//   git push -u origin main

//   git add .
//   git commit -m "Second"
//   git push -u origin main
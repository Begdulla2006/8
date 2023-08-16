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




//   git init
//   git add .
//   $ git config --global user.name "John Doe"
// $ git config --global user.email johndoe@example.com
//   git commit -m "First"
//   git branch -M main
//   git remote add origin https://github.com/Begdulla2006/7.git
//   git push -u origin main

//   git add .
//   git commit -m "Second"
//   git push -u origin main
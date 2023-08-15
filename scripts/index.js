document.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.querySelector('.ham');
    const sideMenu = document.querySelector('.sidemenu');
    const overlay = document.querySelector('.overlay');


const swiper = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.reviews__swiper-pagination',
  },
  spaceBetween:40,
  slidesPerView:1,
  navigation: {
    nextEl: '.reviews__swiper-right',
    prevEl: '.reviews__swiper-left',
  },
});

const lettersSwiper = new Swiper('.letters__swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.letters__swiper-pagination',
  },
  spaceBetween:40,
  slidesPerView:1,
  navigation: {
    nextEl: '.letters__swiper-right',
    prevEl: '.letters__swiper-left',
  },
});



    const closeMenuByClickOnOverlay = (e) => {
        if (e.target == overlay) {
            overlay.classList.remove('overlay--active')
            burgerBtn.classList.remove('active');
            document.body.classList.remove('no-scroll');
            sideMenu.classList.remove('sidemenu--active')
        }
    }
    
    sideMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
            overlay.classList.remove('overlay--active')
            document.body.classList.remove('no-scroll');
            sideMenu.classList.remove('sidemenu--active')
            window.removeEventListener('click', closeMenuByClickOnOverlay)
    }))

    burgerBtn.addEventListener('click', () => {
        if (burgerBtn.classList.contains('active')) {
            burgerBtn.classList.remove('active');
            overlay.classList.remove('overlay--active')
            document.body.classList.remove('no-scroll');
            sideMenu.classList.remove('sidemenu--active')
            window.removeEventListener('click', closeMenuByClickOnOverlay)
        } else {
            window.addEventListener('click', closeMenuByClickOnOverlay)
            burgerBtn.classList.add('active');
            overlay.classList.add('overlay--active')
            document.body.classList.add('no-scroll');
            sideMenu.classList.add('sidemenu--active')
        }
    })
   
})
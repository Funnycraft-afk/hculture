const slider = document.querySelector('.swiper-container')
const sliderStar = document.querySelector('.swiper-container-star')


let feedSwiper = new Swiper (slider, {
    slidesPerView: 1,
    spaceBetween: 20,


    breakpoints: {
      1301: {
        slidesPerView: 2
 
      }

    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }

  })

  let starSwiper = new Swiper (sliderStar, {
    slidesPerView: 1,
    spaceBetween: 30,
    slideClass: 'swiper-slide-star',
    wrapperClass: 'swiper-wrapper-star',

    pagination: {
      el: '.swiper-pagination-star',
      type: 'bullets',
      clickable: true,
    }

  })

  // mobile menu

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
  const mobileMenu = document.querySelector('.mobile-menu')
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active')
    mobileMenu.classList.toggle('active')
  })


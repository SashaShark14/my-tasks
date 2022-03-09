
/* burger-menu start */
(function () {
     const burgerItem = document.querySelector('.burger');
     const menu = document.querySelector('.nav');
     const menuClose = document.querySelector('.nav-close');
     const navList = document.querySelector('.nav-list');
     burgerItem.addEventListener('click', () => {
         menu.classList.add('nav-active')
     });
     menuClose.addEventListener('click', () => {
        menu.classList.remove('nav-active')
     });
    navList.addEventListener('click', () => {
        menu.classList.remove('nav-active')
    });
}());

/* burger-menu end */
// let buttonAct = document.querySelectorAll('.button-act')

//     function activeClick (e) {
//       const x = e.clientX
//       const y = e.clientY
    
//       const buttonTop = e.target.offsetTop
//       const buttonLeft = e.target.offsetLeft
    
//       const xInside = x - buttonLeft
//       const yInside = y - buttonTop
    
//       const circle = document.createElement('span')
//       circle.classList.add('circle')
//       circle.style.top = yInside + 'px'
//       circle.style.left = xInside + 'px'
    
//       this.appendChild(circle)
    
//       setTimeout(() => circle.remove(), 500)
//     }
    
//     buttonAct.forEach( item => item.addEventListener('click', activeClick))
/* portfolio start */

 
const portfolioImages = document.querySelectorAll('.portfolio-img')  
const portfolioItems = document.querySelector('.portfolio-items')


const portfolioBtn = document.querySelector('.winter-button')
portfolioBtn.addEventListener('click', () => {
    // portfolioItems.classList.add('portfolio-items-active')
   portfolioImages.forEach((img, index) => img.src = `./assets/part3-img/winter/${index + 1}.jpg`);
   
     });

 const portfolioSprBtn = document.querySelector('.spring-button');
 portfolioSprBtn.addEventListener('click', () => {
//     portfolioItems.classList.add('portfolio-items-active')
   portfolioImages.forEach((img, index) => img.src = `./assets/part3-img/spring/${index + 1}.jpg`);
     });

 const portfolioSumBtn = document.querySelector('.summer-button');
portfolioSumBtn.addEventListener('click', () => {
//     portfolioItems.classList.add('portfolio-items-active')
   portfolioImages.forEach((img, index) => img.src = `./assets/part3-img/summer/${index + 1}.jpg`);
     });

 const portfolioAutBtn = document.querySelector('.autumn-button');
portfolioAutBtn.addEventListener('click', () => {
//     portfolioItems.classList.add('portfolio-items-active')
   portfolioImages.forEach((img, index) => img.src = `./assets/part3-img/autumn/${index + 1}.jpg`);
     });

     const seasons = ['winter', 'spring', 'summer', 'autumn'];

    seasons.forEach(item => {
        function preloadSummerImages() {
            for(let i = 1; i <= 6; i++) {
              const img = new Image();
              img.src = `./assets/part3-img/${item}/${i}.jpg`;
            }
          }
          preloadSummerImages();
    })

     /* portfolio end */
  
   /* active button start */
   const portfolioAllBtn = document.querySelector('.portfolio-buttons') 
 
    portfolioAllBtn.addEventListener('click', function(event) {
    const seasonButtons = document.querySelectorAll('.season-button')       
        const target = event.target
     seasonButtons.forEach(item => {
          item.classList.remove('active')
      })
      target.classList.add('active')
    })
    
   /* active button end */


    /* change theme start */
    const changeThemeBtn = document.querySelector('.change-theme-button')
    const bodyEl = document.body
    const skillsSect = document.querySelector('.skills-section')
    const portfolioSect = document.querySelector('.portfolio-section')
    const videoSect = document.querySelector('.video-section')
    const priceSect = document.querySelector('.price-section')
  
    const changeElementsArr = [bodyEl, skillsSect, portfolioSect, videoSect, priceSect]

    const footerCont = document.querySelector('.footer-container')
    const headerCont = document.querySelector('.header-container')
    const heroSect = document.querySelector('.hero-section')
    const noChangeArr = [headerCont, heroSect, footerCont]
const lightThemeImg = document.querySelector('.light-theme-img')
const darkThemeImg = document.querySelector('.dark-theme-img')
   
    changeThemeBtn.addEventListener('click', changeTheme)
     
    function changeTheme () {
     changeElementsArr.forEach(item => {
      item.classList.toggle('light-theme')
   lightThemeImg.classList.toggle('light-theme-img-active')
  darkThemeImg.classList.toggle('dark-theme-img-passive')

     
      });
      noChangeArr.forEach(item => {
        item.classList.toggle('dark-theme')
                  
      })
    }
    /* change theme end */
    

  /* change-languages start */
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Retouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-item-subtitle-1': 'Standard',
    'price-item-subtitle-2': 'Premium',
    'price-item-subtitle-3': 'Gold',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-item-subtitle-1': 'Стандарт',
    'price-item-subtitle-2': 'Премиум',
    'price-item-subtitle-3': 'Золотой',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const langEnBtn = document.querySelector('.lang-en')
const langRuBtn = document.querySelector('.lang-ru')
const dataList  = document.querySelectorAll('[data-i18]')
function translate(lang) {
  dataList.forEach(item => {
    item.textContent = i18Obj[lang][item.dataset.i18]
  })
}

langEnBtn.addEventListener('click', () => {
  translate('en')
  langRuBtn.classList.remove('active-lang')
  langEnBtn.classList.add('active-lang')
})

langRuBtn.addEventListener('click', () => {
  translate('ru') 
  langEnBtn.classList.remove('active-lang')
  langRuBtn.classList.add('active-lang')
})

/* change-languages end */


/* change logo start */


// console.log(darkThemeImg)
/* change logo end */

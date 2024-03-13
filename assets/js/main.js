/*=============== SEARCH ===============*/


/*=============== LOGIN ===============*/


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 2000,
        disableOnIntracton: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
    })

/*===============NEWS SWIPER ===============*/
let swiperFeatured = new Swiper('.news__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
    })


/*===============NEWS CARD===============*/
let newsPreviewContainer = document.querySelector('.news-preview');
let newsPreviewBox = newsPreviewContainer.querySelectorAll('.preview');

document.querySelectorAll('.news__container .news__card').forEach(news__card =>{
  news__card.onclick = () =>{
    newsPreviewContainer.style.display = 'flex';
    let name = news__card.getAttribute('data-name');
    newsPreviewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

newsPreviewBox.forEach(close =>{
  close.querySelector('.close').onclick = () =>{
    close.classList.remove('active');
    newsPreviewContainer.style.display = 'none';
  };
});



/*=============== GALLERY CARD ===============*/

let preveiwContainer = document.querySelector('.photo-preview');
let previewBox = preveiwContainer.querySelectorAll('.popup');

document.querySelectorAll('.photo-container .photo').forEach(photo =>{
  photo.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = photo.getAttribute('data-name');
    previewBox.forEach(popup =>{
      let target = popup.getAttribute('data-target');
      if(name == target){
        popup.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close_popup =>{
  close_popup.querySelector('.close-image').onclick = () =>{
    console.log("closing");
    close_popup.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});



/*=============== TEAM SWIPER ===============*/
let swiperTestimonial = new Swiper('.team__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 5,
            centeredSlides: false,
        }
    }
    })

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY <= 350 ? scrollUp.classList.remove('scrollup')
                    : scrollUp.classList.add('scrollup')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__container`,'.footer__container', {delay:400})
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 200})
sr.reveal(`.mission__data`, {origin: 'right'})
sr.reveal(`.mission__images`, {origin: 'left'})
sr.reveal(`.news`, {origin: 'bottom'})
sr.reveal(`.gallery`, {delay: 400})
sr.reveal(`.team__container`, {origin: 'center'})





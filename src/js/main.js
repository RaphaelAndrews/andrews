/*=============== NAV TOGGLE ===============*/
const navToggle = document.getElementById('header-toggle');

function toggleMenu() {
  const headerOverlay = document.getElementById('header-overlay');
  headerOverlay.classList.toggle('overlay__transition');
}
navToggle.addEventListener('click', toggleMenu);

/*=============== SHOW MENU ===============*/
const toggleButton = document.getElementById('toggle-button');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        toggleButton.classList.toggle('bx-menu')
    })
}

if(navToggle){
    navToggle.addEventListener('click', () =>{
        toggleButton.classList.toggle('bx-x')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('header-overlay')
    navMenu.classList.add('overlay__transition')

}
navLink.forEach(n => n.addEventListener('click', linkAction))

function linkAction2(){
    const toggleButton = document.getElementById('toggle-button')
    toggleButton.classList.remove('bx-x')
    toggleButton.classList.add('bx-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction2))

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.projects__container', {
    selectors: {
        target: '.projects__card'
    },
    animation: {
        duration: 300
    }
})

/* Link active*/ 
const linkProject = document.querySelectorAll('.projects__item')

function activeProject() {
    linkProject.forEach(l=> l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(l=> l.addEventListener('click', activeProject))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header__overlay a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.header__overlay a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL TOP ===============*/
scrollTop = document.getElementById("scroll__top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTop.style.display = "inherit";
  } else {
    scrollTop.style.display = "none";
  }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__box, .projects__title, .projects__filters, .footer__links, .footer__info`, {delay: 700})
sr.reveal(`.home__scroll-box, .home__scroll, .projects__container`, {delay: 900, origin: 'bottom'})
sr.reveal(`.about__img`, {distance: '120px', origin: 'left'})
sr.reveal(`.about__box`, {distance: '120px', origin: 'right'})
sr.reveal(`.scroll__top, .scroll__icon, .header__links, .header__toggle`, {delay: 700, distance: '120px', origin: 'right'})
sr.reveal(`.header__logo`, {delay: 700, distance: '120px', origin: 'left'})*/

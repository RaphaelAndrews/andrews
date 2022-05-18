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

/*=============== SECTION TOGGLE ===============*/
/*=============== Toggle ===============*/
const lockToggle = document.getElementById('locks-1');

function toggleSection() {
  const hideSection = document.getElementById('header');
  const locks = document.getElementById('lock-1');

  hideSection.classList.toggle('hide');
  locks.classList.toggle('alert');
}
lockToggle.addEventListener('click', toggleSection);

/*=============== Toggle 2 ===============*/
const lockToggle2 = document.getElementById('locks-2');

function toggleSection2() {
  const hideSection2 = document.getElementById('home');
  const locks = document.getElementById('lock-2');

  hideSection2.classList.toggle('hide');
  locks.classList.toggle('alert');
}
lockToggle2.addEventListener('click', toggleSection2);

/*=============== Toggle 3 ===============*/
const lockToggle3 = document.getElementById('locks-3');

function toggleSection3() {
  const hideSection3 = document.getElementById('about');
  const locks = document.getElementById('lock-3');

  hideSection3.classList.toggle('hide');
  locks.classList.toggle('alert');
}
lockToggle3.addEventListener('click', toggleSection3);

/*=============== Toggle 4 ===============*/
const lockToggle4 = document.getElementById('locks-4');

function toggleSection4() {
  const hideSection4 = document.getElementById('projects');
  const locks = document.getElementById('lock-4');

  hideSection4.classList.toggle('hide');
  locks.classList.toggle('alert');
}
lockToggle4.addEventListener('click', toggleSection4);

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
const sr = ScrollReveal({
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
sr.reveal(`.header__logo`, {delay: 700, distance: '120px', origin: 'left'})

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


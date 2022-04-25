/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('header-toggle'),
      navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.remove('hidden')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.add('hidden')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.add('hidden')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL TOP ===============*/
//Get the button:
scrollTop = document.getElementById("scroll__top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

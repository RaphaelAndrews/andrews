const navToggle = document.getElementById('header-toggle');

function toggleMenu() {
  const headerOverlay = document.getElementById('header-overlay');
  headerOverlay.classList.toggle('hidden');
}
navToggle.addEventListener('click', toggleMenu);





/*=============== SHOW MENU ===============*/
/*const navToggle = document.getElementById('header-toggle'),
      navMenu = document.getElementById('header-overlay'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
/*if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.remove('hidden')
    })
}*/

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
/*if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.add('hidden')
    })
}*/

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('header-overlay')
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
    scrollTop.style.display = "inherit";
  } else {
    scrollTop.style.display = "none";
  }
}

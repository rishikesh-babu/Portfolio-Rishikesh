let menuButton = document.querySelector('.menu-button')
let menu = document.querySelector('.menu')
let iconMenu = document.querySelectorAll('.icon-menu')
let isOpen = false

menuButton.addEventListener('click', handleMenu)
menu.addEventListener('click', handleMenu)

function handleMenu() {
    isOpen = !isOpen

    menu.style.display = isOpen ? 'flex' : 'none'

    iconMenu[0].style.display = isOpen ? 'none' : 'flex'
    iconMenu[1].style.display = isOpen ? 'flex' : 'none'
}

// Base config (optional if you set per element)
const sr = ScrollReveal({
  reset: true,
  distance: '100px',
  duration: 1000,
  delay: 200,
});

// Reveal profile image from top
sr.reveal('.profile', {
  origin: 'top',
});

// Reveal Download CV from left
sr.reveal('.download-cv', {
  origin: 'left',
  viewFactor: 0.1
});

// Reveal Contact Info from right
sr.reveal('.contact', {
  origin: 'right',
});

ScrollReveal().reveal('.home .contact', { origin: 'right' })
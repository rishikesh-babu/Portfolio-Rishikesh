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

ScrollReveal({
  reset: true,
  distance: '100px',
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal('.profile, .about-heading', { origin: 'top'});
ScrollReveal().reveal('.home .home-button', {origin: 'bottom'})
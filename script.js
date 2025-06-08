let menuButton = document.querySelector('.menu-button')
let menu = document.querySelector('.menu')
let iconMenu = document.querySelectorAll('.icon-menu')
let isOpen = false 

menuButton.addEventListener('click', handleOpenMenu)

function handleOpenMenu() {
    isOpen = !isOpen

    menu.style.display = isOpen ? 'flex' : 'none'

    iconMenu[0].style.display = isOpen ? 'none' : 'flex'
    iconMenu[1].style.display = isOpen ? 'flex' : 'none'
}
function mobileMenu() {
    let menuMobile = document.querySelector('.mobile-menu')
    let menuIcon = document.querySelector('.fa-solid')

    if (menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active')
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')
    } else {
        menuMobile.classList.add('active')
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')
    }
}
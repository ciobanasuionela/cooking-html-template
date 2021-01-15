let menu = document.getElementById('main-menu');

window.addEventListener('scroll', (event) => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 300) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }

    event.stopPropagation();
});
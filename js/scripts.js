let menu__list = document.querySelector(".menu__list");

function clickMenu() {
    if (menu__list.style.display == 'block') {
        menu__list.style.display = 'none'
    } else {
        menu__list.style.display = 'block'
    }
}
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const score = document.querySelectorAll('.skills__ratings-score'),
    lines = document.querySelectorAll('.skills__ratings-line span');

score.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
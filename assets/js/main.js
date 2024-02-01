// Open/close menu
const hamburgerIcon = document.getElementById('hamburger');
const navList = document.querySelector('.nav__list');

hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburgerIcon.classList.toggle('open');
});


// Close navigation list when click on link of navigation list
const mobileNavItems = document.querySelectorAll('.nav__list > .nav__item');

mobileNavItems.forEach(function (el) {
    el.addEventListener('click', function () {
        navList.classList.remove('active');
        hamburgerIcon.classList.remove('open');
    })

});


// Close navigation list when we scroll down
window.addEventListener('scroll', () => {
    hamburgerIcon.classList.remove('open');
    navList.classList.remove('active');
});



// Close navigation list when we resize window
window.addEventListener('resize', (e) => {

    if (window.innerWidth > 768) {
        navList.classList.remove('active');
        hamburgerIcon.classList.remove('open');
    }
});



// Show fixed BTN
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollBtn');

    if (document.documentElement.scrollTop > 150) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});


// Click on BTN - Scroll to top: 
const btn = document.getElementById('scrollBtn');

btn.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: "smooth" });
});


// Gallery section
const images = [
    'assets/images/Raftingfoto(25).jpg',
    'assets/images/Raftingfoto(26).jpg',
    'assets/images/Raftingfoto(27).jpg',
    'assets/images/Raftingfoto(28).jpg',
    'assets/images/Raftingfoto(29).jpg',
    'assets/images/Raftingfoto(30).jpg',
    'assets/images/Raftingfoto(31).jpg',
    'assets/images/Raftingfoto(32).jpg',
    'assets/images/Raftingfoto(33).jpg',
    'assets/images/Raftingfoto(35).jpg',
    'assets/images/Raftingfoto(36).jpg',
    'assets/images/Raftingfoto(37).jpg',
    'assets/images/Raftingfoto(38).jpg',
    'assets/images/Raftingfoto(39).jpg',
    'assets/images/Raftingfoto(40).jpg',
    'assets/images/Raftingfoto(41).jpg',
    'assets/images/Raftingfoto(43).jpg',
    'assets/images/Raftingfoto(44).jpg'
];

window.addEventListener('load', () => {
    const gallery = document.querySelector('.gallery__wrapper');

    for (let i = 0; i < images.length; i++) {
        gallery.innerHTML += `      
                <div class="gallery__img">
                    <img src="${ images[i] }" alt="gallery img">
                </div>`
    }
});


getYear();

function getYear() {

    let date = new Date();
    let currentYear = document.querySelector('.footer__copy span');
    currentYear.innerHTML = date.getFullYear();
}
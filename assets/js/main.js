const hamburgerIcon = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

// Open/close mobile nav menu
hamburgerIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('open');
});


// Close mobile nav menu when click on link in mobile menu
const mobileNavItems = document.querySelectorAll('#mobile-nav li');

for (mobileNavItem of mobileNavItems) {
    mobileNav.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        hamburgerIcon.classList.remove('open');
    });
}


// Banner - SLider
const rightArrow = document.querySelector('#right');
const leftArrow = document.querySelector('#left');
const images = document.querySelectorAll('.slider-images img');

let imgNum = 0;

rightArrow.addEventListener('click', () => {
    displayNone();
    imgNum++;

    if (imgNum === images.length) {
        imgNum = 0;
    }

    images[imgNum].style.display = 'block';
});


leftArrow.addEventListener('click', () => {
    displayNone();
    imgNum--;

    if (imgNum === -1) {
        imgNum = images.length - 1;
    }

    images[imgNum].style.display = 'block';
});

function displayNone() {
    for (img of images) {
        img.style.display = 'none';
    }
}


// Animation on scroll
window.onscroll = () => {
    raftingSectionAnimation();
    contactSectionAnimation();
}

function raftingSectionAnimation() {
    const sectionAnimation = document.querySelector('.rafting > main');
    const sectionPosition = sectionAnimation.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    const leftArticle = document.querySelector('.card-left');
    const rightArticle = document.querySelector('.card-right');

    if (sectionPosition < screenPosition) {
        leftArticle.classList.add('animated');
        rightArticle.classList.add('animated');
    }
}

function contactSectionAnimation() {

    const sectionAnimation = document.querySelector('.contact > .contact-body');
    const sectionPosition = sectionAnimation.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3

    const contactInfo = document.querySelector('.contact-info');
    const map = document.querySelector('.map');

    if (sectionPosition < screenPosition) {
        contactInfo.classList.add('animated');
        map.classList.add('animated');
    }
}

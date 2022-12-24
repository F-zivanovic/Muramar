// Open/close navigation list
const hamburgerIcon = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburgerIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('open');
});


// Close navigation list when click on link of navigation list
const mobileNavItems = document.querySelectorAll('#mobile-nav li');

for (mobileNavItem of mobileNavItems) {
    mobileNav.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        hamburgerIcon.classList.remove('open');
    });
}

// Close navigation list when we scroll down
window.addEventListener('scroll', () => {
    hamburgerIcon.classList.remove('open');
    mobileNav.classList.add('hidden');
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



// Animation on scroll
window.onscroll = () => {
    raftingSectionAnimation();
    contactSectionAnimation();
}

function raftingSectionAnimation() {
    const sectionAnimation = document.querySelector('.rafting > main');
    const sectionPosition = sectionAnimation.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    const raftingItems = document.querySelectorAll('.rafting__item');

    if (sectionPosition < screenPosition) {

        for (let item of raftingItems) {
            item.classList.add('animated');
        }
    }
}

function contactSectionAnimation() {

    const sectionAnimation = document.querySelector('.contact > .contact__wrapper');
    const sectionPosition = sectionAnimation.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3
    const contactItems = document.querySelectorAll('.contact__item');

    if (sectionPosition < screenPosition) {

        for (let item of contactItems) {
            item.classList.add('animated');
        }
    }
}

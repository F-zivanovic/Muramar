// Open/close menu
const hamburgerIcon = document.getElementById('hamburger');
const navList = document.querySelector('.nav__list');

hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburgerIcon.classList.toggle('open');
});


// Close navigation list when click on link of navigation list
const mobileNavItems = document.querySelectorAll('.nav__list > .nav__item');

mobileNavItems.forEach(function(el){
    el.addEventListener('click', function(){
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
window.addEventListener('resize', (e) =>{

    if(window.innerWidth > 768){
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


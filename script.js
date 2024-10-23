const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navv = document.querySelector('navv');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');  // Toggle the 'active' class on the hamburger
    navLinks.classList.toggle('active');   // Toggle the 'active' class on the nav-links for mobile menu
    navv.classList.toggle('active');
    });


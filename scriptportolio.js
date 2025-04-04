ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content', { origin: 'left' }); 
ScrollReveal().reveal('.home-img', { origin: 'right' }); 
ScrollReveal().reveal('.project-box', { origin: 'bottom', interval: 200 }); 
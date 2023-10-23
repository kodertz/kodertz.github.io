// Initialize ScrollReveal
const sr = ScrollReveal();

// Add reveal animations to your sections
sr.reveal('#about', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    reset: true,
});

sr.reveal('#projects', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    reset: true,
});

sr.reveal('#contact', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    reset: true,
});

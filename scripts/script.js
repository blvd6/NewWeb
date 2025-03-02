document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < triggerBottom) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

document.querySelector('.hamburger').onclick = () => {
    document.querySelector('.nav-links').classList.toggle('active');
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, left: 0 });
    }
    toggleHomeButton(sectionId);
}

function toggleHomeButton(sectionId) {
    const button = document.getElementById('home-nav-btn');
    if (!button) return;
    button.style.display = (sectionId === 'home' || sectionId === 'places') ? 'none' : 'inline-flex';
}

function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.page-section, .page-section section');
    elements.forEach(el => observer.observe(el));
}

function videoEffects() {
    const video = document.getElementById('bg-video');
    if (video) {
        video.style.transform = 'scale(1.1)';
        setTimeout(() => {
            video.style.transition = 'transform 10s ease-in-out';
            video.style.transform = 'scale(1)';
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sectionId = window.location.hash ? window.location.hash.substring(1) : 'home';
    showSection(sectionId);
    addScrollAnimations();
    videoEffects();
});

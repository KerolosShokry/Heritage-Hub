function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('scroll-hidden');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('main section, .hero-copy, .section-title, .section-subtitle, .civilization-content, .story-block');
    elements.forEach(el => {
        el.classList.add('scroll-hidden');
        observer.observe(el);
    });
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
    addScrollAnimations();
    videoEffects();
});

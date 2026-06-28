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
// التأكد إن المستخدم داخل من رابط Netlify القديم
if (window.location.hostname.includes('netlify.app')) {
    // استبدال دومين نتليفاي بدومين فيرسيل الجديد مع الحفاظ على اسم الصفحة (المسار)
    const newLocation = window.location.href.replace('heritage-hub-eg.netlify.app', 'heritage-hub-eg.vercel.app');
    window.location.replace(newLocation);
}
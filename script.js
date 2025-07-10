// Sets the copyright year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Intersection Observer for fade-in animations on the homepage
// It checks if the elements exist before trying to observe them to prevent errors on other pages.
const fadeElements = document.querySelectorAll('.fade-in-element, .section-title');

if (fadeElements.length > 0) {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('in-view');
                }
                // Optional: unobserve after animation to save resources
                // observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElements.forEach(el => observer.observe(el));
}
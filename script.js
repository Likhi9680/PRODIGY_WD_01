const nav = document.querySelector('.nav');

// Change nav style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Toggle information visibility
function toggleInfo(infoId) {
    const info = document.getElementById(infoId);
    const isActive = info.classList.contains('active');

    // Hide all info boxes
    document.querySelectorAll('.info').forEach((el) => el.classList.remove('active'));

    // Toggle the clicked info box
    if (!isActive) {
        info.classList.add('active');
    }
}

const profileLink = document.querySelector('.profile-link');

// Add neon green glow on hover
profileLink.addEventListener('mouseenter', () => {
    profileLink.style.backgroundColor = '#5865F2'; // Discord blue
    profileLink.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.9)';
});

// Restore original styles on mouse leave
profileLink.addEventListener('mouseleave', () => {
    profileLink.style.backgroundColor = '#7289DA'; // Discord brand color
    profileLink.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.7)';
});

// Set interval for changing background color
const mainArea = document.querySelector('main');
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];
let currentColor = 0;

setInterval(() => {
    mainArea.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}, 2000);

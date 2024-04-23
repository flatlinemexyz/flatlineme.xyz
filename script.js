// Initialize dynamic effects when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.querySelector('.header-text');

    function changeTextColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        headerText.style.transition = 'color 1s ease-in-out'; // Smooth transition
        headerText.style.color = randomColor;
    }

    setInterval(changeTextColor, 2000); // Change color every 2000 milliseconds
});

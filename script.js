document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.querySelector('.header-text');

    function changeTextColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        headerText.style.transition = 'color 1s ease-in-out';
        headerText.style.color = randomColor;
    }

    setInterval(changeTextColor, 2000);
});

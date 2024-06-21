document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.querySelector('.header-text');
    const failedButton = document.getElementById('failed-button');
    const failedList = document.querySelector('.failed-list');

    function changeTextColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        headerText.style.transition = 'color 1s ease-in-out';
        headerText.style.color = randomColor;
    }

    setInterval(changeTextColor, 2000);

    failedButton.addEventListener('click', () => {
        failedList.style.display = 'block';
        failedButton.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
        if (e.target !== failedButton && e.target !== failedList) {
            failedList.style.display = 'none';
            failedButton.style.display = 'block';
        }
    });

    let bgMusic = document.getElementById('bgMusic');

    document.body.addEventListener('click', () => {
        bgMusic.play();
        document.body.removeEventListener('click', playAudio);
    });

    function playAudio() {
        bgMusic.play();
        document.body.removeEventListener('click', playAudio);
    }
});

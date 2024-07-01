document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.querySelector('.header-text');
    const failedButton = document.getElementById('failed-button');
    const failedList = document.querySelector('.failed-list');
    const bgMusic = document.getElementById('bgMusic');

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

    document.body.addEventListener('click', playAudio);

    function playAudio() {
        bgMusic.play();
        document.body.removeEventListener('click', playAudio);
    }

    setInterval(() => {
        document.body.style.color = getRandomColor();
    }, 1000);

    document.addEventListener('mousemove', function(e) {
        var circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = circle.style.height = '50px';
        circle.style.left = (e.pageX - 25) + 'px';
        circle.style.top = (e.pageY - 25) + 'px';
        document.body.appendChild(circle);

        setTimeout(function() {
            circle.remove();
        }, 600);

        // Move crosshair
        var crosshair = document.getElementById('crosshair');
        crosshair.style.left = e.pageX + 'px';
        crosshair.style.top = e.pageY + 'px';
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Background shake effect
    setInterval(() => {
        document.body.classList.add('shake');
        setTimeout(() => {
            document.body.classList.remove('shake');
        }, 500);
    }, 5000);
});

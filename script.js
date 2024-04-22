const mainArea = document.querySelector('main');
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];
let currentColorIndex = 0;

// Function to change the background color
function changeBackgroundColor() {
    mainArea.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Change background color every 500 milliseconds
setInterval(changeBackgroundColor, 500);

// Set initial background color to black
mainArea.style.backgroundColor = '#000';

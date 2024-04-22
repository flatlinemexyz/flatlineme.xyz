// Define a function to change the text color randomly
function changeTextColor() {
    const headerText = document.querySelector('.header-text');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random hex color
    headerText.style.color = randomColor; // Apply the random color to the header text
}

// Call the function repeatedly to change text color rapidly
setInterval(changeTextColor, 200); // Change color every 200 milliseconds

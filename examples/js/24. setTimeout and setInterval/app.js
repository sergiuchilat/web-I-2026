function makePageRed() {
  document.body.style.backgroundColor = 'red';
}

setTimeout(makePageRed, 2000);

const countdownElement = document.getElementById('countdown');

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let colorIndex = 0;

const intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Loop through colors
    countdownElement.textContent = Number(countdownElement.textContent) - 1;
}, 1000);


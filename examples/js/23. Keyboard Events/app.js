const allEventsInput = document.getElementById('allEventsInput');

allEventsInput.addEventListener('keydown', (event) => {
    console.log('Key down:', event.key);
});

allEventsInput.addEventListener('keyup', (event) => {
    console.log('Key up:', event.key);
});

allEventsInput.addEventListener('keypress', (event) => {
    console.log('Key press:', event.key);
});


const inverseNameInput = document.getElementById('inverseNameInput');
const inverseNameOutput = document.getElementById('inverseNameOutput');

inverseNameInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const reversedValue = inputValue.split('').reverse().join('');
    console.log('Input value:', inputValue);
    console.log('Splitted value:', inputValue.split(''));
    console.log('Reversed value:', inputValue.split('').reverse());
    console.log('Joined value:', inputValue.split('').reverse().join(''));
    inverseNameOutput.textContent = reversedValue;
});

const car = document.getElementById('car');

document.addEventListener('keydown', (event) => {
    event.preventDefault(); // Prevent default behavior of arrow keys
    if (event.key === 'ArrowUp') {
        console.log('Move up');
        car.style.top = (car.offsetTop - 10) + 'px';
        car.style.transform = 'rotate(0deg)';
    } else if (event.key === 'ArrowDown') {
        console.log('Move down');
        car.style.top = (car.offsetTop + 10) + 'px';
        car.style.transform = 'rotate(180deg)';
    } else if (event.key === 'ArrowLeft') {
        console.log('Move left');
        car.style.left = (car.offsetLeft - 10) + 'px';
        car.style.transform = 'rotate(270deg)';
    } else if (event.key === 'ArrowRight') {
        console.log('Move right');
        car.style.left = (car.offsetLeft + 10) + 'px';
        car.style.transform = 'rotate(90deg)';
    }
});
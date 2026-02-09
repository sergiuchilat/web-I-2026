const clickButton = document.getElementById('clickButton');

function handleClick() {
    alert('Button clicked!');
}

//Example of event listener when handleClick function is predefined
clickButton.addEventListener('click', handleClick);

const hoverButton = document.getElementById('hoverButton');
// Example of event listener when function is defined inline
hoverButton.addEventListener('mouseover', () => {
    hoverButton.innerText = 'Button hovered!';
})

hoverButton.addEventListener('mouseout', () => {
    hoverButton.innerText = 'Mouse left the button!';
})

const dblButton = document.getElementById('dblButton');
dblButton.addEventListener('dblclick', () => {
    alert('Button double-clicked!');
})

const mouseMoveArea = document.getElementById('mouseMoveArea');
mouseMoveArea.addEventListener('mousemove', (event) => {
    mouseMoveArea.textContent = `Mouse moved at (${event.clientX}, ${event.clientY})`;
})

const mouseDownUpButton = document.getElementById('mouseDownUpButton');
mouseDownUpButton.addEventListener('mousedown', () => {
    mouseDownUpButton.textContent = 'Mouse button down!';
})

mouseDownUpButton.addEventListener('mouseup', () => {
    mouseDownUpButton.textContent = 'Mouse button up!';
})

const contextMenuArea = document.getElementById('contextMenuArea');
contextMenuArea.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    contextMenuArea.textContent = 'Custom context menu triggered!';
})
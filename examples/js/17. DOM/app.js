document.body.style.backgroundColor = 'yellow';
document.querySelector('h1').innerText = 'This is a yellow background(UPDATED)';
document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!');
});

setTimeout(() => {
    document.body.style.backgroundColor = 'lightblue';
    document.querySelector('h1').innerText = 'Background changed to light blue after 3 seconds';
    document.querySelector('button').remove();
}, 3000);


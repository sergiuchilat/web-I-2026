setTimeout(() => {
    document.getElementById('firstElement').textContent = 'This is the first element';


    const elements = document.getElementsByClassName('paragraph-element');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = 'red';
    }

    const divElements = document.getElementsByTagName('div');
    for (let i = 0; i < divElements.length; i++) {
        divElements[i].style.border = '1px solid black';
    }


}, 2000)

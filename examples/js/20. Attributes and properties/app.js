const element = document.getElementById("firstName");
const checkBox = document.getElementById("checkMe");
setTimeout(() => {
    element.value = "John";
    checkBox.checked = true;
}, 2000);

setTimeout(() => {
    element.type = 'password';
    element.id = 'passwordField';
}, 4000);

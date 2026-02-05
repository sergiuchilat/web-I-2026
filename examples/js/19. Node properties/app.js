alert(document.body.nodeName)

const firstElement = document.getElementById('firstElement')
const secondElement = document.getElementById('secondElement')

console.log(firstElement)
console.log(firstElement.outerHTML)
console.log(firstElement.innerHTML)

setTimeout(() => {
    //firstElement.hidden = true
    firstElement.style.display = 'none'
}, 2000)
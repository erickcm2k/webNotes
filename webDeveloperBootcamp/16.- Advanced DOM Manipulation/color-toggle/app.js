const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', changeColor);

function changeColor() {
    if(container.style.backgroundColor == 'pink') {
        container.style.backgroundColor = 'beige';
    } else {
        container.style.backgroundColor = 'pink';
    }
}
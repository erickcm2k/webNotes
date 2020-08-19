const firstHello = document.getElementById('description')

firstHello.style.textDecoration = 'underline'


// Select all elements with the corresponding class.
const hellolis = document.getElementsByClassName('red')
// Changing style and other properties.
hellolis[1].style.color = 'red'
hellolis[1].textContent = 'Bye'
hellolis[2].style.color = 'pink'


// Select all elements with the corresponding tag.
const container = document.getElementsByTagName('div');
container[1].style.padding = '20px';


//
const h1s = document.querySelectorAll('h1');
h1s.forEach(h1 => {
    h1.style.fontSize = '30px';
});
//h1s[1].style.fontSize = '20px'

// (for id, tag or class) Returns the first element that matches a given CSS-style selector
const first_h1 = document.querySelector('h1');
first_h1.style.color = 'green';


// Mofifying attributes
const link = document.getElementsByClassName('google-search');
link[0].setAttribute('href', 'https://www.google.com.mx/')
console.log(link[0].getAttribute('href'))

const image = document.querySelector('img');
console.log(image.getAttribute('src'));
image.setAttribute('src', './sample.png');
console.log(image.getAttribute('src'));

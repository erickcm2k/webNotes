var h1Text = document.querySelector('h1');
var lis = document.querySelectorAll('li');


h1Text.addEventListener('click', () => {
    alert('Button pressed');
    h1Text.textContent = 'Bye world...'; 
})

/**
 *  Two ways of doing the same.
 */

lis.forEach(li => li.addEventListener('click', function() {
    li.style.color = 'red';
    li.textContent = "You pressed me!";
}))

// for(let i = 0; i < lis.length; i++) {
//     lis[i].addEventListener('click', function() {
//         this.style.color = 'red';
//     });
// }

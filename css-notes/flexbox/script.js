let words = document.getElementsByClassName('words');

for(let i = 0; i < words.length; i++) {
  words[i].addEventListener('click', function() {
      alert(`You pressed ${i + 1}th element.`);
  });
}
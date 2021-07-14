function sum(n1, n2) {
  console.log(n1 + n2);
}

// function substract(n1, n2) {
//   console.log(n1 - n2);
// }

// function divide(n1, n2) {
//   console.log(n1 / n2);
// }

function callbackReceiver(num1, num2, cb) {
  cb(num1, num2);
}

// Pasamos una referencia (apuntador) a una función previamente definida
callbackReceiver(10, 10, sum);

// Definimos la función dentro del mismo argumento
callbackReceiver(10, 10, function substract(n1, n2) {
  console.log(n1 - n2);
});

// Definimos una función flecha anónima en el argumento
callbackReceiver(10, 10, (n1, n2) => {
  console.log(n1 / n2);
});

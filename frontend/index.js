const API_URL = 'http://localhost:3000';

// elementos
const input = document.getElementById('input');
const btn = document.getElementById('send');
const listContainer = document.getElementById('list');

// agrega una lista de elementos
function showNumbers(numbers) {
  listContainer.innerHTML = ''; // borra el contenido de "listContainer"
  numbers.forEach((num) => {
    const node = document.createElement('h2'); // crea un nodo por cada elemento de la lista
    node.innerText = num;
    listContainer.appendChild(node); // agregamos el nodo a "listContainer"
  });
}

function sendNumbers(numbers) {
  // realiza una peticion post al servidor
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numbers }), // se convierte el objeto a un string para poder enviar lo
  })
    .then((res) => res.json()) // recibe la respuesta y la convierte a json
    .then((res) => showNumbers(res.numbers)); // ejecuta la function showNumbers pasandole la respuesta
}

// escucha el envento click del boton
btn.addEventListener('click', () => {
  const numbers = input.value.split(' ').map((e) => parseInt(e)); // transforma el contenido del input a un array
  sendNumbers(numbers);
});

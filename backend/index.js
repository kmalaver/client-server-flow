const express = require('express');
const cors = require('cors');

const app = express();

// middlewares
app.use(express.json()); // permite leer el body del request
app.use(cors()); // habilita CORS https://developer.mozilla.org/es/docs/Web/HTTP/CORS

const PORT = 3000;

// eschucha el metodo post
app.post('/', (req, res) => {
  const { numbers } = req.body; // recibe los números del cliente
  const newNumbers = numbers.map((e) => e ** 2); // devuelve las potencias cuadradas de los números
  res.send({ numbers: newNumbers }); // devuelve la respuesta hacia el cliente
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

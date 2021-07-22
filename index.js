const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hola', (req, res) => {
  res.send('ruta Hola');
});

app.get('/adios', (req, res) => {
    res.send('ruta Adiós');
  });

app.post('/registro', (req, res) => {
    res.send('recibiendo información de registo');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});



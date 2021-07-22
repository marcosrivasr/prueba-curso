const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hola', (req, res) => {
  res.send('ruta Hola');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});



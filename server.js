const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// TODO: Mover esto a variables de entorno antes de ir a producción - no olvidar
const API_KEY = "dj-walc-2023-super-secreto-y-muy-largo-para-ser-encontrado";

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
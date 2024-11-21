const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Datos simulados con las mismas bandas que en el frontend
let bandas = [
  { id: 1, nombre: 'AC/DC', genero: 'Rock', pais: 'Australia', image: '/acdc.jpg' },
  { id: 2, nombre: 'Guns N Roses', genero: 'Rock', pais: 'Estados Unidos', image: '/gunsnroses.jpg' },
  { id: 3, nombre: 'Bon Jovi', genero: 'Rock', pais: 'Estados Unidos', image: '/bonjovi.jpg' },
  { id: 4, nombre: 'Aerosmith', genero: 'Rock', pais: 'Estados Unidos', image: '/aerosmith.jpg' },
  { id: 5, nombre: 'Whitesnake', genero: 'Rock', pais: 'Reino Unido', image: '/whitesnake.jpg' },
  { id: 6, nombre: 'Queen', genero: 'Rock', pais: 'Reino Unido', image: '/queen.jpg' },
  { id: 7, nombre: 'Metallica', genero: 'Metal', pais: 'Estados Unidos', image: '/metallica.jpg' },
  { id: 8, nombre: 'Rolling Stones', genero: 'Rock', pais: 'Reino Unido', image: '/rollingstones.jpg' },
  { id: 9, nombre: 'Led Zeppelin', genero: 'Rock', pais: 'Reino Unido', image: '/ledzeppelin.jpg' }
];

// Endpoints
app.get('/api/bandas', (req, res) => {
  const { nombre, genero } = req.query;

  let resultado = bandas;
  if (nombre) {
    resultado = resultado.filter((banda) =>
      banda.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }
  if (genero) {
    resultado = resultado.filter((banda) => banda.genero === genero);
  }

  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

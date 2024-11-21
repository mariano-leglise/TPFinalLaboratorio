const express = require('express');
const router = express.Router();

// Lista de bandas
let bandas = [
  { id: 1, nombre: 'AC/DC', genero: 'Rock', pais: 'Australia', image: '../public/acdc.jpg' },
  { id: 2, nombre: 'Guns N Roses', genero: 'Rock', pais: 'Estados Unidos', image: '../public/gunsnroses.jpg' },
  { id: 3, nombre: 'Bon Jovi', genero: 'Rock', pais: 'Estados Unidos', image: '../public/bonjovi.jpg' },
  { id: 4, nombre: 'Aerosmith', genero: 'Rock', pais: 'Estados Unidos', image: '../public/aerosmith.jpg' },
  { id: 5, nombre: 'Whitesnake', genero: 'Rock', pais: 'Reino Unido', image: '../public/whitesnake.jpg' },
  { id: 6, nombre: 'Queen', genero: 'Rock', pais: 'Reino Unido', image: '../public/queen.jpg' },
  { id: 7, nombre: 'Metallica', genero: 'Metal', pais: 'Estados Unidos', image: '../public/metallica.jpg' },
  { id: 8, nombre: 'Rolling Stones', genero: 'Rock', pais: 'Reino Unido', image: '../public/rollingstones.jpg' },
  { id: 9, nombre: 'Led Zeppelin', genero: 'Rock', pais: 'Reino Unido', image: '../public/ledzeppelin.jpg' }
];

// Ruta para obtener las bandas
router.get('/bandas', (req, res) => {
  res.json(bandas);
});

module.exports = router;

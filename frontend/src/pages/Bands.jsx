import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './Bands.css';
import axios from 'axios';

const Bands = () => {
  const [bands, setBands] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3000/api/bandas', {
      params: { nombre: search }
    })
    .then(response => {
      setBands(response.data);
    })
    .catch(error => {
      console.error('Error fetching bands:', error);
    });
  }, [search]);

  return (
    <div className="bands-container">
      <input
        type="text"
        placeholder="Buscar bandas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {bands.map((band) => (
        <div className="band-card" key={band.id}>
          <Link to={`/about/${band.id}`}>
            <img 
              src={`http://localhost:3000${band.image}`} 
              alt={band.nombre} 
              className="band-image" 
            />
          </Link>
          <h3>{band.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

export default Bands;

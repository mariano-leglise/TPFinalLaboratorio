import { useParams } from 'react-router-dom';
import './About.css';

const About = () => {
  const { id } = useParams();

  const bandas = [
    { 
      id: '1', 
      nombre: 'AC/DC', 
      info: 'AC/DC fue fundada en 1973 en Sídney, Australia, por los hermanos Malcolm y Angus Young. La banda es conocida por su estilo de hard rock lleno de energía, riffs de guitarra electrizantes y letras provocadoras. Su álbum más famoso, Back in Black (1980), es uno de los discos más vendidos de todos los tiempos. Canciones como Highway to Hell, Thunderstruck y You Shook Me All Night Long son clásicos del rock. A lo largo de su carrera, AC/DC ha vendido más de 200 millones de discos en todo el mundo y ha sido reconocida como una de las bandas más influyentes en la historia del rock.',
      integrantes: ['Malcolm Young', 'Angus Young', 'Brian Johnson', 'Cliff Williams'], 
      socialLinks: {
        youtube: 'https://www.youtube.com/user/ACDCVEVO',
        instagram: 'https://www.instagram.com/acdc/',
        facebook: 'https://www.facebook.com/acdc',
      },
    },
    { 
      id: '2', 
      nombre: 'Guns N Roses', 
      info: 'Guns N Roses se formó en 1985 en Los Ángeles, California, con Axl Rose y Slash como sus miembros más emblemáticos. La banda combina hard rock, punk y blues, y es conocida por su estilo provocador y letras emotivas. Su álbum debut, Appetite for Destruction (1987), es uno de los discos más vendidos de la historia del rock. Canciones como Sweet Child o Mine, Welcome to the Jungle y November Rain se han convertido en clásicos. Con más de 100 millones de discos vendidos en todo el mundo, Guns N Roses es considerada una de las bandas de rock más importantes y su música sigue siendo influyente en el género.',
      integrantes: ['Axl Rose', 'Slash', 'Duff McKagan', 'Steven Adler'], 
      socialLinks: {
        youtube: 'https://www.youtube.com/user/gunsnroses',
        instagram: 'https://www.instagram.com/gunsnroses/',
        facebook: 'https://www.facebook.com/gunsnroses',
      },
    },
    { 
      id: '3', 
      nombre: 'Bon Jovi', 
      info: 'Bon Jovi se formó en 1983 en Nueva Jersey, Estados Unidos, liderada por el cantante Jon Bon Jovi y el guitarrista Richie Sambora. La banda combina rock melódico y hard rock, siendo reconocida por sus himnos pegajosos. Su álbum Slippery When Wet (1986) catapultó a la banda a la fama, con éxitos como Livin on a Prayer y You Give Love a Bad Name. Otros álbumes destacados incluyen New Jersey y Keep the Faith. Con más de 130 millones de discos vendidos en todo el mundo, Bon Jovi ha mantenido su relevancia a lo largo de las décadas y es conocido por sus energéticos shows en vivo.',
      integrantes: ['Jon Bon Jovi', 'Richie Sambora', 'David Bryan', 'Tico Torres'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/BonJoviVEVO',
        instagram: 'https://www.instagram.com/bonjovi/',
        facebook: 'https://www.facebook.com/BonJovi',
      },
    },
    { 
      id: '4', 
      nombre: 'Aerosmith', 
      info: 'Aerosmith fue fundada en 1970 en Boston, Massachusetts, por Steven Tyler y Joe Perry. La banda es conocida por su fusión de rock, blues y pop, y su estilo distintivo ha influido en numerosas generaciones. Han producido numerosos álbumes exitosos, incluyendo Toys in the Attic (1975) y Pump (1989), con sencillos como Dream On, Sweet Emotion y I Dont Want to Miss a Thing. Aerosmith ha vendido más de 150 millones de discos en todo el mundo y es considerada una de las bandas de rock más grandes de todos los tiempos, ganando múltiples premios Grammy y un lugar en el Rock and Roll Hall of Fame.',
      integrantes: ['Steven Tyler', 'Joe Perry', 'Tom Hamilton', 'Joey Kramer', 'Brad Whitford'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/Aerosmith',
        instagram: 'https://www.instagram.com/aerosmith/',
        facebook: 'https://www.facebook.com/Aerosmith',
      },
    },
    { 
      id: '5', 
      nombre: 'Whitesnake', 
      info: 'Whitesnake se formó en 1978 en Londres, Inglaterra, por el vocalista David Coverdale, quien anteriormente había sido parte de Deep Purple. La banda es conocida por su sonido de hard rock y baladas poderosas. Su álbum 1987 marcó un gran éxito, con canciones como Here I Go Again y Is This Love. La mezcla de rock potente y melodías pegajosas les ganó una gran base de fans. Whitesnake ha vendido más de 30 millones de discos en todo el mundo y sigue siendo una de las bandas más queridas del género, conocida por sus actuaciones enérgicas y su música atemporal.',
      integrantes: ['David Coverdale', 'Steve Vai', 'Adrian Vandenberg', 'Rudy Sarzo', 'Tommy Aldridge'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/whitesnake',
        instagram: 'https://www.instagram.com/whitesnake/',
        facebook: 'https://www.facebook.com/whitesnake',
      },
    },
    { 
      id: '6', 
      nombre: 'Queen', 
      info: 'Queen se formó en 1970 en Londres, Inglaterra, por Freddie Mercury, Brian May, Roger Taylor y John Deacon. La banda es conocida por su estilo de rock teatral y su capacidad para experimentar con diferentes géneros musicales. Queen se hizo famosa por canciones como Bohemian Rhapsody, We Are the Champions y Somebody to Love. Con su innovador enfoque musical y la presencia carismática de Freddie Mercury, Queen ha vendido más de 300 millones de discos y continúa siendo una de las bandas más queridas del mundo.',
      integrantes: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/queenofficial',
        instagram: 'https://www.instagram.com/queenwillrock/',
        facebook: 'https://www.facebook.com/Queen',
      },
    },
    { 
      id: '7', 
      nombre: 'Metallica', 
      info: 'Metallica fue formada en 1981 en Los Ángeles, California, por el baterista Lars Ulrich y el guitarrista James Hetfield. La banda es conocida por su estilo thrash metal, con ritmos rápidos y letras oscuras. Su álbum, Master of Puppets (1986), es uno de los discos más influyentes del metal. Metallica también ha tenido un gran éxito comercial con discos como Metallica (1991) y Ride the Lightning (1984), y canciones como Enter Sandman y One. La banda ha vendido más de 125 millones de discos en todo el mundo.',
      integrantes: ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Robert Trujillo'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/Metallica',
        instagram: 'https://www.instagram.com/metallica/',
        facebook: 'https://www.facebook.com/metallica',
      },
    },
    { 
      id: '8', 
      nombre: 'The Rolling Stones', 
      info: 'The Rolling Stones, formada en 1962 en Londres, Inglaterra, es una de las bandas más influyentes en la historia del rock. Con Mick Jagger y Keith Richards como los miembros más reconocidos, la banda ha revolucionado el rock con su estilo único que fusiona blues, rock y R&B. Su álbum más icónico, Exile on Main St. (1972), es considerado uno de los mejores de todos los tiempos. Con éxitos como Satisfaction, Paint It Black y Angie, los Rolling Stones han vendido más de 200 millones de discos a lo largo de su carrera.',
      integrantes: ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/therollingstones',
        instagram: 'https://www.instagram.com/therollingstones/',
        facebook: 'https://www.facebook.com/therollingstones',
      },
    },
    { 
      id: '9', 
      nombre: 'Led Zeppelin', 
      info: 'Led Zeppelin se formó en 1968 en Londres, Inglaterra, por Robert Plant, Jimmy Page, John Paul Jones y John Bonham. Con una fusión de hard rock, blues y folk, la banda es considerada una de las más influyentes en la historia del rock. Su álbum, Led Zeppelin IV (1971), contiene la famosa canción Stairway to Heaven. Con clásicos como Whole Lotta Love y Kashmir, Led Zeppelin ha vendido más de 300 millones de discos y ha sido un referente en el desarrollo del rock moderno.',
      integrantes: ['Robert Plant', 'Jimmy Page', 'John Paul Jones', 'John Bonham'],
      socialLinks: {
        youtube: 'https://www.youtube.com/user/ledzeppelin',
        instagram: 'https://www.instagram.com/ledzeppelin/',
        facebook: 'https://www.facebook.com/ledzeppelin',
      },
    },
  ];

  const bandaSeleccionada = bandas.find(banda => banda.id === id);

  return (
    <div className="about-container">
      {bandaSeleccionada ? (
        <div className="band">
          <h2>{bandaSeleccionada.nombre}</h2>
          <p>{bandaSeleccionada.info}</p>
          <h3>Integrantes</h3>
          <ul>
            {bandaSeleccionada.integrantes.map((integrante, index) => (
              <li key={index}>{integrante}</li>
            ))}
          </ul>
          <h3>Redes Sociales</h3>
          <div className="social-links">
            {bandaSeleccionada.socialLinks.youtube && (
              <a href={bandaSeleccionada.socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            )}
            {bandaSeleccionada.socialLinks.instagram && (
              <a href={bandaSeleccionada.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            )}
            {bandaSeleccionada.socialLinks.facebook && (
              <a href={bandaSeleccionada.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            )}
          </div>
        </div>
      ) : (
        <p>Banda no encontrada.</p>
      )}
    </div>
  );
}

export default About;

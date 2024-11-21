import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Principal from './components/Principal';
import Home from './pages/Home';
import About from './pages/About';
import Bands from './pages/Bands';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="main-content">
          <Aside />
          <Principal>
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/about/:id" element={<About />} />
              <Route path="/bands" element={<Bands />} />
            </Routes>
          </Principal>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

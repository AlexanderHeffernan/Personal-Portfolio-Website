import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Education from './components/Education.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Cursor from './components/Cursor.js';
import CursorTrail from './components/CursorTrail.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Work />
      <Education />
      <Portfolio />
      <Contact />
      <Cursor />
      <CursorTrail />
    </div>
  );
}

export default App;

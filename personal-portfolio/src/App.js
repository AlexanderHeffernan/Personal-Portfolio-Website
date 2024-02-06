import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Education from './components/Education.js';
import Portfolio from './components/Portfolio.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Work />
      <Education />
      <Portfolio />
    </div>
  );
}

export default App;

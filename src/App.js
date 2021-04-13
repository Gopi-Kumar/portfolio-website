import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project  from './components/Projects'
import Social from './components/Social'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
      <Social/>
    </div>
  );
}

export default App;

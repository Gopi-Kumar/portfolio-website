import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import './styles/css/app.css'
function App() {
  return (
    <div className="App">    
      <Home/>
      <Skills/>
      <Projects/>
      <Certifications/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;

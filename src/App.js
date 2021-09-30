import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import './styles/css/app.css'
function App() {
  return (
    <div className="App">    
      <Home/>
      <Skills/>
      <Projects/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;

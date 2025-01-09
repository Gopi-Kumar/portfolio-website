import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import './styles/css/app.css'
import bgVideo from './videos/bg.mp4'

function App() {
  return (
    <div className="App">

      <video src={bgVideo} autoPlay loop muted className="bg_video">
        Your browser does not support the video tag.
      </video>
      <Home />
      <Skills />
      <Projects />
      <Certifications />
      <Contact/>
    </div>
  );
}

export default App;

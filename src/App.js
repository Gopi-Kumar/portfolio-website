import './styles/app.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project  from './components/Projects'
import Social from './components/Social'
import Message from './components/Message'
function App() {
  return (
    <div className="App">
      <Social/>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
      <Message/>
      <Social/>
    </div>
  );
}

export default App;

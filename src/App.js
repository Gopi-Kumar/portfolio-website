import './styles/app.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project  from './components/Projects'
import Social from './components/Social'
import Message from './components/Message'
import Loader from './components/Loader'
function App() {
  window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader")
    loader.style.display = 'none'
  })

  return (
    <div className="App">
      <Loader/>
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

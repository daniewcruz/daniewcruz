import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skill from "./Components/Skill"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import ParticlesBackground from "./Components/ParticlesBackground"; // Importe o componente

function App() {

  return (
    <>
      <Navbar/>
      <ParticlesBackground />
      <Hero/>
      <About/>
      <Skill/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

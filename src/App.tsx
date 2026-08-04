import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Skill from "./Components/Skill"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import ParticlesBackground from "./Components/ParticlesBackground";
import CustomCursor from "./Components/CustomCursor"
import { useMagneticHover } from "./hooks/useMagneticHover"
import { useScrollTriggerRefresh } from "./hooks/useScrollTriggerRefresh"
import { useTilt3D } from "./hooks/useTilt3D"
import { useSpotlight } from "./hooks/useSpotlight"

// Componente raiz: monta as seções da página e liga os efeitos globais
// (cursor customizado, hover magnético, tilt 3D, spotlight) que precisam
// de um único listener compartilhado por toda a árvore, em vez de um por seção.
function App() {
  useScrollTriggerRefresh();
  useMagneticHover({ selector: ".btn", scale: 1.06 });
  useMagneticHover({ selector: ".icon-wrapper", scale: 1.15, rotate: -8 });
  useTilt3D({ selector: ".project-card-inner" });
  useSpotlight(".project-card, .service-card");

  return (
    <>
      <CustomCursor/>
      <Navbar/>
      <ParticlesBackground />
      <Hero/>
      <About/>
      <Experience/>
      <Skill/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

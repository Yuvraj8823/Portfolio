import { useRef } from "react"
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar , Tech, Works, StarsCanvas, Certifications, Footer, Skills, DevCard } from './components'
const App = () => {
  const width = useRef(window.innerWidth);
 
  return (

    <div>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <DevCard />
        <Skills />
        {width.current>900?<Tech />:<></>}
        
        <Experience />
        <Certifications />
        <Works />
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App

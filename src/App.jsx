import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar , Tech, Works, StarsCanvas, Certifications, Footer, Skills } from './components'
const App = () => {
  

  return (
    <div>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Tech />
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

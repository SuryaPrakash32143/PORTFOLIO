import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Prevent CSS transitions on page load
    document.body.classList.add('preload');
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

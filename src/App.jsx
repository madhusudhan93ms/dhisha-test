import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__brand" onClick={closeMenu} aria-label="Dhisha Realty home">
        <span className="navbar__mark">D</span>
        <span className="navbar__brand-text">
          <strong>Dhisha</strong>
          <small>Real Estate Solutions</small>
        </span>
      </Link>

      <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Primary navigation">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
        <NavLink to="/properties" onClick={closeMenu}>Properties</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <Link to="/contact" className="navbar__cta btn btn-primary" onClick={closeMenu}>
          Get In Touch
        </Link>
      </nav>

      <button
        className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && <div className="navbar__overlay" onClick={closeMenu} />}
    </header>
  )
}

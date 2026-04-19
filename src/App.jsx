import React, { useEffect, useRef } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GlowBlobs from './components/GlowBlobs'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Fun from './pages/Fun'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('page-enter')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ref.current?.classList.remove('page-enter')
          ref.current?.classList.add('page-enter-active')
        })
      })
    }
  }, [location.pathname])

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <GlowBlobs />
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '72px' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  )
}

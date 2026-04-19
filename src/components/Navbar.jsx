import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import Drawprofile from '../assets/Drawprofile.jpg'

const links = [
  { to: '/',         label: 'Home',     icon: 'fa-house' },
  { to: '/projects', label: 'Projects', icon: 'fa-code-branch' },
  { to: '/skills',   label: 'Skills',   icon: 'fa-brain' },
  { to: '/contact',  label: 'Contact',  icon: 'fa-paper-plane' },
  { to: '/fun',      label: 'Fun',      icon: 'fa-star' },
]
export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [open, setOpen]             = useState(false)
  const [indicatorStyle, setStyle]  = useState({})
  const navRef  = useRef(null)
  const location = useLocation()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false) }, [location])
  useEffect(() => {
    if (!navRef.current) return
    const active = navRef.current.querySelector('.nb-link--active')
    if (!active) return
    const nav = navRef.current.getBoundingClientRect()
    const lnk = active.getBoundingClientRect()
    setStyle({
      width:  lnk.width,
      left:   lnk.left - nav.left,
      opacity: 1,
    })
  }, [location.pathname])
  return (
    <header className={`nb ${scrolled ? 'nb--scrolled' : ''}`}>
      <div className="container nb__inner">
        <NavLink to="/" className="nb__logo">
          <img src={Drawprofile} className="nb__photo" />
          <span className="nb__logo-text">
            Zynx<span className="nb__logo-dot">.</span>
          </span>
        </NavLink>
        <nav className="nb__nav" ref={navRef}>
          <div className="nb__indicator" style={indicatorStyle} />
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nb-link ${isActive ? 'nb-link--active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nb__right">
          <a href="https://github.com/zynxftkian" target="_blank" rel="noreferrer" className="nb__gh">
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
          </a>
          <button
            className={`nb__burger ${open ? 'open' : ''}`}
            onClick={() => setOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`nb__drawer ${open ? 'nb__drawer--open' : ''}`}>
        <div className="nb__drawer-inner">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `nb__drawer-link ${isActive ? 'active' : ''}`
              }
            >
              <span className="nb__drawer-icon">
                <i className={`fa-solid ${l.icon}`} />
              </span>
              {l.label}
              <i className="fa-solid fa-chevron-right nb__drawer-arrow" />
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

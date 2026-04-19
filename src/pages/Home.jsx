import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Profile from '../assets/Profile.jpg';

const ROLES = [
  'Associate in Computer Technology Student',
  'Aspiring Full-Stack Developer',
  'Aspiring Programmer',
  'React Learner',
  'Problem Solver',
]
function TypingText({ words }) {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)
  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1200)
      return () => clearTimeout(t)
    }
    const word = words[idx]
    if (!deleting) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 55)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setDeleting(true), 1600)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setPause(true)
        setIdx((idx + 1) % words.length)
      }
    }
  }, [displayed, deleting, pause, idx, words])
  return (
    <span className="typing-text">
      {displayed}
      <span className="cursor" />
    </span>
  )
}
const STATS = [
  { value: '13', label: 'Technologies' },
  { value: '3', label: 'Projects Built' },
  { value: '∞',  label: 'Curiosity' },
]
export default function Home() {
  const heroRef = useRef(null)
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('[data-anim]')
    els?.forEach((el, i) => {
      el.style.animation = `fadeUp 0.6s ease ${i * 0.1 + 0.1}s both`
    })
  }, [])
  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="container hero__content">
          <div data-anim className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="mono" style={{fontSize:'0.78rem', color:'var(--text-dim)'}}>
              Available for opportunities
            </span>
          </div>
          <h1 data-anim className="hero__name">
            Hi, I'm{' '}
            <span className="hero__name-highlight">Kian Emmanuel P. Lorica</span>
            <br />
            <span className="hero__name-nick">AKA Zynx my ign name or KI</span>
          </h1>
          <p data-anim className="hero__role">
            <span style={{color:'var(--text-dim)'}}>// </span>
            <TypingText words={ROLES} />
          </p>
          <p data-anim className="hero__intro">
            Associate in Computer Technology student passionate about building
            clean, functional software. I love turning ideas into reality through
            code.
          </p>
          <div data-anim className="hero__actions">
            <Link to="/projects" className="btn btn-primary">
              <i className="fa-solid fa-code-branch" />
              View My Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <i className="fa-solid fa-paper-plane" />
              Get in Touch
            </Link>
          </div>
          <div data-anim className="hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__orb-wrap" data-anim>
          <div className="hero__orb">
            <div className="hero__orb-ring hero__orb-ring--1" />
            <div className="hero__orb-ring hero__orb-ring--2" />
            <div className="hero__orb-ring hero__orb-ring--3" />
            <div className="hero__orb-core">
              <div className="hero__orb-halo" />
              <div className="hero__orb-frame">
                <div className="hero__orb-inner-ring" />
                <img
                  src={Profile}
                  alt="Kian Emmanuel P. Lorica"
                  className="hero__orb-photo"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hero__orb-fallback" style={{ display: 'none' }}>
                  <span className="mono hero__orb-initials">KL</span>
                </div>
                <div className="hero__orb-shine" />
              </div>
            </div>
            {[
              { icon: 'fa-java',        color: '#f89820' },
              { icon: 'fa-html5',       color: '#e34c26' },
              { icon: 'fa-css3-alt',    color: '#264de4' },
              { icon: 'fa-js',          color: '#f7df1e' },
              { icon: 'fa-react',       color: '#61dafb' },
              { icon: 'fa-php',         color: '#777bb4' },
              { icon: 'fa-solid fa-mobile-screen',     color: '#02569b', brand: false},
              { icon: 'fa-code',        color: '#0175C2', brand: false },
              { icon: 'fa-database',    color: '#336791', brand: false },
            ].map(({ icon, color, brand }, i) => (
              <div key={icon} className={`hero__orbit hero__orbit--${i}`}>
                <i
                  className={`${brand === false ? 'fa-solid' : 'fa-brands'} ${icon}`}
                  style={{ color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="container">
          <div className="home-cards__grid">
            {[
              { to:'/projects', icon:'fa-code-branch', title:'Projects', desc:"See what I've built so far.", color:'var(--accent)' },
              { to:'/skills',   icon:'fa-brain',       title:'Skills',   desc:'Technologies I work with.', color:'var(--accent-2)' },
              { to:'/fun',      icon:'fa-star',        title:'Fun Zone', desc:'Interactive playground.',   color:'var(--accent-3)' },
            ].map(c => (
              <Link key={c.to} to={c.to} className="home-card card">
                <span className="home-card__icon" style={{'--c': c.color}}>
                  <i className={`fa-solid ${c.icon}`} />
                </span>
                <h3 className="home-card__title">{c.title}</h3>
                <p className="home-card__desc">{c.desc}</p>
                <span className="home-card__arrow">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

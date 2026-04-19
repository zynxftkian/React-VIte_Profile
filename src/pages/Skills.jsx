import React, { useEffect, useRef } from 'react'
import './Skills.css'

const SKILLS = [
  { name: 'Java',         icon: 'fa-brands fa-java',         level: 35,  color: '#f89820', cat: 'Language' },
  { name: 'HTML',         icon: 'fa-brands fa-html5',        level: 75,  color: '#e34c26', cat: 'Web' },
  { name: 'CSS',          icon: 'fa-brands fa-css3-alt',     level: 45,  color: '#264de4', cat: 'Web' },
  { name: 'JavaScript',   icon: 'fa-brands fa-js',           level: 25,  color: '#f7df1e', cat: 'Language' },
  { name: 'React',        icon: 'fa-brands fa-react',        level: 10,  color: '#61dafb', cat: 'Framework' },
  { name: 'SQL',          icon: 'fa-solid fa-database',      level: 30,  color: '#336791', cat: 'Database' },
  { name: 'PHP',          icon: 'fa-brands fa-php',          level: 5,   color: '#777bb4', cat: 'Language' },
  { name: 'Flutter',      icon: 'fa-solid fa-mobile-screen', level: 45,  color: '#02569b', cat: 'Framework' },
  { name: 'Dart',         icon: 'fa-solid fa-code',          level: 35,  color: '#0175C2', cat: 'Language' },
  { name: 'Bootstrap',    icon: 'fa-brands fa-bootstrap',    level: 25,  color: '#7952b3', cat: 'Framework' },
  { name: 'C#',           icon: 'fa-solid fa-code',          level: 35,  color: '#9b4f96', cat: 'Language' },
  { name: 'UI/UX',        icon: 'fa-solid fa-palette',       level: 75,  color: '#ff6b6b', cat: 'Design' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind',          level: 25,  color: '#38bdf8', cat: 'Framework' },
]
const TOOLS = [
  { name: 'VS Code',    icon: 'fa-solid fa-code',    color: 'var(--accent-2)' },
  { name: 'GitHub',     icon: 'fa-brands fa-github',  color: 'var(--text)' },
  { name: 'MySQL',      icon: 'fa-solid fa-database', color: '#336791' },
  { name: 'Figma',      icon: 'fa-brands fa-figma',   color: '#a259ff' },
  { name: 'AI',         icon: 'fa-solid fa-robot', color: 'white' },
]
const CATS = ['All', 'Language', 'Web', 'Framework', 'Database', 'Design']
function ProgressBar({ level, color, animated }) {
  return (
    <div className="progress-track">
      <div
        className="progress-fill"
        style={{
          width: animated ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
        }}
      />
    </div>
  )
}
export default function Skills() {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = React.useState(false)
  const [filter, setFilter] = React.useState('All')
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])
  const shown = filter === 'All' ? SKILLS : SKILLS.filter(s => s.cat === filter)
  return (
    <div className="skills-page">
      <div className="container">
        <header className="page-header">
          <p className="section-label">// expertise</p>
          <h1 className="section-title">Skills & Tech</h1>
          <p className="section-sub">
            Technologies I've learned and worked with during my studies.
            Always adding new tools to the belt.
          </p>
          <div className="filter-bar">
            {CATS.map(c => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </header>
        <div className="skills-grid" ref={sectionRef}>
          {shown.map((s, i) => (
            <div
              key={s.name}
              className="skill-item"
              style={{ animationDelay: `${i * 0.07}s`, animation: 'fadeUp 0.5s ease both' }}
            >
              <div className="skill-item__header">
                <div className="skill-item__name">
                  <span className="skill-item__icon" style={{ color: s.color }}>
                    <i className={s.icon} />
                  </span>
                  <span>{s.name}</span>
                </div>
                <span className="skill-item__pct mono" style={{ color: s.color }}>
                  {s.level}%
                </span>
              </div>
              <ProgressBar level={s.level} color={s.color} animated={animated} />
              <span className="skill-item__cat">{s.cat}</span>
            </div>
          ))}
        </div>
        <div className="divider" />
        <div className="tools-section">
          <p className="section-label">// workspace</p>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Tools I Use</h2>
          <div className="tools-grid">
            {TOOLS.map(t => (
              <div key={t.name} className="tool-card card">
                <i className={t.icon} style={{ color: t.color, fontSize: '1.8rem' }} />
                <span className="tool-card__name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div className="learning-section">
          <p className="section-label">// mindset</p>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Currently Learning</h2>
          <div className="learning-chips">
            {['React', 'Bootstrap', 'Tailwind CSS', 'MySQL'].map(l => (
              <span key={l} className="learning-chip">
                <i className="fa-solid fa-arrow-trend-up" style={{ color: 'var(--accent)', fontSize: '0.7rem' }} />
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

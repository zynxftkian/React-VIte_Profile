import React, { useState } from 'react'
import './Projects.css'
import Mobprog from '../assets/Mobprog.png';
import Shuatik from '../assets/Shuatik.png';
import Webprog from '../assets/Webprog.png';

const PROJECTS = [
  {
    id: 1,
    name: 'SHUATIK APP',
    desc: 'App we made by my classmates during shs, This app is inspired by MCDO app, Where users can order our food product',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'MYSQL', 'FIGMA'],
    category: 'WEBSITE',
    icon: 'fa-graduation-cap',
    color: '#f89820',
    image: Shuatik,
    status: 'Completed',
  },
  {
    id: 2,
    name: 'PROFILE APP',
    desc: 'I made this app for my subject MOBPROG, This is where i learn how to use flutter',
    tech: ['FLutter', 'Figma'],
    category: 'FLUTTER',
    icon: 'fa-user-astronaut',
    color: '#60a5fa',
    image: Mobprog,
    status: 'Completed',
  },
  {
    id: 3,
    name: 'PROFILE WEB',
    desc: 'I made this website for my subject WEBPROG, This is where i learned how to use Vite + React (Bootstrap and Tailwind) ',
    tech: ['HTML', 'CSS', 'REACT', 'BOOTSTRAP', 'TAILWIND'],
    category: 'REACT',
    icon: 'fa-book',
    color: '#f472b6',
    image: Webprog,
    status: 'Completed',
  },
]
const FILTERS = ['WEBSITE', 'FLUTTER', 'REACT']
const STATUS_META = {
  'Completed':   { color: 'var(--accent)',        bg: 'rgba(52,216,172,0.1)',  border: 'rgba(52,216,172,0.3)'  },
  'Live':        { color: 'var(--accent-blue)',   bg: 'rgba(96,165,250,0.1)',  border: 'rgba(96,165,250,0.3)'  },
  'In Progress': { color: 'var(--accent-pink)',   bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.3)' },
}
function ProjectCard({ project, delay }) {
  const sm = STATUS_META[project.status]
  return (
    <article
      className="project-card card"
      style={{ animationDelay: `${delay}s`, animation: 'fadeUp 0.5s ease both' }}
    >
      <div
        className="project-card__image"
        style={{ '--c': project.color }}
      >
        {project.image ? (
          <img src={project.image} alt={project.name} className="project-card__img" />
        ) : (
          <div className="project-card__placeholder">
            <div className="project-card__placeholder-icon">
              <i className={`fa-solid ${project.icon}`} style={{ color: project.color }} />
            </div>
            <span className="project-card__placeholder-hint mono">
              Drop screenshot here
            </span>
          </div>
        )}
        <span
          className="project-card__status"
          style={{ background: sm.bg, border: `1px solid ${sm.border}`, color: sm.color }}
        >
          {project.status}
        </span>
      </div>
      <div className="project-card__body">
        <h2 className="project-card__name">{project.name}</h2>
        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__tech">
          {project.tech.map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)
  return (
    <div className="projects-page">
      <div className="container">
        <header className="page-header">
          <p className="section-label">portfolio</p>
          <h1 className="section-title">My Projects</h1>
          <p className="section-sub">
            Things I've built while learning and growing as a developer.
            Each project is a chapter in my coding journey.
          </p>
          <div className="filter-bar">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className="filter-count">
                  {f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === f).length}
                </span>
              </button>
            ))}
          </div>
        </header>
        <div className="projects-grid">
          {shown.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </div>
  )
}

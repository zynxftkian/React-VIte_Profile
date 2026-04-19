import React, { useState, useEffect } from 'react'
import './Fun.css'

const QUOTES = [
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "Optimism is an occupational hazard of programming.", author: "Kent Beck" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
]
function QuoteGenerator() {
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(true)
  const transition = (nextIdx) => {
    setFade(false)
    setTimeout(() => { setIdx(nextIdx); setFade(true) }, 280)
  }
  const next   = () => transition((idx + 1) % QUOTES.length)
  const prev   = () => transition((idx - 1 + QUOTES.length) % QUOTES.length)
  const random = () => transition(Math.floor(Math.random() * QUOTES.length))
  const q = QUOTES[idx]
  return (
    <div className="fun-card">
      <div className="fun-card__header">
        <span className="fun-icon fun-icon--teal"><i className="fa-solid fa-quote-left" /></span>
        <h2 className="fun-card__title">Dev Quotes</h2>
        <span className="fun-counter">{idx + 1} / {QUOTES.length}</span>
      </div>
      <div className={`quote-body ${fade ? 'quote-body--in' : 'quote-body--out'}`}>
        <p className="quote-text">"{q.text}"</p>
        <p className="quote-author">— {q.author}</p>
      </div>
      <div className="fun-actions">
        <button className="btn btn-outline btn-sm" onClick={prev}>
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button className="btn btn-outline btn-sm" onClick={next}>
          <i className="fa-solid fa-arrow-right" /> Next
        </button>
        <button className="btn btn-primary btn-sm" onClick={random}>
          <i className="fa-solid fa-shuffle" /> Random
        </button>
      </div>
    </div>
  )
}
const FACTS = [
  { emoji: '🐛', text: "The first computer bug was a real moth found inside a Harvard Mark II relay in 1947." },
  { emoji: '⚡', text: "JavaScript was created in just 10 days by Brendan Eich in 1995." },
  { emoji: '🌳', text: "Java was originally called 'Oak' — named after a tree outside James Gosling's office." },
  { emoji: '📝', text: "The average developer writes about 10–12 lines of production code per day." },
  { emoji: '🔀', text: "Git was created by Linus Torvalds in 2005 in just two weeks." },
  { emoji: '💻', text: "There are over 700 programming languages in existence today." },
  { emoji: '👩‍💻', text: "Ada Lovelace wrote the first algorithm intended for a machine in 1843." },
  { emoji: '📚', text: "Stack Overflow is visited by 50+ million developers every month." },
  { emoji: '🔍', text: "The term 'debugging' was coined by Grace Hopper after she literally removed a moth from a computer." },
  { emoji: '🐧', text: "The Linux kernel has over 27 million lines of code contributed by thousands of developers worldwide." },
  { emoji: '🤖', text: "The word 'robot' comes from the Czech word 'robota', meaning forced labor." },
  { emoji: '🌐', text: "The first website ever made is still online: info.cern.ch, created by Tim Berners-Lee in 1991." },
]
function DevFacts() {
  const [idx, setIdx] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const next = () => {
    setIdx(i => (i + 1) % FACTS.length)
    setAnimKey(k => k + 1)
  }
  const prev = () => {
    setIdx(i => (i - 1 + FACTS.length) % FACTS.length)
    setAnimKey(k => k + 1)
  }
  const f = FACTS[idx]
  return (
    <div className="fun-card">
      <div className="fun-card__header">
        <span className="fun-icon fun-icon--yellow"><i className="fa-solid fa-lightbulb" /></span>
        <h2 className="fun-card__title">Dev Facts</h2>
        <span className="fun-counter">{idx + 1} / {FACTS.length}</span>
      </div>
      <div className="fact-body" key={animKey}>
        <span className="fact-emoji">{f.emoji}</span>
        <p className="fact-text">{f.text}</p>
      </div>
      <div className="fun-actions">
        <button className="btn btn-outline btn-sm" onClick={prev}>
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button className="btn btn-outline btn-sm" onClick={next}>
          <i className="fa-solid fa-arrow-right" /> Next Fact
        </button>
      </div>
    </div>
  )
}
const TECH_ITEMS = [
  { name: 'Java',       icon: 'fa-brands fa-java',     color: '#f89820', mood: 'Strict but reliable 😤' },
  { name: 'HTML',       icon: 'fa-brands fa-html5',    color: '#e34c26', mood: 'The skeleton of the web 💀' },
  { name: 'CSS',        icon: 'fa-brands fa-css3-alt', color: '#264de4', mood: 'Beautiful chaos 🎨' },
  { name: 'JavaScript', icon: 'fa-brands fa-js',       color: '#f7df1e', mood: 'Wild and unpredictable 🎲' },
  { name: 'React',      icon: 'fa-brands fa-react',    color: '#61dafb', mood: 'Spin me right round 🔄' },
  { name: 'SQL',        icon: 'fa-solid fa-database',  color: '#336791', mood: 'SELECT * FROM my heart 💙' },
  { name: 'Git',        icon: 'fa-brands fa-git-alt',  color: '#f05032', mood: 'git commit -m "plz work" 🙏' },
  { name: 'GitHub',     icon: 'fa-brands fa-github',   color: '#c9d1d9', mood: 'My second home 🏠' },
]
function TechMood() {
  const [active, setActive] = useState(null)
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

  const handleInteract = (name) => {
    if (isTouchDevice) {
      setActive(prev => prev === name ? null : name)
    }
  }

  return (
    <div className="fun-card">
      <div className="fun-card__header">
        <span className="fun-icon fun-icon--blue"><i className="fa-solid fa-face-smile" /></span>
        <h2 className="fun-card__title">Tech Moods</h2>
        <span className="fun-counter mono" style={{ fontSize: '0.72rem' }}>
          {isTouchDevice ? 'tap a tech' : 'hover a tech'}
        </span>
      </div>
      <div className="tech-mood-grid">
        {TECH_ITEMS.map(t => (
          <div
            key={t.name}
            className={`tech-mood-item ${active === t.name ? 'active' : ''}`}
            style={{ '--tc': t.color }}
            onMouseEnter={() => !isTouchDevice && setActive(t.name)}
            onMouseLeave={() => !isTouchDevice && setActive(null)}
            onClick={() => handleInteract(t.name)}
          >
            <i className={t.icon} style={{ color: t.color, fontSize: '1.5rem' }} />
            <span className="tech-mood-name">{t.name}</span>
          </div>
        ))}
      </div>
      <div className="tech-mood-display">
        {active
          ? <p className="tech-mood-text">
              <span style={{ color: TECH_ITEMS.find(t => t.name === active)?.color }}>
                {active}:
              </span>{' '}
              {TECH_ITEMS.find(t => t.name === active)?.mood}
            </p>
          : <p className="tech-mood-placeholder">
              <i className="fa-solid fa-arrow-up" style={{ fontSize: '0.8rem' }} />
              {isTouchDevice ? ' Tap any technology above' : ' Hover over any technology above'}
            </p>
        }
      </div>
    </div>
  )
}
const SHORTCUTS = [
  { question: 'Save a file in VS Code', answer: 'Ctrl + S', options: ['Ctrl + S', 'Ctrl + Z', 'Alt + F4', 'Ctrl + F'] },
  { question: 'Undo last action', answer: 'Ctrl + Z', options: ['Ctrl + Y', 'Ctrl + Z', 'Ctrl + X', 'Ctrl + U'] },
  { question: 'Open terminal in VS Code', answer: 'Ctrl + `', options: ['Ctrl + T', 'Alt + Enter', 'Ctrl + `', 'Shift + F5'] },
  { question: 'Comment / uncomment a line', answer: 'Ctrl + /', options: ['Ctrl + K', 'Ctrl + /', 'Alt + C', 'Ctrl + ;'] },
  { question: 'Select all text', answer: 'Ctrl + A', options: ['Ctrl + A', 'Ctrl + E', 'Ctrl + S', 'Ctrl + D'] },
  { question: 'Find in file', answer: 'Ctrl + F', options: ['Ctrl + H', 'Ctrl + G', 'Ctrl + F', 'Ctrl + L'] },
  { question: 'Format document in VS Code', answer: 'Shift + Alt + F', options: ['Ctrl + F', 'Shift + Alt + F', 'Ctrl + Shift + P', 'Alt + Enter'] },
  { question: 'Duplicate a line down in VS Code', answer: 'Shift + Alt + ↓', options: ['Ctrl + D', 'Alt + ↓', 'Shift + Alt + ↓', 'Ctrl + Shift + D'] },
]
function ShortcutQuiz() {
  const [qIdx, setQIdx]       = useState(0)
  const [picked, setPicked]   = useState(null)
  const [score, setScore]     = useState(0)
  const [done, setDone]       = useState(false)
  const q = SHORTCUTS[qIdx]
  const choose = (opt) => {
    if (picked) return
    setPicked(opt)
    if (opt === q.answer) setScore(s => s + 1)
    setTimeout(() => {
      if (qIdx + 1 < SHORTCUTS.length) {
        setQIdx(i => i + 1)
        setPicked(null)
      } else {
        setDone(true)
      }
    }, 900)
  }
  const restart = () => { setQIdx(0); setPicked(null); setScore(0); setDone(false) }
  return (
    <div className="fun-card">
      <div className="fun-card__header">
        <span className="fun-icon fun-icon--purple"><i className="fa-solid fa-keyboard" /></span>
        <h2 className="fun-card__title">Shortcut Quiz</h2>
        {!done && <span className="fun-counter">{qIdx + 1} / {SHORTCUTS.length}</span>}
      </div>
      {!done ? (
        <>
          <div className="quiz-question">
            <p className="quiz-q-label mono">What shortcut does this?</p>
            <p className="quiz-q-text">{q.question}</p>
          </div>
          <div className="quiz-options">
            {q.options.map(opt => {
              let cls = 'quiz-opt'
              if (picked) {
                if (opt === q.answer) cls += ' quiz-opt--correct'
                else if (opt === picked) cls += ' quiz-opt--wrong'
              }
              return (
                <button key={opt} className={cls} onClick={() => choose(opt)}>
                  <span className="mono">{opt}</span>
                </button>
              )
            })}
          </div>
          <div className="quiz-score-row">
            <i className="fa-solid fa-star" style={{ color: '#f0b429', fontSize: '0.8rem' }} />
            <span style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>Score: {score}</span>
          </div>
        </>
      ) : (
        <div className="quiz-done">
          <span className="quiz-done-emoji">{score >= 6 ? '🏆' : score >= 4 ? '😎' : '📚'}</span>
          <p className="quiz-done-score">{score} / {SHORTCUTS.length}</p>
          <p className="quiz-done-msg" style={{ color: 'var(--text-dim)' }}>
            {score === SHORTCUTS.length ? 'Perfect score! Shortcut master!' :
              score >= 6 ? 'Great job! Almost there.' :
              score >= 4 ? 'Not bad — keep practicing!' :
              'Time to learn those shortcuts! 📖'}
          </p>
          <button className="btn btn-primary btn-sm" onClick={restart}>
            <i className="fa-solid fa-rotate-right" /> Try Again
          </button>
        </div>
      )}
    </div>
  )
}
export default function Fun() {
  return (
    <div className="fun-page">
      <div className="container">
        <header className="page-header">
          <p className="section-label">playground</p>
          <h1 className="section-title">Fun Zone 🎮</h1>
          <p className="section-sub">
            A little corner of the portfolio to have some fun. Quotes, facts, tech moods, and a quiz!
          </p>
        </header>

        <div className="fun-grid">
          <QuoteGenerator />
          <DevFacts />
          <TechMood />
          <ShortcutQuiz />
        </div>
      </div>
    </div>
  )
}

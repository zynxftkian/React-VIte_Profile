import React, { useState } from 'react'
import './Contact.css'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/zynxftkian',       icon: 'fa-brands fa-github',   color: '#ffffff', desc: 'zynxftkian' },
  { label: 'Email',    href: 'mailto:alphakian23@gmail.com',        icon: 'fa-solid fa-envelope',  color: '#EA4335', desc: 'alphakian23@gmail.com' },
  { label: 'Facebook', href: 'https://www.facebook.com/Kianzzzzzz', icon: 'fa-brands fa-facebook', color: '#1877F2', desc: 'Kian Lorica' },
]
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name = 'Name is required.'
    if (!form.email.trim())   e.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }
  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSent(true)
  }
  const set = (k) => (ev) => {
    setForm(p => ({ ...p, [k]: ev.target.value }))
    if (errors[k]) setErrors(p => ({ ...p, [k]: '' }))
  }
  return (
    <div className="contact-page">
      <div className="container">
        <header className="page-header">
          <p className="section-label">// let's talk</p>
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-sub">
            Have a question, collaboration idea, or just want to say hi?
            My inbox is always open.
          </p>
        </header>
        <div className="contact-layout">
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <i className="fa-solid fa-circle-check" />
                </div>
                <h2>Message Sent!</h2>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name:'', email:'', message:'' }) }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className={`field ${errors.name ? 'field--error' : ''}`}>
                  <label className="field__label">
                    <i className="fa-solid fa-user" /> Name
                  </label>
                  <input
                    className="field__input"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={set('name')}
                  />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </div>
                <div className={`field ${errors.email ? 'field--error' : ''}`}>
                  <label className="field__label">
                    <i className="fa-solid fa-envelope" /> Email
                  </label>
                  <input
                    className="field__input"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set('email')}
                  />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </div>
                <div className={`field ${errors.message ? 'field--error' : ''}`}>
                  <label className="field__label">
                    <i className="fa-solid fa-comment" /> Message
                  </label>
                  <textarea
                    className="field__input field__textarea"
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={set('message')}
                    rows={5}
                  />
                  {errors.message && <span className="field__error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary contact-form__submit">
                  <i className="fa-solid fa-paper-plane" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="contact-info">
            <div className="contact-info__card card">
              <p className="section-label" style={{marginBottom:'20px'}}>// direct channels</p>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} className="social-row" target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <span className="social-row__icon">
                    <i className={s.icon} style={{ color: s.color }} />
                  </span>
                  <div className="social-row__text">
                    <span className="social-row__label">{s.label}</span>
                    <span className="social-row__desc">{s.desc}</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square social-row__arrow" />
                </a>
              ))}
            </div>
            <div className="contact-info__note card">
              <i className="fa-solid fa-clock" style={{ color: 'var(--accent)', fontSize: '1.3rem' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '4px' }}>
                  Response Time
                </p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>
                  I usually respond within 24–48 hours. Based in the Philippines 🇵🇭
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
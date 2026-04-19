import { NavLink } from 'react-router-dom'
import './Footer.css'
import Drawprofile from '../assets/Drawprofile.jpg';
const SOCIALS = [
  { href: 'https://github.com/zynxftkian',       icon: 'fa-brands fa-github',   label: 'GitHub'   },
  { href: 'mailto:alphakian23@gmail.com',   icon: 'fa-solid fa-envelope',  label: 'Email'    },
  { href: 'https://www.facebook.com/Kianzzzzzz/',     icon: 'fa-brands fa-facebook', label: 'Facebook' },
]
const NAV_COLS = [
  {
    heading: 'Pages',
    links: [
      { to: '/',         label: 'Home'     },
      { to: '/projects', label: 'Projects' },
      { to: '/skills',   label: 'Skills'   },
      { to: '/contact',  label: 'Contact'  },
      { to: '/fun',      label: 'Fun Zone' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { href: 'https://github.com/zynxftkian',     label: 'GitHub',   icon: 'fa-brands fa-github'   },
      { href: 'mailto:alphakian23@gmail.com', label: 'Email',    icon: 'fa-solid fa-envelope'  },
      { href: 'https://www.facebook.com/Kianzzzzzz/',   label: 'Facebook', icon: 'fa-brands fa-facebook' },
    ],
  },
]
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="ft">
      <div className="ft__topbar" />
      <div className="container">
        <div className="ft__body">
          <div className="ft__brand">
            <div className="ft__brand-logo">
              <div className="ft__brand-icon">
                <img src={Drawprofile} className="logo" />
              </div>
              <span className="ft__brand-name">
                Zynx<span className="ft__brand-dot">.</span>
              </span>
            </div>
            <p className="ft__brand-bio">
              Associate in Computer Technology student building clean, functional software — one commit at a time.
            </p>
            <div className="ft__brand-socials">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} className="ft__social-btn" target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
          {NAV_COLS.map(col => (
            <div key={col.heading} className="ft__col">
              <p className="ft__col-heading">{col.heading}</p>
              <ul className="ft__col-list">
                {col.links.map(l => (
                  <li key={l.label}>
                    {l.to ? (
                      <NavLink to={l.to} className="ft__col-link">
                        {l.label}
                      </NavLink>
                    ) : (
                      <a href={l.href} className="ft__col-link" target="_blank" rel="noreferrer">
                        {l.icon && <i className={l.icon} />}
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="ft__status-card">
            <div className="ft__status-dot" />
            <div>
              <p className="ft__status-title">Open to Opportunities</p>
              <p className="ft__status-sub">Internships · Collab · Freelance</p>
            </div>
          </div>
        </div>
        <div className="ft__bottom">
          <span className="ft__copy">
            © {year} Kian Emmanuel P. Lorica
          </span>
          <span className="ft__made">
            Made with <i className="fa-solid fa-heart ft__heart" /> using React &amp; Vite
          </span>
          <span className="ft__stack mono">
            v1.0 · Philippines 🇵🇭
          </span>
        </div>
      </div>
    </footer>
  )
}

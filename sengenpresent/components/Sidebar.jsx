import { slides, SECTIONS } from '../slides/index.js'
import { X } from 'lucide-react'

export default function Sidebar({ current, goTo, open, onClose }) {
  const progress = ((current + 1) / slides.length) * 100

  const grouped = SECTIONS.map(sec => ({
    ...sec,
    slides: slides.filter(s => s.section === sec.num),
  }))

  return (
    <aside className={`sidebar${!open ? ' hidden' : ''}`}>
      {/* Header */}
      <div className="sidebar-header">
        <div className="logo-mark">SG</div>
        <div className="logo-text">
          <div className="logo-title">SEN-GEN</div>
          <div className="logo-sub">Thesis Defense Presentation</div>
        </div>
        <button
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Hide sidebar"
          title="Hide sidebar"
        >
          <X size={13} />
        </button>
      </div>

      {/* Slide list */}
      <div className="sidebar-sections">
        {grouped.map(sec => (
          <div key={sec.num} className="section-group">
            <div className="section-label">{sec.num} · {sec.title}</div>
            {sec.slides.map((slide) => {
              const idx = slides.indexOf(slide)
              const isActive = idx === current
              return (
                <button
                  key={slide.id}
                  className={`slide-btn${isActive ? ' active' : ''}`}
                  onClick={() => goTo(idx)}
                  title={slide.title}
                >
                  <span className="slide-num">{idx + 1}</span>
                  <span className="slide-title-text">{slide.title}</span>
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="sidebar-progress">
        <div className="progress-label">
          <span>Progress</span>
          <span>{current + 1} / {slides.length}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </aside>
  )
}

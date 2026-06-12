import { Moon, Sun, FileText, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react'
import { slides } from '../slides/index.js'

export function TopBar({ current, total, prev, next, dark, setDark, notesOpen, setNotesOpen }) {
  const slide = slides[current]

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }

  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-brand">SEN-GEN</span>
        <span className="topbar-sep">·</span>
        <span className="topbar-section">§{slide.section}</span>
        <span className="topbar-sep topbar-hide-sm">·</span>
        <span className="topbar-hide-sm">{slide.sectionTitle}</span>
      </div>

      <div className="topbar-right">
        <button
          className="icon-btn nav-btn"
          onClick={prev}
          disabled={current === 0}
          title="Previous (←)"
          aria-label="Previous slide"
        >
          <ChevronLeft size={14} />
        </button>

        <span className="topbar-counter">
          {current + 1}<span className="topbar-total">/{total}</span>
        </span>

        <button
          className="icon-btn nav-btn"
          onClick={next}
          disabled={current === total - 1}
          title="Next (→)"
          aria-label="Next slide"
        >
          <ChevronRight size={14} />
        </button>

        <div className="topbar-divider" />

        <button
          className="icon-btn"
          onClick={() => setNotesOpen(o => !o)}
          title="Speaker notes (N)"
          aria-label="Toggle speaker notes"
          style={{ background: notesOpen ? 'var(--bg-overlay)' : undefined }}
        >
          <FileText size={14} />
        </button>
        <button
          className="icon-btn"
          onClick={() => setDark(d => !d)}
          title="Toggle dark mode"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <button
          className="icon-btn topbar-hide-sm"
          onClick={handleFullscreen}
          title="Fullscreen (F11)"
          aria-label="Toggle fullscreen"
        >
          <Maximize2 size={14} />
        </button>
      </div>
    </div>
  )
}

export function SpeakerNotes({ slide, open }) {
  return (
    <div className={`notes-panel${open ? ' open' : ''}`} role="region" aria-label="Speaker notes">
      <div className="notes-title">Speaker Notes — {slide.title}</div>
      <div className="notes-text">{slide.notes || 'No speaker notes for this slide.'}</div>
    </div>
  )
}

export function KeyboardHint() {
  return (
    <div style={{
      position:'fixed', bottom:12, right:12, zIndex:25,
      display:'flex', gap:4, alignItems:'center',
      fontSize:10, color:'var(--text-muted)',
      background:'var(--bg-card)', border:'1px solid var(--border)',
      borderRadius:8, padding:'4px 8px',
      boxShadow:'var(--shadow-sm)',
    }}>
      <span>← → navigate &nbsp;·&nbsp; N notes &nbsp;·&nbsp; E evidence &nbsp;·&nbsp; Home/End</span>
    </div>
  )
}

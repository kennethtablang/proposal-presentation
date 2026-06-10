import { Moon, Sun, FileText, Maximize2, ChevronLeft, ChevronRight, Keyboard } from 'lucide-react'
import { slides } from '../slides/index.js'

export function TopBar({ current, dark, setDark, notesOpen, setNotesOpen }) {
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
        <span>SEN-GEN</span>
        <span className="topbar-sep">·</span>
        <span className="topbar-section">Section {slide.section}</span>
        <span className="topbar-sep">·</span>
        <span>{slide.sectionTitle}</span>
      </div>
      <div className="topbar-right">
        <button
          className="icon-btn"
          onClick={() => setNotesOpen(o => !o)}
          title="Toggle speaker notes (N)"
          aria-label="Toggle speaker notes"
          style={{ background: notesOpen ? 'var(--bg-overlay)' : undefined }}
        >
          <FileText size={15} />
        </button>
        <button
          className="icon-btn"
          onClick={() => setDark(d => !d)}
          title="Toggle dark mode"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button
          className="icon-btn"
          onClick={handleFullscreen}
          title="Fullscreen (F11)"
          aria-label="Toggle fullscreen"
        >
          <Maximize2 size={15} />
        </button>
      </div>
    </div>
  )
}

export function Controls({ current, total, prev, next }) {
  return (
    <div className="controls">
      <button
        className="ctrl-btn"
        onClick={prev}
        disabled={current === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft size={15} /> Prev
      </button>

      <div className="slide-counter">
        {current + 1} <span style={{ color:'var(--text-muted)' }}>/ {total}</span>
      </div>

      <button
        className="ctrl-btn primary"
        onClick={next}
        disabled={current === total - 1}
        aria-label="Next slide"
      >
        Next <ChevronRight size={15} />
      </button>
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
      position:'fixed', bottom:16, right:16, zIndex:25,
      display:'flex', gap:4, alignItems:'center',
      fontSize:10, color:'var(--text-muted)',
      background:'var(--bg-card)', border:'1px solid var(--border)',
      borderRadius:8, padding:'5px 10px',
      boxShadow:'var(--shadow-sm)',
    }}>
      <Keyboard size={11} />
      <span>← → navigate &nbsp;·&nbsp; N notes &nbsp;·&nbsp; Home/End</span>
    </div>
  )
}

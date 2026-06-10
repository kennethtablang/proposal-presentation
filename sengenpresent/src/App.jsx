import { useState } from 'react'
import './styles/globals.css'
import { usePresentation } from './hooks/usePresentation.js'
import { useDarkMode } from './hooks/useDarkMode.js'
import { slides } from './slides/index.js'
import MeshBackground from './components/MeshBackground.jsx'
import Sidebar from './components/Sidebar.jsx'
import SlideEngine from './components/SlideEngine.jsx'
import { TopBar, Controls, SpeakerNotes, KeyboardHint } from './components/Controls.jsx'
import { ChevronRight } from 'lucide-react'

export default function App() {
  const { current, direction, total, goTo, next, prev, notesOpen, setNotesOpen } = usePresentation()
  const [dark, setDark] = useDarkMode()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const slide = slides[current]

  return (
    <div className="app">
      <MeshBackground />
      <Sidebar current={current} goTo={goTo} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="stage">
        <TopBar
          current={current}
          dark={dark}
          setDark={setDark}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
        />

        <div className="slide-area">
          {!sidebarOpen && (
            <button
              className="sidebar-peek-btn"
              onClick={() => setSidebarOpen(true)}
              title="Show slide navigator"
              aria-label="Show sidebar"
            >
              <ChevronRight size={14} />
            </button>
          )}
          <div className="slide-wrapper">
            <SlideEngine current={current} direction={direction} />
          </div>
        </div>

        <Controls current={current} total={total} prev={prev} next={next} />
      </main>

      <SpeakerNotes slide={slide} open={notesOpen} />
      <KeyboardHint />
    </div>
  )
}

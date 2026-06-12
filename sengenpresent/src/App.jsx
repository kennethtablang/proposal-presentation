import { useState, useEffect, useRef } from 'react'
import './styles/globals.css'
import { usePresentation } from './hooks/usePresentation.js'
import { useDarkMode } from './hooks/useDarkMode.js'
import { slides } from './slides/index.js'
import MeshBackground from './components/MeshBackground.jsx'
import Sidebar from './components/Sidebar.jsx'
import SlideEngine from './components/SlideEngine.jsx'
import SlideScaler from './components/SlideScaler.jsx'
import { TopBar, SpeakerNotes, KeyboardHint } from './components/Controls.jsx'
import PresenterPanel from './components/PresenterPanel.jsx'
import { ChevronRight } from 'lucide-react'

export default function App() {
  const { current, direction, total, goTo, next, prev, notesOpen, setNotesOpen } = usePresentation()
  const [dark, setDark] = useDarkMode()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [presenterMode, setPresenterMode] = useState(false)
  const channelRef = useRef(null)

  // Broadcast slide index whenever it changes in presenter mode
  useEffect(() => {
    if (presenterMode && channelRef.current) {
      channelRef.current.postMessage({ type: 'slide', index: current })
    }
  }, [current, presenterMode])

  // Broadcast theme whenever dark toggles in presenter mode
  useEffect(() => {
    if (presenterMode && channelRef.current) {
      channelRef.current.postMessage({ type: 'theme', dark })
    }
  }, [dark, presenterMode])

  const enterPresenter = () => {
    const base = window.location.origin + window.location.pathname
    const ch = new BroadcastChannel('senger-presenter')
    channelRef.current = ch
    window.open(`${base}?mode=display`, '_blank')
    // Send initial theme after a short delay so the display tab has time to load
    setTimeout(() => ch.postMessage({ type: 'theme', dark }), 800)
    setPresenterMode(true)
  }

  const exitPresenter = () => {
    channelRef.current?.close()
    channelRef.current = null
    setPresenterMode(false)
  }

  if (presenterMode) {
    return (
      <PresenterPanel
        current={current}
        direction={direction}
        total={total}
        goTo={goTo}
        next={next}
        prev={prev}
        onExit={exitPresenter}
        dark={dark}
        setDark={setDark}
      />
    )
  }

  const slide = slides[current]

  return (
    <div className="app">
      <MeshBackground />
      <Sidebar current={current} goTo={goTo} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="stage">
        <TopBar
          current={current}
          total={total}
          prev={prev}
          next={next}
          dark={dark}
          setDark={setDark}
          notesOpen={notesOpen}
          setNotesOpen={setNotesOpen}
          onPresenter={enterPresenter}
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
            <SlideScaler>
              <SlideEngine current={current} direction={direction} />
            </SlideScaler>
          </div>
        </div>
      </main>

      <SpeakerNotes slide={slide} open={notesOpen} />
      <KeyboardHint />
    </div>
  )
}

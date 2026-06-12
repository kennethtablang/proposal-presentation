import { useState, useEffect, useRef } from 'react'
import './styles/globals.css'
import MeshBackground from './components/MeshBackground.jsx'
import SlideScaler from './components/SlideScaler.jsx'
import SlideEngine from './components/SlideEngine.jsx'

export default function DisplayApp() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [ready, setReady] = useState(false)
  const prevRef = useRef(0)

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', 'display')
    return () => document.documentElement.removeAttribute('data-mode')
  }, [])

  useEffect(() => {
    const ch = new BroadcastChannel('senger-presenter')
    ch.onmessage = (e) => {
      if (e.data.type === 'slide') {
        const idx = e.data.index
        setDirection(idx > prevRef.current ? 1 : -1)
        prevRef.current = idx
        setCurrent(idx)
      } else if (e.data.type === 'theme') {
        document.documentElement.setAttribute('data-theme', e.data.dark ? 'dark' : 'light')
      }
    }
    return () => ch.close()
  }, [])

  const handleClick = () => {
    if (!ready) {
      document.documentElement.requestFullscreen?.()
      setReady(true)
    }
  }

  return (
    <div
      onClick={handleClick}
      style={{ width:'100vw', height:'100vh', background:'#111827', position:'relative', overflow:'hidden', cursor: ready ? 'none' : 'pointer' }}
    >
      <MeshBackground />
      <SlideScaler>
        <SlideEngine current={current} direction={direction} />
      </SlideScaler>

      {!ready && (
        <div style={{
          position:'absolute', inset:0, zIndex:200, display:'flex', alignItems:'center', justifyContent:'center',
          background:'rgba(0,0,0,0.78)', backdropFilter:'blur(6px)',
        }}>
          <div style={{ textAlign:'center', color:'#fff', fontFamily:'Poppins,sans-serif' }}>
            <div style={{ fontSize:60, marginBottom:16, opacity:0.85 }}>▶</div>
            <div style={{ fontSize:22, fontWeight:700 }}>Click anywhere to begin</div>
            <div style={{ fontSize:14, color:'rgba(255,255,255,0.45)', marginTop:8 }}>
              Slides sync automatically from Presenter View
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

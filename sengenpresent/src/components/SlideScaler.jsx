import { useRef, useState, useEffect } from 'react'

const DESIGN_W = 1280
const DESIGN_H = 720

export default function SlideScaler({ children }) {
  const containerRef = useRef(null)
  const [scale, setScale]   = useState(1)
  const [ready, setReady]   = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => {
      const w = el.offsetWidth
      const h = el.offsetHeight
      setScale(Math.min(w / DESIGN_W, h / DESIGN_H))
      setReady(true)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
      <div style={{
        width:  DESIGN_W,
        height: DESIGN_H,
        position: 'absolute',
        top:  '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        transformOrigin: 'center center',
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.1s',
      }}>
        {children}
      </div>
    </div>
  )
}

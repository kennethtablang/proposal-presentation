import { useState, useEffect, useRef } from 'react'
import { slides } from '../slides/index.js'
import SlideEngine from './SlideEngine.jsx'
import SlideScaler from './SlideScaler.jsx'
import MeshBackground from './MeshBackground.jsx'
import { ChevronLeft, ChevronRight, X, Clock, Monitor, Sun, Moon } from 'lucide-react'

export default function PresenterPanel({ current, direction, total, goTo, next, prev, onExit, dark, setDark }) {
  const [elapsed, setElapsed] = useState(0)
  const activeRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    activeRef.current?.scrollIntoView({ inline:'nearest', block:'nearest', behavior:'smooth' })
  }, [current])

  const slide = slides[current]
  const hasNext = current + 1 < total
  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0')
  const ss = String(elapsed % 60).padStart(2, '0')

  const panelBg    = '#0d1117'
  const panelBorder = 'rgba(255,255,255,0.08)'
  const labelStyle = { fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:1.8, marginBottom:7 }

  return (
    <div style={{
      width:'100vw', height:'100vh', display:'flex', flexDirection:'column',
      background: panelBg, color:'#e8edf5', fontFamily:'Poppins,sans-serif',
      overflow:'hidden', userSelect:'none',
    }}>

      {/* ── Top Bar ─────────────────────────────────────── */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0 20px', height:48, flexShrink:0,
        background:'rgba(255,255,255,0.04)', borderBottom:`1px solid ${panelBorder}`,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <Monitor size={15} style={{ color:'#699acd' }} />
          <span style={{ fontWeight:700, fontSize:14 }}>Presenter View</span>
          <span style={{ color:'rgba(255,255,255,0.2)', fontSize:13 }}>·</span>
          <span style={{ fontSize:13, color:'rgba(255,255,255,0.4)' }}>Slide {current+1} of {total}</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{ display:'flex', alignItems:'center', gap:7, fontVariantNumeric:'tabular-nums' }}>
            <Clock size={13} style={{ color:'rgba(255,255,255,0.35)' }} />
            <span style={{ fontSize:20, fontWeight:700 }}>{mm}:{ss}</span>
          </div>
          <button
            onClick={() => setDark(d => !d)}
            title="Toggle dark / light mode"
            style={{
              width:34, height:34, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center',
              background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)',
              color:'#e8edf5', cursor:'pointer',
            }}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={onExit}
            style={{
              display:'flex', alignItems:'center', gap:6, padding:'5px 14px',
              background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)',
              borderRadius:8, color:'#f87171', fontWeight:600, fontSize:13,
              cursor:'pointer', fontFamily:'Poppins,sans-serif',
            }}
          >
            <X size={13} /> Exit Presenter View
          </button>
        </div>
      </div>

      {/* ── Main Area ───────────────────────────────────── */}
      <div style={{ flex:1, display:'flex', overflow:'hidden', minHeight:0 }}>

        {/* Left — Current Slide */}
        <div style={{
          flex:'0 0 62%', display:'flex', flexDirection:'column',
          padding:'14px 14px 10px', gap:12, borderRight:`1px solid ${panelBorder}`,
        }}>
          <div style={{
            flex:1, minHeight:0, borderRadius:12, overflow:'hidden', position:'relative',
            border:'2px solid rgba(105,154,205,0.35)', boxShadow:'0 8px 32px rgba(0,0,0,0.45)',
          }}>
            <div style={{ pointerEvents:'none', width:'100%', height:'100%', position:'relative' }}>
              <MeshBackground />
              <SlideScaler>
                <SlideEngine current={current} direction={direction} />
              </SlideScaler>
            </div>
          </div>

          {/* Nav buttons */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, flexShrink:0 }}>
            <button
              onClick={prev} disabled={current===0}
              style={{
                width:44, height:44, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center',
                background:'rgba(255,255,255,0.07)', border:`1px solid ${panelBorder}`,
                color: current===0 ? 'rgba(255,255,255,0.18)' : '#e8edf5',
                cursor: current===0 ? 'default' : 'pointer',
              }}
            ><ChevronLeft size={20} /></button>
            <span style={{ fontSize:14, color:'rgba(255,255,255,0.4)', minWidth:72, textAlign:'center' }}>
              {current+1} / {total}
            </span>
            <button
              onClick={next} disabled={current===total-1}
              style={{
                width:44, height:44, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center',
                background:'rgba(255,255,255,0.07)', border:`1px solid ${panelBorder}`,
                color: current===total-1 ? 'rgba(255,255,255,0.18)' : '#e8edf5',
                cursor: current===total-1 ? 'default' : 'pointer',
              }}
            ><ChevronRight size={20} /></button>
          </div>
        </div>

        {/* Right — Next Slide + Notes */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'14px', gap:14, overflow:'hidden' }}>

          {/* Next slide */}
          <div style={{ flexShrink:0 }}>
            <div style={labelStyle}>Next Slide</div>
            {hasNext ? (
              <>
                <div style={{
                  borderRadius:10, overflow:'hidden', height:152, position:'relative',
                  border:`1.5px solid ${panelBorder}`, boxShadow:'0 4px 20px rgba(0,0,0,0.4)',
                }}>
                  <div style={{ pointerEvents:'none', width:'100%', height:'100%', position:'relative' }}>
                    <MeshBackground />
                    <SlideScaler>
                      <SlideEngine current={current+1} direction={1} />
                    </SlideScaler>
                  </div>
                </div>
                <div style={{ marginTop:5, fontSize:12, color:'rgba(255,255,255,0.38)', fontStyle:'italic', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                  ↑ {slides[current+1].title}
                </div>
              </>
            ) : (
              <div style={{
                height:120, borderRadius:10, border:`1.5px solid ${panelBorder}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:13, color:'rgba(255,255,255,0.22)', fontStyle:'italic',
              }}>
                End of presentation
              </div>
            )}
          </div>

          {/* Speaker notes */}
          <div style={{ flex:1, display:'flex', flexDirection:'column', minHeight:0 }}>
            <div style={labelStyle}>Speaker Notes</div>
            <div style={{
              flex:1, overflowY:'auto', fontSize:14, lineHeight:1.8,
              color:'rgba(255,255,255,0.72)', padding:'12px 15px',
              background:'rgba(255,255,255,0.04)', borderRadius:10,
              border:`1px solid ${panelBorder}`, minHeight:0,
            }}>
              {slide.notes
                ? slide.notes.split('\n\n').map((para, i) => (
                    <p key={i} style={{ margin:'0 0 12px' }}>{para}</p>
                  ))
                : <em style={{ color:'rgba(255,255,255,0.25)' }}>No notes for this slide.</em>
              }
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom — Slide Strip ─────────────────────────── */}
      <div style={{
        flexShrink:0, borderTop:`1px solid ${panelBorder}`,
        padding:'7px 12px', display:'flex', gap:5, overflowX:'auto', alignItems:'center',
      }}>
        {slides.filter(s => !s.hidden).map((s) => {
          const idx = slides.indexOf(s)
          const isActive = idx === current
          return (
            <button
              key={s.id}
              ref={isActive ? activeRef : null}
              onClick={() => goTo(idx)}
              title={s.title}
              style={{
                flexShrink:0, padding:'4px 10px', borderRadius:6, cursor:'pointer',
                border:`1.5px solid ${isActive ? '#699acd' : 'rgba(255,255,255,0.08)'}`,
                background: isActive ? 'rgba(105,154,205,0.2)' : 'rgba(255,255,255,0.03)',
                color: isActive ? '#e8edf5' : 'rgba(255,255,255,0.36)',
                fontSize:11, fontWeight: isActive ? 700 : 400,
                fontFamily:'Poppins,sans-serif',
                whiteSpace:'nowrap', maxWidth:130,
                overflow:'hidden', textOverflow:'ellipsis',
              }}
            >
              {idx+1}. {s.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

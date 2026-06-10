import { useState, useCallback, useEffect } from 'react'
import { slides } from '../slides/index.js'

export function usePresentation() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1) // 1=forward, -1=backward
  const [notesOpen, setNotesOpen] = useState(false)

  const total = slides.length

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= total) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current, total])

  const next = useCallback(() => goTo(current + 1), [goTo, current])
  const prev = useCallback(() => goTo(current - 1), [goTo, current])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault(); next()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault(); prev()
      } else if (e.key === 'n' || e.key === 'N') {
        setNotesOpen(o => !o)
      } else if (e.key === 'Escape') {
        setNotesOpen(false)
      } else if (e.key === 'Home') {
        goTo(0)
      } else if (e.key === 'End') {
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo, total])

  return { current, direction, total, goTo, next, prev, notesOpen, setNotesOpen }
}

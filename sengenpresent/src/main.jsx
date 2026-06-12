import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DisplayApp from './DisplayApp.jsx'

const isDisplay = new URLSearchParams(window.location.search).get('mode') === 'display'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isDisplay ? <DisplayApp /> : <App />}
  </StrictMode>
)

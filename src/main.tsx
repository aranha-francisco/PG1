import 'aranha-pwa-kit/shell.css'
import 'aranha-pwa-kit/liquid-tab-bar.css'
import './index.css'
import { markStandalone } from 'aranha-pwa-kit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

markStandalone()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

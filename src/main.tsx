/**
 * Main Entry Point
 * Application entry point with React and routing setup
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Set dark mode as default before React renders
if (typeof document !== 'undefined') {
  const savedMode = localStorage.getItem('biomindz-theme-mode')
  if (!savedMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.toggle('dark', savedMode === 'dark')
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

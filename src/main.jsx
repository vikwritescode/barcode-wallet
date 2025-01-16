import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
const ref = () => root.render(
  <StrictMode className="dark:bg-gray-900">
    <App />
  </StrictMode>)

// setInterval(ref, 500)
ref()
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import FlagAnimation from './FlagAnimation.jsx'
import WordAnimation from './WordAnimation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flag" element={<FlagAnimation />} />
        <Route path="/word" element={<WordAnimation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

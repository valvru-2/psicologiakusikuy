import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter } from 'react-router'
import { MainApp } from './pages/MainApp'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
)
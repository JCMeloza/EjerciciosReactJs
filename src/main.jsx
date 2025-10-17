// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css' // Aquí importas Tailwind (si lo configuraste)

import App from './App'

// Importa tus ejercicios
import Ejercicio1 from './exercises/Ejercicio1'
import Ejercicio2 from './exercises/Ejercicio2'
//import Ejercicio2 from './exercises/Ejercicio2'
// Agrega todos los ejercicios que vayas usando

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// src/App.tsx

import { Routes, Route} from 'react-router-dom'
import Home from './Home.tsx'
import Estaditicas from './Estadisticas.tsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estadisticas" element={<Estaditicas />} />
        <Route path="/personajes" element={<h1>Personajes</h1>} />
        <Route path="/enemigos" element={<h1>Enemigos</h1>} />
      </Routes>
    </div>
  )
}
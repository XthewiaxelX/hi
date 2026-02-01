// src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='contenedor_Links'>
        <nav>
      <ul>
        <li>
          <Link to="/estadisticas">Estadisticas</Link>
        </li>
        <li>
          <Link to="/personajes">Personajes</Link>
        </li>
        <li>
          <Link to="/enemigos">Enemigos</Link>
        </li>
        
      </ul>
      </nav>
    </div>
  )
}
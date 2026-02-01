import React from 'react';
import './Estadisticas.css';

const Estadisticas = () => {
  const data = [
    { titulo: "Ataque", desc: "Daño que realiza el personaje al enemigo." },
    { titulo: "Defensa", desc: "Cantidad de daño que el personaje resiste antes de recibir daño real." },
    { titulo: "Vida", desc: "Cantidad de puntos de salud antes de que el personaje sea derrotado." },
    { titulo: "Tasa Crítica", desc: "Probabilidad de realizar un golpe crítico." },
    { titulo: "Resistencia Crítica", desc: "Reducción del daño recibido por golpes críticos." },
    { titulo: "Daño Crítico", desc: "Daño extra multiplicado al realizar un golpe crítico." },
    { titulo: "Penetración", desc: "Atributo que ignora o reduce la defensa del enemigo." },
    { titulo: "Precisión", desc: "Probabilidad de acertar un golpe exitosamente." },
    { titulo: "Evasión", desc: "Probabilidad de esquivar un ataque enemigo." },
    { titulo: "Reducción de Daño", desc: "Reducción porcentual del daño recibido por golpes normales." },
    { titulo: "Amplificación de Daño", desc: "Multiplicador de daño aplicado a golpes normales y habilidades." },
    { titulo: "Daño Monstruo Normal", desc: "Daño amplificado específicamente contra monstruos comunes." },
    { titulo: "Daño Extra Boss", desc: "Daño adicional infligido a jefes (Bosses)." },
    { titulo: "Daño Elemental", desc: "Daño extra aplicado a monstruos con debilidad elemental específica." },
    { titulo: "CD Reduce", desc: "Reducción del tiempo de enfriamiento de las habilidades." },
    { titulo: "Penetración Monstruos", desc: "Cantidad de enemigos que pueden ser golpeados simultáneamente." },
    { titulo: "Trascendencia", desc: "Mejora por duplicados (máximo 10). Aumenta estrellas y nivel máximo de 90 a 120." },
    { titulo: "Afección", desc: "Nivel de amistad mediante pociones (Límite 3000: 500 de cada tipo y 1500 elixires)." },
  ];

  return (
    <div className='Contenedor_Estadisticas'>
      <h2 className="titulo-tabla">Estadísticas del Personaje</h2>
      <div className="tabla-stats">
        <div className="fila encabezado">
          <div className="celda">Atributo</div>
          <div className="celda">Descripción</div>
        </div>
        {data.map((item, index) => (
          <div className="fila" key={index}>
            <div className="celda nombre-stat"><strong>{item.titulo}</strong></div>
            <div className="celda descripcion-stat">
              <span className="texto-oculto">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estadisticas;

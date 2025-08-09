import React from 'react';
import './index.scss';

const COLORS = [
  '#FF5252', // красный
  '#4CAF50', // зеленый
  '#2196F3', // синий
  '#FFC107', // желтый
  '#9C27B0', // фиолетовый
  '#FF9800', // оранжевый
  '#E91E63', // розовый
  '#00BCD4', // бирюзовый
  '#8BC34A', // салатовый
  '#607D8B', // серо-голубой
];

const Balloons = () => {
  const ballonsCount = 10 + Math.floor(Math.random() * 11); // от 10 до 20
  const balloons = Array.from({ length: ballonsCount }).map((_, i) => ({
    id: i,
    size: 20 + Math.floor(Math.random() * 31), // от 20 до 50px
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    left: Math.floor(Math.random() * 100), // 0-100% ширины
    duration: 5 + Math.random() * 6, // от 5 до 11 секунд
    delay: Math.random() * 3, // задержка до 3 секунд
  }));

  return (
    <div className="loader-content">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon-container"
          style={{
            position: 'absolute',
            left: `${balloon.left}%`,
            bottom: '-100px',
            animation: `float ${balloon.duration}s ease-in ${balloon.delay}s infinite`,
          }}
        >
          {/* Шарик */}
          <div
            className="balloon"
            style={{
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.3}px`,
              backgroundColor: balloon.color,
              borderRadius: '50%',
            }}
          />
          
          {/* Веревочка (теперь с более заметным стилем) */}
          <div
            className="balloon-string"
            style={{
              position: 'absolute',
              width: '1px',
              height: `${balloon.size * 0.8}px`, // Длина веревочки зависит от размера шарика
              background: 'linear-gradient(to bottom, #888, #ccc)', // Градиент для реалистичности
              bottom: `-${balloon.size * 0.8}px`, // Позиционируем под шариком
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      ))}
      <h1 className="title">Calca-toys</h1>
    </div>
  );
};

export default Balloons;
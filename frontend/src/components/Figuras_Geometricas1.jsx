import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const shapes = [
  'círculo',
  'cuadrado',
  'triángulo',
  'rectángulo',
];

const getRandomShape = () => {
  const randomIndex = Math.floor(Math.random() * shapes.length);
  return shapes[randomIndex];
};

function App() {
  const [currentShape, setCurrentShape] = useState('');
  const [selectedShape, setSelectedShape] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateShape();
  }, []);

  const generateShape = () => {
    const newShape = getRandomShape();
    setCurrentShape(newShape);
    setSelectedShape('');
  };

  const handleShapeClick = (shape) => {
    if (shape === currentShape) {
      setScore(score + 1);
    }
    generateShape();
  };

  return (
    <div className="text-center py-8">
      <h1 className="text-2xl font-bold mb-4">¡Juego de Figuras Geométricas!</h1>
      <p>Selecciona la figura:</p>
      <motion.div
        key={currentShape}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl font-bold">{currentShape}</p>
      </motion.div>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => handleShapeClick('círculo')}
          className={`w-20 h-20 rounded-full bg-blue-500 ${selectedShape === 'círculo' ? 'ring-4 ring-blue-300' : ''}`}
        >
          Círculo
        </button>
        <button
          onClick={() => handleShapeClick('cuadrado')}
          className={`w-20 h-20 bg-green-500 ${selectedShape === 'cuadrado' ? 'ring-4 ring-green-300' : ''}`}
        >
          Cuadrado
        </button>
        <button
  onClick={() => handleShapeClick('triángulo')}
  className={`relative w-20 h-20 overflow-hidden ${selectedShape === 'triángulo' ? 'ring-4 ring-yellow-300' : ''}`}
>
  <div className="absolute top-0 left-0 w-0 h-0 border-t-10 border-r-10 border-b-10 border-yellow-500"></div>
</button>
        <button
          onClick={() => handleShapeClick('rectángulo')}
          className={`w-28 h-20 bg-red-500 ${selectedShape === 'rectángulo' ? 'ring-4 ring-red-300' : ''}`}
        >
          Rectángulo
        </button>
      </div>
      <p className="text-xl mt-6">Puntuación: {score}</p>
    </div>
  );
}

export default App;

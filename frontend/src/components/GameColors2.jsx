import React, { useState } from 'react';

const PaintGame = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [isPainting, setIsPainting] = useState(false);
  const [drawing, setDrawing] = useState([]); // Estado para el dibujo actual
  const [drawings, setDrawings] = useState([]); // Estado para todos los dibujos
  const [currentDrawingIndex, setCurrentDrawingIndex] = useState(-1); // Índice del dibujo actual

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleCanvasMouseDown = () => {
    if (selectedColor) {
      setIsPainting(true);
    }
  };

  const handleCanvasMouseUp = () => {
    setIsPainting(false);
    if (drawing.length > 0) {
      // Guardar el dibujo actual en la lista de dibujos
      setDrawings([...drawings, drawing]);
      // Limpiar el dibujo actual
      setDrawing([]);
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (isPainting) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = selectedColor;
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      ctx.fillRect(x, y, 20, 20); // Tamaño del pincel
      // Agregar la posición al dibujo actual
      setDrawing([...drawing, { x, y, color: selectedColor }]);
    }
  };

  const clearCanvas = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setDrawing([]); // Limpiar el dibujo actual
  };

  const changeDrawing = () => {
    if (drawings.length > 0) {
      // Incrementar el índice del dibujo actual
      const nextIndex = (currentDrawingIndex + 1) % drawings.length;
      setCurrentDrawingIndex(nextIndex);
      // Limpiar el lienzo y pintar el dibujo seleccionado
      clearCanvas();
      const selectedDrawing = drawings[nextIndex];
      selectedDrawing.forEach((point) => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = point.color;
        ctx.fillRect(point.x, point.y, 20, 20);
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4">Juego de Pinta el Dibujo</h1>
      <p className="text-xl">Selecciona un color y pinta el dibujo:</p>
      <div className="flex space-x-4 mt-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-16 h-16 rounded-full cursor-pointer`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <button className="mt-4" onClick={clearCanvas}>
        Limpiar Lienzo
      </button>
      <button className="mt-4" onClick={changeDrawing}>
        Cambiar Dibujo
      </button>
      <canvas
        id="canvas"
        className="mt-4 border"
        width="400"
        height="400"
        style={{ cursor: 'crosshair' }}
        onMouseDown={handleCanvasMouseDown}
        onMouseUp={handleCanvasMouseUp}
        onMouseMove={handleCanvasMouseMove}
      ></canvas>
    </div>
  );
};

export default PaintGame;

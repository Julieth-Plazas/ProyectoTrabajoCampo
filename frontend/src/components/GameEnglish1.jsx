import React, { useState, useEffect } from 'react';

// Importa tus imágenes aquí...
import AppleImage from '../assets/Img_English/manzana.jpg';
import CatImage from '../assets/Img_English/gato.png';
import BananaImage from '../assets/Img_English/banana.jpg';
import PearImage from '../assets/Img_English/pera.jpg';
import DogImage from '../assets/Img_English/perro.png';
import BearImage from '../assets/Img_English/oso.jpg';
import LionImage from '../assets/Img_English/leon.jpg';
import OrangeImage from '../assets/Img_English/naranja.jpg';
import PigImage from '../assets/Img_English/cerdo.jpg';

function App() {
  const [targetImage, setTargetImage] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const maxAttempts = 10; // Establece el límite máximo de intentos aquí

  const objects = ['Apple', 'Cat', 'Banana', 'Pear', 'Dog', 'Bear', 'Lion', 'Orange', 'Pig'];

  // Asocia cada objeto con su imagen correspondiente
  const objectImageMap = {
    Apple: AppleImage,
    Cat: CatImage,
    Banana: BananaImage,
    Pear: PearImage,
    Dog: DogImage,
    Bear: BearImage,
    Lion: LionImage,
    Orange: OrangeImage,
    Pig: PigImage,
    // Asocia los demás objetos con sus imágenes correspondientes aquí...
  };

  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    if (attempts < maxAttempts) {
      const randomIndex = Math.floor(Math.random() * objects.length);
      const randomObject = objects[randomIndex];
      setTargetImage(objectImageMap[randomObject]);
      setAttempts(attempts + 1);
    } else {
      // Juego terminado, establece gameOver en true
      setGameOver(true);
    }
  };

  const handleObjectClick = (selectedObject) => {
    if (!gameOver) {
      const targetObject = Object.keys(objectImageMap).find(
        (key) => objectImageMap[key] === targetImage
      );

      if (selectedObject === targetObject) {
        setScore(score + 1);
      }
      newWord();
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setGameOver(false);
    newWord();
  };

  return (
    <section className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center">
    <div className="max-w-screen-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center">

    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Encuentra el Objeto</h1>
      {/* Muestra la imagen en lugar de la palabra en inglés */}
      <img src={targetImage} alt="Object" className="mb-6" style={{ maxWidth: '200px' }} />
      <div className="flex flex-wrap justify-center">
        {objects.map((word, index) => (
          <div
            key={index}
            className={`w-16 h-16 m-2 flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-full ${
              gameOver ? 'pointer-events-none' : ''
            }`}
            style={{ flex: '0 0 25%', maxWidth: '25%' }}
            onClick={() => handleObjectClick(word)}
          >
            {word}
          </div>
        ))}
      </div>
      <p className="text-xl mt-6">Puntuación: {score}</p>
      {gameOver && (
        <button className="text-xl mt-6 bg-blue-500 text-white py-2 px-4 rounded" onClick={resetGame}>
          Reiniciar Juego
        </button>
      )}
    </div>
    </div>
    </section>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

const MathAdventureGame = () => {
  const [firstNumber, setFirstNumber] = useState(generateRandomNumber());
  const [secondNumber, setSecondNumber] = useState(generateRandomNumber());
  const [operation, setOperation] = useState(getRandomOperation());
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1; // Número aleatorio entre 1 y 5
  }

  function getRandomOperation() {
    return Math.random() > 0.5 ? '+' : '-';
  }

  useEffect(() => {
    setFirstNumber(generateRandomNumber());
    setSecondNumber(generateRandomNumber());
    setOperation(getRandomOperation());
    setMessage('');
    setIsCorrect(false);
  }, []);

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const parsedAnswer = parseInt(answer);
    let correctAnswer;

    if (operation === '+') {
      correctAnswer = firstNumber + secondNumber;
    } else {
      correctAnswer = firstNumber - secondNumber;
    }

    if (parsedAnswer === correctAnswer) {
      setMessage('¡Correcto!');
      setIsCorrect(true);
    } else {
      setMessage('¡Inténtalo de nuevo!');
    }
  };

  const generateNewProblem = () => {
    setFirstNumber(generateRandomNumber());
    setSecondNumber(generateRandomNumber());
    setOperation(getRandomOperation());
    setAnswer('');
    setMessage('');
    setIsCorrect(false);
  };

  return (
    <div className="math-adventure-game p-4 text-center bg-green-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Aventura de Sumas y Restas con Animales</h1>
      <div className="mb-4 text-2xl text-green-800">
        <p>Resuelve la operación:</p>
        <p>{firstNumber} {operation} {secondNumber} =</p>
      </div>
      <input
        type="number"
        value={answer}
        onChange={handleInputChange}
        placeholder="Ingresa tu respuesta"
        className="border p-2 rounded mr-2 text-2xl"
      />
      <button
        onClick={checkAnswer}
        className="bg-blue-500 text-white px-4 py-2 rounded text-2xl hover:bg-blue-700 transition"
      >
        Comprobar
      </button>
      <p className={`mt-2 text-xl ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>{message}</p>
      <button
        onClick={generateNewProblem}
        className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 text-2xl hover:bg-yellow-700 transition"
      >
        Siguiente Problema
      </button>
    </div>
  );
};

export default MathAdventureGame;

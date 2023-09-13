import React, { useState, useEffect } from 'react';

const GameSumRes1 = () => {
    const [hiddenNumbers, setHiddenNumbers] = useState([]);
    const [currentNumbers, setCurrentNumbers] = useState([]);
    const [operation, setOperation] = useState('');
    const [answer, setAnswer] = useState('');
    const [treasuresFound, setTreasuresFound] = useState(0);
    const [message, setMessage] = useState('');
    const [remainingAttempts, setRemainingAttempts] = useState(8);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        generateRandomNumbers();
    }, []);

    const generateRandomNumbers = () => {
        const randomNumbers = [];
        while (randomNumbers.length < 5) {
            const randomNumber1 = Math.floor(Math.random() * 10) + 1;
            const randomNumber2 = Math.floor(Math.random() * 10) + 1;
            const randomOperator = Math.random() > 0.5 ? '+' : '-';
            const sum = randomOperator === '+' ? randomNumber1 + randomNumber2 : randomNumber1 - randomNumber2;
            if (!randomNumbers.includes(sum)) {
                randomNumbers.push(sum);
                setCurrentNumbers([randomNumber1, randomNumber2]);
                setOperation(randomOperator);
            }
        }
        setHiddenNumbers(randomNumbers);
    };

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
    };

    const checkAnswer = () => {
        if (
            (operation === '+' && parseInt(answer) === currentNumbers[0] + currentNumbers[1]) ||
            (operation === '-' && parseInt(answer) === currentNumbers[0] - currentNumbers[1])
        ) {
            setTreasuresFound(treasuresFound + 1);
            setMessage('¡Encontraste un tesoro!');
        } else {
            setMessage('Inténtalo de nuevo.');
        }

        setRemainingAttempts(remainingAttempts - 1);

        if (remainingAttempts > 1) {
            setHiddenNumbers(hiddenNumbers.slice(1));
            generateRandomNumbers();
            setAnswer('');
        } else {
            setIsGameOver(true);
        }
    };

    const restartGame = () => {
        setIsGameOver(false);
        setTreasuresFound(0);
        setMessage('');
        setRemainingAttempts(8);
        generateRandomNumbers();
        setAnswer('');
    };

  // Generar un array de estrellas en función de la cantidad de tesoros encontrados
  const stars = Array.from({ length: treasuresFound }, (_, index) => (
    <span key={index} role="img" aria-label="star">
        ⭐️
    </span>
));
    return (
        <section className="bg-white flex flex-col items-center justify-center">
        <div className="flex flex-1 justify-center mt-40">
            <div className="treasure-hunt-game p-4 text-center bg-yellow-100 rounded-lg">
                <h1 className="text-4xl font-bold mb-4 text-yellow-800">Caza los Tesoros Matemáticos</h1>
                {!isGameOver ? (
                    <div>
                        <p className="mb-2 text-2xl text-yellow-800">Encuentra los tesoros resolviendo sumas y restas.</p>
                        <p className="mb-4 text-3xl text-yellow-800">Tesoro actual: {currentNumbers[0]} {operation} {currentNumbers[1]}</p>
                        <input
                            type="number"
                            value={answer}
                            onChange={handleInputChange}
                            placeholder="Escribe tu respuesta"
                            className="border p-2 rounded mr-2 text-2xl"
                        />
                        <button
                            onClick={checkAnswer}
                            className="bg-blue-500 text-white px-4 py-2 rounded text-2xl hover:bg-blue-700 transition"
                        >
                            Comprobar
                        </button>
                        <p className="mt-2 text-xl text-yellow-800">{message}</p>
                        <p className="mt-4 text-3xl text-yellow-800">
                            Tesoros encontrados: {treasuresFound}
                        </p>
                        <p className="mt-4 text-3xl text-yellow-800">{stars}</p>
                        <p className="mt-4 text-2xl text-yellow-800">
                            Intentos restantes: {remainingAttempts} {isGameOver && treasuresFound === 8 ? '🏆' : ''}
                        </p>
                    </div>
                ) : (
                    <div>
                        <p className="text-3xl font-semibold mb-4 text-yellow-800">¡Felicidades, has encontrado todos los tesoros!</p>
                        <p className="text-4xl" role="img" aria-label="cup" style={{marginTop:"5px"}}>
                                    🏆
                        </p>
                        <button
                            onClick={restartGame}
                            className="bg-green-500 text-white px-6 py-3 rounded-lg text-2xl hover:bg-green-700 transition"
                            style={{marginTop:"10px"}}>
                            Jugar de nuevo
                        </button>
                    </div>
                )}
            </div>
        </div>
    </section>
    );
};

export default GameSumRes1;

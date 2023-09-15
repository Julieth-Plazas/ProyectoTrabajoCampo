import React, { useState, useEffect } from "react";

// Importa las imágenes de las figuras geométricas
import circuloImage from "../assets/Img_FigurasGeo/circulo.jpg";
import trianguloImage from "../assets/Img_FigurasGeo/triangulo.jpg";
import cuadradoImage from "../assets/Img_FigurasGeo/cuadrado.jpg";
import rectanguloImage from "../assets/Img_FigurasGeo/rectangulo.jpg";
import estrellaImage from "../assets/Img_FigurasGeo/estrella.png";
import ovaloImage from "../assets/Img_FigurasGeo/ovalo.jpg";

const App = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [solvedPairs, setSolvedPairs] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
      // Define las imágenes para las figuras geométricas
      const shapes = [
        { id: 1, name: "círculo", image: circuloImage },
        { id: 2, name: "triángulo", image: trianguloImage },
        { id: 3, name: "cuadrado", image: cuadradoImage },
        { id: 4, name: "rectángulo", image: rectanguloImage },
        { id: 5, name: "estrella", image: estrellaImage },
        { id: 6, name: "ovalo", image: ovaloImage },
      ];

      // Crea pares de cartas basadas en las imágenes
      const cardPairs = [...shapes, ...shapes];
      const shuffledCards = shuffleArray(cardPairs);
      setCards(shuffledCards);
    }, []);

    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const handleCardClick = (index) => {
      if (!flippedCards.includes(index) && flippedCards.length < 2 && !gameOver) {
        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
          const [firstIndex, secondIndex] = newFlippedCards;
          const firstCard = cards[firstIndex];
          const secondCard = cards[secondIndex];

          if (firstCard.id === secondCard.id) {
            setSolvedPairs([...solvedPairs, firstCard]);
            setScore(score + 1);

            // Verifica si todas las parejas se han resuelto
            if (solvedPairs.length + 1 === cards.length / 2) {
              setGameOver(true);
            }
          }

          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }
      }
    };

    const isCardFlipped = (index) => {
      return (
        flippedCards.includes(index) ||
        solvedPairs.some((pair) => pair.id === cards[index].id)
      );
    };

    const restartGame = () => {
      // Restablece todos los estados del juego
      setCards([]);
      setFlippedCards([]);
      setSolvedPairs([]);
      setScore(0);
      setGameOver(false);

      // Vuelve a barajar las cartas y configurarlas
      const shapes = [
        { id: 1, name: "círculo", image: circuloImage },
        { id: 2, name: "triángulo", image: trianguloImage },
        { id: 3, name: "cuadrado", image: cuadradoImage },
        { id: 4, name: "rectángulo", image: rectanguloImage },
        { id: 5, name: "estrella", image: estrellaImage },
        { id: 6, name: "ovalo", image: ovaloImage },
      ];
      const cardPairs = [...shapes, ...shapes];
      const shuffledCards = shuffleArray(cardPairs);
      setCards(shuffledCards);
    };

    const congratulationMessage = (
        <div>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            ¡Felicidades! Has completado el juego 🎉
          </p>
          <p style={{ fontSize: "18px" }}>Tu puntuación es: {score}</p>
          <button
            onClick={restartGame}
            style={{
              fontSize: "18px",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#61A5C2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Reiniciar el juego
          </button>
        </div>
      );

      return (
        <section className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-screen-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="App">
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Juego de Memoria de Figuras Geométricas
              </h1>
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                Encuentra todas las parejas de figuras geométricas:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "10px",
                }}
              >
                {cards.map((shape, index) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    style={{
                      width: "100px",
                      height: "100px",
                      background: isCardFlipped(index) ? "#61A5C2" : "#E4E4E4",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={isCardFlipped(index) ? shape.image : ""}
                      alt={shape.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        opacity: isCardFlipped(index) ? 1 : 0,
                        transition: "opacity 0.5s",
                      }}
                    />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "18px", marginTop: "10px" }}>
                Puntuación: {score}
              </p>
              {gameOver ? (
                congratulationMessage
              ) : (
                <button
                  onClick={restartGame}
                  style={{
                    fontSize: "18px",
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#61A5C2",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Reiniciar el juego
                </button>
              )}
            </div>
          </div>
        </section>
      );
    };

    export default App;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, buscarJuegosPorCurso } from '../../utils/constants';
import Figuras_Geometricas1 from '../Figuras_Geometricas1';
import GameColors2 from '../GameColors2';
import GameColors1 from '../GameColors1'
import GameSumRes1 from '../GamesSumRes1';
import MemoramaAnimales from '../MemoriaAnimales';
import MemoramaNumeros from '../MemoriaNumeros';
import MemoramaVocal from '../MemoriaVocal';

const Games = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/cursos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurso(data.data);
        setIsLoading(false);
        setGames(buscarJuegosPorCurso(data.data.title));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mt-4 mb-6'>Curso: {curso.title}</h1>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gameSelect">
          Seleccionar juego:
        </label>
        <select
          id="gameSelect"
          className="w-full px-3 py-2 border rounded shadow appearance-none"
          value={selectedGame}
          onChange={handleGameChange}
        >
          <option value="">Seleccionar juego</option>
          {games.map((game, index) => (
            <option key={index} value={game}>
              {game}
            </option>
          ))}
        </select>
      </div>

      {selectedGame && (
        <p className="text-lg">Juego seleccionado: {selectedGame}</p>
      )}
      {selectedGame === 'figurasgeometricas2' && <Figuras_Geometricas1 />}
      {selectedGame === 'gamecolors2' && <GameColors2 />}
      {selectedGame === 'gamecolors1' && <GameColors1/> }
      {selectedGame === 'gamsumres1' && <GameSumRes1 />}
      {selectedGame === 'memoria animales' && <MemoramaAnimales />}
      {selectedGame === 'memoria numeros' && <MemoramaNumeros />}
      {selectedGame === 'memoria vocales' && <MemoramaVocal />}
    </div>
  );
};

export default Games;

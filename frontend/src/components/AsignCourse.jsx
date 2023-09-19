import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/constants';

const AsignCourse = ({ onAsignar, closeModal }) => {
    const [selectedDocente, setSelectedDocente] = useState('');
    const [selectedCurso, setSelectedCurso] = useState('');
    const [docentes, setDocentes] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState(null)
    const [data, setData] = useState({})
    useEffect(() => {

        fetch(`${BASE_URL}/users`)
            .then((response) => response.json())
            .then((data) => {
                setDocentes(data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error al obtener los docentes:', error);
                setIsLoading(false);
            });


        fetch(`${BASE_URL}/cursos`)
            .then((response) => response.json())
            .then((data) => {
                setCursos(data.data);
            })
            .catch((error) => {
                console.error('Error al obtener los cursos:', error);
            });

            
    }, []);

    const handleAsignarClick = async (e) => {
        e.preventDefault();


        if (selectedDocente && selectedCurso) {
            console.log(selectedDocente, selectedCurso)

            try {
                const res = await fetch(`${BASE_URL}/users/asignarCurso`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userId: selectedDocente, cursoId: selectedCurso })
                });
                const data = await res.json();
                console.log(data);
                setData(data);
                setAlert(data.message);
                setTimeout(() => {
                    setAlert(null);
                }, 3000);


            } catch (error) {
                setAlert(error.message);
                setTimeout(() => {
                    setAlert(null);
                }, 3000);
            }

        }
    };

    return (
        <div className="flex items-center justify-center mt-6 ">
            <div className="bg-white p-4 rounded shadow max-w-md w-full">
                {alert && (
                    <div
                        className={`${data.success
                            ? 'bg-green-100 border-t border-b border-green-500 text-green-700'
                            : 'bg-red-100 border-t border-b border-red-500 text-red-700'
                            } px-4 py-3`}
                        role="alert"
                    >
                        <p className="font-bold">{data.success ? 'Success' : 'Error'}</p>
                        <p className="text-sm">{alert}</p>
                    </div>
                )}
                <h2 className="text-xl font-semibold mb-4">Asignar Curso</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Docente:</label>
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
                        onChange={(e) => setSelectedDocente(e.target.value)}
                        value={selectedDocente}
                    >
                        <option value="">Selecciona un docente</option>
                        {docentes.map((docente) => (
                            <option key={docente.id} value={docente._id}>
                                {docente.username}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Curso:</label>
                    <select
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500"
                        onChange={(e) => setSelectedCurso(e.target.value)}
                        value={selectedCurso}
                    >
                        <option value="">Selecciona un curso</option>
                        {cursos.map((curso) => (
                            <option key={curso.id} value={curso._id}>
                                {curso.title}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 focus:outline-none"
                    onClick={handleAsignarClick}
                    disabled={isLoading}
                >
                    {isLoading ? 'Cargando...' : 'Asignar'}
                </button>

            </div>
        </div>
    );
};

export default AsignCourse;

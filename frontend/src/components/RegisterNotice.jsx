import React, { Component, useState } from 'react';
import { BASE_URL } from '../utils/constants';


const RegisterNotice = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [fecha, setFecha] = useState('');
    const [alert, setAlert] = useState(null)
    const [data, setData] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/notices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ titulo, descripcion: contenido,  fecha })
            });
            const data = await res.json();
            console.log(data);
            setData(data);
            setAlert(data.message); 

            setTimeout(() => {
                setAlert(null);
            }, 3000);
            if (data.success) {
                setTitulo('');
            setContenido('');
            setFecha('');


            }
            
        } catch (error) {
            setAlert(error.message);
            setTimeout(() => {
                setAlert(null);
            }, 3000);
        }


        
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
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
            <h2 className="text-2xl font-semibold mb-4">Registro de Noticias</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-gray-700 font-bold mb-2">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contenido" className="block text-gray-700 font-bold mb-2">Contenido:</label>
                    <textarea
                        id="contenido"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        value={contenido}
                        onChange={(e) => setContenido(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="fecha" className="block text-gray-700 font-bold mb-2">Fecha del evento:</label>
                    <input
                        type="date"
                        id="fecha"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Registrar Noticia
                </button>
            </form>
        </div>
    );
}

export default RegisterNotice;

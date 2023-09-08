import React, { useState, useEffect } from "react";

function Memorama() {
    const [vocales, setVocales] = useState([]);
    const [selecciones, setSelecciones] = useState([]);

    useEffect(() => {
        generarTablero();
    }, []);

    const vocalesList = ["A", "E", "I", "O", "U"]; // Lista de vocales

    const cargarVocales = () => {
        return vocalesList.concat(vocalesList);  // Creamos pares de vocales
    };

    const generarTablero = () => {
        let vocalesArray = cargarVocales();
        setVocales(vocalesArray.sort(() => Math.random() - 0.5));
        setSelecciones([]);
    };

    const seleccionarTarjeta = (i) => {
        let newSelecciones = [...selecciones, i];
        setSelecciones(newSelecciones);

        if (newSelecciones.length === 2) {
            deseleccionar(newSelecciones);
        }
    };

    const deseleccionar = (selected) => {
        setTimeout(() => {
            if (vocales[selected[0]] !== vocales[selected[1]]) {
                setSelecciones([]);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-powderblue">
            <div id="tablero" className="grid grid-cols-6 gap-4">
                {vocales.map((vocal, i) => (
                    <div key={i} onClick={() => seleccionarTarjeta(i)} className="w-24 h-32 relative transform transition-transform duration-500">
                        <div className={`absolute w-full h-full ${selecciones.includes(i) ? 'rotate-y-180' : ''} transform transition-transform duration-500`}>
                            <div className="absolute w-full h-full bg-white text-5xl flex items-center justify-center backface-hidden">
                                {vocal}
                            </div>
                            <div className="absolute w-full h-full bg-orange-500 text-5xl flex items-center justify-center backface-hidden transform rotate-y-180">
                                ?
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={generarTablero} className="mt-4 bg-gradient-to-r from-orange-400 to-orange-600 p-4 rounded-full border-4 border-white text-lg">
                Nuevo Juego
            </button>
        </div>
    );
}

export default Memorama;

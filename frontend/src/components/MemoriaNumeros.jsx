import React, { useState, useEffect } from "react";

function Memorama() {
    const [numeros, setNumeros] = useState([]);
    const [selecciones, setSelecciones] = useState([]);

    useEffect(() => {
        generarTablero();
    }, []);

    const numberList = Array.from({ length: 6 }, (_, i) => i + 1);  // [1, 2, 3, 4, 5, 6]

    const cargarNumeros = () => {
        return numberList.concat(numberList);  // we need pairs
    };

    const generarTablero = () => {
        let numbers = cargarNumeros();
        setNumeros(numbers.sort(() => Math.random() - 0.5));
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
            if (numeros[selected[0]] !== numeros[selected[1]]) {
                setSelecciones([]);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-powderblue">
            <div id="tablero" className="grid grid-cols-6 gap-4">
                {numeros.map((number, i) => (
                    <div key={i} onClick={() => seleccionarTarjeta(i)} className="w-24 h-32 relative transform transition-transform duration-500">
                        <div className={`absolute w-full h-full ${selecciones.includes(i) ? 'rotate-y-180' : ''} transform transition-transform duration-500`}>
                            <div className="absolute w-full h-full bg-white text-5xl flex items-center justify-center backface-hidden">
                                {number}
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

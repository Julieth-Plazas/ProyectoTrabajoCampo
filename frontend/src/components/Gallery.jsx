import React, { useRef } from 'react';
import imagen1 from '../assets/imagenes/Salid_guatica1.jpg';
import imagen2 from '../assets/imagenes/salida_guatica2.jpg';
import imagen3 from '../assets/imagenes/salida_guatica3.jpg';
import imagen4 from '../assets/imagenes/salida_guatica4.jpg';
import imagen5 from '../assets/imagenes/salida_guatica5.jpg';
import imagen6 from '../assets/imagenes/salida_guatica6.jpg';
import imagen7 from '../assets/imagenes/salida_guatica7.jpg';
import imagen8 from '../assets/imagenes/salida_guatica8.jpg';

const Carrusel = () => {
    const slider = useRef();
    const images = [
        imagen1, imagen2, imagen3, imagen4,
        imagen5, imagen6, imagen7, imagen8
    ];

    return (
        <div className='mx-24'>
            <div className='flex items-center justify-center w-full h-full relative'>

                <button 
                    className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:shadow-lg hover:bg-opacity-75 transition-all duration-300' 
                    onClick={() => slider.current.scrollLeft -= 200}
                >
                    &#10094;
                </button>

                <div ref={slider} class='snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start w-full'>
                    {images.map((img, i) => (
                        <div key={i} className='snap-start flex flex-shrink-0 w-64 h-64 mx-4 relative'>
                            <img src={img} alt={`Carousel ${i}`} className='absolute top-0 left-0 w-full h-full object-cover object-center' />
                        </div>
                    ))}
                </div>

                <button 
                    className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:shadow-lg hover:bg-opacity-75 transition-all duration-300' 
                    onClick={() => slider.current.scrollLeft += 200}
                >
                    &#10095;
                </button>

            </div>
        </div>
    );
}

export default Carrusel;
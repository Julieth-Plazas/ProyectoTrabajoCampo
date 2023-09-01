import React, { useState, useEffect } from "react";
import imagen1 from '../assets/imagenes/Salid_guatica1.jpg';
import imagen2 from '../assets/imagenes/salida_guatica2.jpg';
import imagen3 from '../assets/imagenes/salida_guatica3.jpg';
import imagen4 from '../assets/imagenes/salida_guatica4.jpg';
import imagen5 from '../assets/imagenes/salida_guatica5.jpg';
import imagen6 from '../assets/imagenes/salida_guatica6.jpg';
import imagen7 from '../assets/imagenes/salida_guatica7.jpg';
import imagen8 from '../assets/imagenes/salida_guatica8.jpg';

const Gallery = () => {
    const images = [
        imagen1, imagen2, imagen3, imagen4,
        imagen5, imagen6, imagen7, imagen8
    ];
    const [currentImage, setCurrentImage] = useState(0);

    const goToNextImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === images.length - 1 ? 0 : prevImage + 1
        );
    };

    const goToPrevImage = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    return (
        <div>
            <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <img
                        className='absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        src={images[currentImage]}
                        alt={`Image ${currentImage + 1}`}
                    />
                </div>
                <div className="flex justify-center items-center pt-4">
                    <button type="button" className="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev onClick={goToPrevImage}>
                        <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                            <span className="sr-only" onClick={goToPrevImage}>Previous</span>
                        </span>
                    </button>
                    <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next onClick={goToNextImage}>
                        <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                            <span className="sr-only" onAuxClick={goToNextImage}>Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

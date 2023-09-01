import React from "react";
import imagen1 from '../assets/imagenes/Salid_guatica1.jpg'
import imagen2 from '../assets/imagenes/salida_guatica2.jpg'
import imagen3 from '../assets/imagenes/salida_guatica3.jpg'
import imagen4 from '../assets/imagenes/salida_guatica4.jpg'
import imagen5 from '../assets/imagenes/salida_guatica5.jpg'
import imagen6 from '../assets/imagenes/salida_guatica6.jpg'
import imagen7 from '../assets/imagenes/salida_guatica7.jpg'
import imagen8 from '../assets/imagenes/salida_guatica8.jpg'


const Gallery = () => {
    return (
        <div id="gallery" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imagen1} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="holaa" />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src={imagen2} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imagen3} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                {/* Item 4 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imagen4} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                {/* Item 5 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imagen5} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                 {/* Item 6 */}
                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imagen6} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                 {/* Item 7 */}
                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imagen7} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
                 {/* Item 8 */}
                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={imagen8} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                </div>
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Gallery;

import React from "react";
import juegoGif from "../assets/Juegos.gif";
import colores from "../assets/imagenes_juegos/colores.jpg"
import figuras from "../assets/imagenes_juegos/figuras.png"
import ingles from "../assets/imagenes_juegos/ingles.jpg"
import letras from "../assets/imagenes_juegos/letras.gif"
import matematicas from "../assets/imagenes_juegos/matematicas.jpg"
import memoria from "../assets/imagenes_juegos/memoria.png"

const JardinGames = () => {

    return (
        <section class="bg-white flex flex-col items-center justify-center">
            <div class="flex flex-1 justify-center mt-20">
                <img src={juegoGif} alt="Hero Hero" width="350" height="30" />

            </div>

            <div id="mega-menu-full-dropdown" className="mt-8 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-2 md:px-6">
                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                     <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <img src={colores} alt="Hero Hero" width="90" height="30" style={{marginLeft:"100px"}} />

                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <img src={figuras} alt="Hero Hero" width="90" height="50" style={{marginLeft:"100px"}} />

                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <img src={memoria} alt="Hero Hero" width="90" height="50" style={{marginLeft:"100px"}} />

                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" className="block p-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <img src={ingles} alt="Hero Hero" width="90" height="20" style={{marginLeft:"100px"}} />

                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <img src={letras} alt="Hero Hero" width="90" height="50" style={{marginLeft:"100px"}} />

                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <img src={matematicas} alt="Hero Hero" width="90" height="50" style={{marginLeft:"100px"}} />

                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>


        </section>



    );

}

export default JardinGames

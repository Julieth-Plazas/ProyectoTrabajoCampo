import React from 'react';
import jardin from '../assets/jardin.webp';

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Primer contenedor (MISION) */}
      <div className="m-auto px-6 my-8 text-gray-600 md:px-12 xl:px-6 border rounded-2xl shadow-sm">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={jardin} alt="MISION" loading="lazy" className='border rounded-2xl mt-3 mb-3' />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">MISION</h2>
            <p className="mt-6 text-gray-600">Ofrecer  atención integral a la primera infancia con calidad, dentro de la normatividad vigente y el 
              servicio de educación preescolar, desarrollando competencias generales para potenciar a los niños  en 
              forma integral.</p>
          </div>
        </div>
      </div>

      {/* Segundo contenedor (VISION) */}
      <div className="m-auto px-6 my-8 text-gray-600 md:px-12 xl:px-6 border rounded-2xl shadow-sm">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">VISION</h2>
            <p className="mt-6 text-gray-600">Posicionar a esta institución educativa privada como una de las que ofrece mejor 
            calidad en la ciudad y proyectarla a nivel nacional con proyectos que 
            favorezcan la atención de niños y las niñas.</p>
          </div>
          <div className="md:5/12 lg:w-5/12">
            <img src={jardin} alt="VISION" loading="lazy" className='border rounded-2xl mt-3 mb-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

import React from "react";
import jardin from "../assets/jardin.webp";

const About = () => {
  return (
    <div>
      <div className="bg-white mb-3 px-6 my-8 space-y-8 md:space-y-0 md:flex md:items-center md:gap-12">
        {/* Contenedor MISION */}
        <div className="border rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-center p-4">
          <div className="md:w-1/2 lg:w-5/12">
            <img
              src={jardin}
              alt="MISION"
              loading="lazy"
              className="border rounded-2xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 lg:w-6/12 space-y-2">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              MISION
            </h2>
            <p className="text-gray-600">
              Ofrecer atención integral a la primera infancia con calidad,
              dentro de la normatividad vigente y el servicio de educación
              preescolar, desarrollando competencias generales para potenciar a
              los niños en forma integral.
            </p>
          </div>
        </div>

        {/* Contenedor VISION */}
        <div className="border rounded-2xl shadow-sm flex flex-col md:flex-row-reverse gap-6 items-center p-4">
          <div className="md:w-1/2 lg:w-5/12">
            <img
              src={jardin}
              alt="VISION"
              loading="lazy"
              className="border rounded-2xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 lg:w-6/12 space-y-2">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              VISION
            </h2>
            <p className="text-gray-600">
              Posicionar a esta institución educativa privada como una de las
              que ofrece mejor calidad en la ciudad y proyectarla a nivel
              nacional con proyectos que favorezcan la atención de niños y las
              niñas.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white mb-3 px-6 my-8 space-y-8 md:space-y-0 md:flex md:items-center md:gap-12">
        {/* Contenedor Docente */}
        <div className="border rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-center p-4">
          <div className="md:w-1/2 lg:w-5/12">
            <img
              src={jardin}
              alt="MISION"
              loading="lazy"
              className="border rounded-2xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 lg:w-6/12 space-y-2">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              COMPONENTE ADMINISTRATIVO
            </h2>
            <p className="text-gray-600">
            <p className="text-gray-600">Representante Legal- Directora </p>
            <p className="text-gray-600">&bull;coordinadora </p>
            <p className="text-gray-600">&bull;Profesoras</p>
            <p className="text-gray-600">&bull;Estudiantes </p>
            <p className="text-gray-600">&bull; Padres de Familia</p>
              
            </p>
          </div>
        </div>

        {/* Contenedor Pedagogico */}
        <div className="border rounded-2xl shadow-sm flex flex-col md:flex-row-reverse gap-6 items-center p-4">
          <div className="md:w-1/2 lg:w-5/12">
            <img
              src={jardin}
              alt="VISION"
              loading="lazy"
              className="border rounded-2xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 lg:w-6/12 space-y-2">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              COMPONENTE PEDAGOGICO
            </h2>
            <p className="text-gray-600">Dimensiones del niño </p>
            <p className="text-gray-600">&bull;Socio -Afectiva </p>
            <p className="text-gray-600">&bull;Cognitiva</p>
            <p className="text-gray-600">&bull;Comunicativa</p>
            <p className="text-gray-600">&bull;Corporal (Fina, Gruesa)</p>
            <p className="text-gray-600">&bull;Espiritual, ética y Valores </p>
            <p className="text-gray-600">&bull;Estética </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

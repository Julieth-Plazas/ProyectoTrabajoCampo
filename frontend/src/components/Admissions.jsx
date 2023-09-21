import React from "react";
import inscripcion from "../assets/imagenes/ImagenInscripciones.jpg";
import inscripcion2 from "../assets/imagenes/ImagenIns2.jpg";

const Admissions = () => {
  return (
    <section class="relative pt-8 lg:pt-4 pb-32 bg-white">
      <div class="flex flex-1 justify-center">
        <div class="lg:w-full lg:mx-20 relative">
          <div class="absolute inset-2 mt-10 mb-10 bg-white opacity-50 rounded-2xl"></div>
          <img
            src={inscripcion}
            alt="VISION"
            loading="lazy"
            class="border rounded-2xl mt-6 mb-6 w-3/4 lg:w-full"
          />
          <div class="absolute inset-2 mt-10 mb-10">
            <img
              src={inscripcion2}
              alt="Segunda Imagen"
              class=" h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
      <div className="max-w-xl border rounded-2xl shadow-sm flex flex-col items-center p-4 space-y-4 transform translate-x-20">
          <h3 className="text-3xl font-semibold leading-relaxed text-gray-900" style={{ color: "green" }}>
            Requisitos de Matricula
          </h3>
          <ul className="space-y-1 text-gray-500 list-disc list-inside" style={{ color: "black" }}>
            <li>Registro Civil de Nacimiento</li>
            <li>Certificado Médico Reciente</li>
            <li>Fotocopia del Carné de Vacunación</li>
            <li>Fotocopia del Carné de Atención Médica (Seguro de Salud)</li>
            <li>3 fotografías Recientes Tamaño 3 X 4 a color</li>
            <li>Fotocopia de Cedula de los padres</li>
            <li>Seguro Estudiantil</li>
            <li>Control de crecimiento reciente</li>
            <li>Paz y salvo</li>
            <li>1 carpeta oficio para archivar con gancho</li>
          </ul>
        </div>

        <div>
        <div className="max-w-xl ml-20 border rounded-2xl shadow-sm flex flex-col items-center p-4 space-y-4 mb-10">
            <h3 className="text-3xl font-semibold leading-relaxed text-gray-900" style={{ color: "green" }}>
              Calendario
            </h3>
            <ul className="space-y-1 text-gray-500 list-disc list-inside" style={{ color: "black" }}>
              <li>PRIMER PERIODO: 1 de Febrero - 31 de Marzo</li>
              <li>SEGUNDO PERIODO: 10 de Abril - 9 de Junio</li>
              <li>TERCER PERIODO: 10 de Julio - 8 de Septiembre</li>
              <li>CUARTO PERIODO: 11 de Septiembre - 17 de Noviembre</li>
            </ul>
          </div>

          <div className="max-w-xl ml-20 border rounded-2xl shadow-sm flex flex-col items-center p-4 space-y-4 mb-10">
            <h3 className="text-3xl font-semibold leading-relaxed text-gray-900" style={{ color: "green" }}>
              Recesos Académicos
            </h3>
            <ul className="space-y-1 text-gray-500 list-disc list-inside" style={{ color: "black" }}>
              <li>SEMANA SANTA: del 3 de Abril al 7 de Abril</li>
              <li>VACACIONES: del 20 de Junio al 7 de Julio</li>
              <li>SEMANA DE OCTUBRE: del 9 al 3 de Octubre</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

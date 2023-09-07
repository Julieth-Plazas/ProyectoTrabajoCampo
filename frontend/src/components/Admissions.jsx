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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="max-w-xl m-auto border rounded-2xl shadow-sm flex flex-col items-center p-4 space-y-4">
          <h3 className="text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white" style={{ color: "green" }}>
          Requisitos de Matricula
            </h3>

          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: "black" }}>
          <li>Registro Civil de Nacimiento</li>
          <li>Certificado Médico Reciente</li>
          <li>Fotocopia del Carné de Vacunación</li>
          <li>Fotocopia del Carné de Atención Médica     (Seguro de Salud)</li>
          <li>3 fotografías Recientes Tamaño 3 X 4 a color</li>
          <li>Fotocopia de Cedula de los padres</li>
          <li>Seguro Estudiantil</li>
          <li>Control de crecimiento reciente</li>
          <li>Paz y salvo </li>
          <li>1 carpeta oficio para archivar con gancho</li>

        </ul>
      </div>


        <p className="mb-3 text-gray-500 dark:text-gray-400">
          <p
            class="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white"
            style={{ color: "green", textAlign: "center", margin: "20px 0" }}
          >
            Calendario
          </p>
          <ul
            class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            style={{ color: "black", marginLeft: "80px" }}
          >
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">
                PRIMER PERIODO:{" "}
              </span>{" "}
              1 de Febrero - 31 de Marzo
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">
                SEGUNDO PERIODO:{" "}
              </span>{" "}
              10 de Abril - 9 de Junio
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">
                TERCER PERIODO:{" "}
              </span>{" "}
              10 de Julio - 8 de Septiembre
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">
                CUARTO PERIODO:{" "}
              </span>{" "}
              11 de Septiembre - 17 de Noviembre
            </li>

            <h2
              class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              style={{ textAlign: "center", color: "green", margin: "20px 0" }}
            >
              Recesos Académicos:
            </h2>
            <li>
              <span
                class="font-semibold text-gray-900 dark:text-white"
                style={{ margin: "20px 0" }}
              >
                SEMANA SANTA:{" "}
              </span>{" "}
              del 3 de Abril al 7 de Abril
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">
                VACACIONES:{" "}
              </span>{" "}
              del 20 de Junio al 7 de Julio
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">
                SEMANA DE OCTUBRE:{" "}
              </span>{" "}
              del 9 al 3 de Octubre
            </li>
          </ul>
        </p>
      </div>
    
    </section>
  );
};

export default Admissions;

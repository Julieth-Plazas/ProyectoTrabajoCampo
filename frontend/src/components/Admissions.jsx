import React from 'react'
import inscripcion from '../assets/imagenes/ImagenInscripciones.jpg';

const Admissions = () => {
  return (
    <section class="relative py-32 lg:py-36 bg-white">


      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <p className="mb-3 text-gray-500 dark:text-gray-400" style={{ marginLeft: '100px' }}>
          <p className="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white" style={{ color: 'green', margin: '20px 0' }}>
            Componente Pedagógico</p>

          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: 'black' }}>
            <li>
              Socio-Afectiva
            </li>
            <li>
              Cognitiva
            </li>
            <li>
              Comunicativa
            </li>
            <li>
              Corporal (Fina, Gruesa)
            </li>
            <li>
              Espiritual, ética y valores
            </li>
            <li>
              Estética
            </li>
          </ul>

        </p>

        <p className="mb-3 text-gray-500 dark:text-gray-400">
          <p class="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white" style={{ color: 'green', textAlign: 'center', margin: '20px 0' }}>
            Calendario</p>
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: 'black', marginLeft: '80px' }}>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">PRIMER PERIODO: </span> 1 de Febrero - 31 de Marzo
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">SEGUNDO PERIODO: </span> 10 de Abril - 9 de Junio
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">TERCER PERIODO: </span> 10 de Julio - 8 de Septiembre
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">CUARTO PERIODO: </span> 11 de Septiembre - 17 de Noviembre
            </li>

            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ textAlign: 'center', color: 'green', margin: '20px 0' }}>Recesos Académicos:</h2>
            <li style={{ margin: '20px 0' }}>
              <span class="font-semibold text-gray-900 dark:text-white">SEMANA SANTA: </span> del 3 de Abril al 7 de Abril
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">VACACIONES: </span> del 20 de Junio al 7 de Julio
            </li>
            <li>
              <span class="font-semibold text-gray-900 dark:text-white">SEMANA DE OCTUBRE: </span> del 9 al 3 de Octubre
            </li>
          </ul>
        </p>
      </div>

      <div class="flex flex-1 justify-center">
  <div class="lg:w-full lg:mx-20 relative">
    <div class="absolute inset-2 mt-10 mb-10 bg-white opacity-50 rounded-2xl "></div>
    <img src={inscripcion} alt="VISION" loading="lazy" class='border rounded-2xl mt-6 mb-6 w-full' />
  </div>
</div>








    </section>
  );
}


export default Admissions

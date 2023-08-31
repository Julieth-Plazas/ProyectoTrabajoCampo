import React from 'react'


const Contact = () => {
  return (
    <div><div className="hero min-h-full" data-theme="cupcake">
    <div className="hero-content flex-col lg:flex-col">
      <div className="mb-5 sm:mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-center col-span-6">
          Contacto
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <div className="col-span-1 justify-center flex items-center">
        </div>
        <div className="col-span-1 p-4">
          <h1 className="text-xl font-bold mb-1">Dirección</h1>
          <span>
            Cra. 10 N° 11 - 16 Barrio Aquimín. <br /> Tunja, Boyacá,
            Colombia.
          </span>
        </div>
        <div className="col-span-1 justify-center flex items-center">
        </div>
        <div className="col-span-1 p-4">
          <h1 className="text-xl font-bold mb-1">Contáctanos</h1>
          <span>
            Móvil: +57 314 4404712
            <br /> +57 310 2075955
          </span>
        </div>
        <div className="col-span-1 justify-center flex items-center">
        </div>
        <div className="col-span-1 p-4">
          <h1 className="text-xl font-bold mb-1">Horario de Atención</h1>
          <span>
            Lunes a Viernes: <br /> 5:00 PM a 6:00 PM
          </span>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Contact
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center">
          Contacto
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h1 className="text-xl font-bold mb-1">Dirección</h1>
            <span>
              Cra. 10 N° 11 - 16 Barrio Aquimín. <br /> Tunja, Boyacá,
              Colombia.
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h1 className="text-xl font-bold mb-1">Contáctanos</h1>
            <span>
              Móvil: +57 314 4404712
              <br /> +57 310 2075955
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h1 className="text-xl font-bold mb-1">Horario de Atención</h1>
            <span>
              Lunes a Viernes: <br /> 5:00 PM a 6:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';

const CardNotice = ({ noticia }) => {
  // Convierte la fecha en un formato legible
  const formattedDate = new Date(noticia.fecha).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{noticia.titulo}</h2>
      <p className="text-gray-600 mb-4">{formattedDate}</p>
      <p className="text-gray-800">{noticia.descripcion}</p>
    </div>
  );
};

export default CardNotice;

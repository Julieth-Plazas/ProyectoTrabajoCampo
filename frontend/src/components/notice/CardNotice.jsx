import React from 'react'

const CardNotice = ({noticia}) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{noticia.titulo}</h2>
            <p className="text-gray-600">{noticia.fecha}</p>
            <p className="mt-4">{noticia.descripcion}</p>
        </div>
    )
}

export default CardNotice
import React from 'react';
import eliminar from '../assets/imagenes/eliminar.png'
import modificar from '../assets/imagenes/modificar.jpg'

const ProductTable = () => {

  const handleEditClick = () => {
    // Lógica para el evento de edición
    console.log('Editar producto');
  };

  const handleDeleteClick = () => {
    // Lógica para el evento de eliminación
    console.log('Eliminar producto');
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Usuario
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">
              Silver
            </td>
            <td className="px-6 py-4">
              Laptop
            </td>
            <td className="px-6 py-4">
              $2999
            </td>
            <td className="px-6 py-4">

            <button onClick={handleEditClick} className="cursor-pointer">
                <img src={modificar} alt="Edit" style={{height:'30px',width:'30px'}} />
              </button>
              <button onClick={handleDeleteClick} className="cursor-pointer ml-2">
                <img src={eliminar} alt="Delete" style={{height:'30px',width:'30px'}}/>
              </button>


            </td>
          </tr>
          {/* Otros elementos de la tabla */}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

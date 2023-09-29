import React, { useEffect, useState } from 'react';
import eliminar from '../assets/imagenes/eliminar.png'
import modificar from '../assets/imagenes/modificar.jpg'
import { BASE_URL } from '../utils/constants';
import Modal from 'react-modal'


const ProductTable = () => {

  const [user, setUser] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(null);

  const {idUserDelete, setIdUserDelete} = useState(null);
  


  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then(res => res.json())
      .then(data => setUser(data.data))
      .catch(err => console.log(err))
  }, [])

  


  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };


  const handleEditClick = (updatedUserData) => {

    console.log('User:', updatedUserData);
    setUpdatedUser(updatedUserData);
    setIsEditModalOpen(true)
  };

  const handleUpdateUser = () => {
    
    fetch(`${BASE_URL}/users/updateUser/${updatedUser._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser), 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        
        alert('Usuario actualizado correctamente');
        closeEditModal(); 
      })
      .catch((error) => {
        console.error('Error al actualizar el usuario:', error.message);
      });
  };
  


  const handleDeleteClick = (userId) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este usuario?');
    
    if (confirmDelete) {
      fetch(`${BASE_URL}/users/deleteUser/${userId}`, {

        method: 'DELETE',

      }).then((response) => {
          if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          alert('user deleted successfully')
          alert(data.message);
          console.log('Usuario eliminado con éxito:', data);


        })
        .catch((error) => {
          console.error('Error al eliminar el usuario:', error.message);
        });
    }
  };


  return (

    <section className="flex justify-center items-center min-h-screen bg-white">

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
              Curso
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
            {user.map(users => (
              

              <tr id={users.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {users.firstname}
                </th>
                <td className="px-6 py-4">
                  {users.lastname}
                </td>
                <td className="px-6 py-4">
                  {users.username}
                </td>
                <td className="px-6 py-4">
                  {users.email}
                </td>
                {
                  users.cursos.map((curso, index) => (
                    <td key={`user-course-${index}`} className="px-6 py-4">
                      {curso.title ? curso.title : 'Sin curso'}
                    </td>
                  ))
                }
                
                <td className="px-6 py-4">

                  <button onClick={()=>{handleEditClick(users)}} className="cursor-pointer">
                    <img src={modificar} alt="Edit" style={{ height: '30px', width: '30px' }} />
                  </button>
                  <button onClick={()=> handleDeleteClick(users._id)}  className="cursor-pointer ml-2">
                    <img src={eliminar} alt="Delete" style={{ height: '30px', width: '30px' }} />
                  </button>


                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    {
      updatedUser ? <Modal
      isOpen={isEditModalOpen}
      onRequestClose={closeEditModal}
      contentLabel='Editar usuario'
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
  
      >
        <div className='bg-white p-4 max-w-md rounded-lg'>
          <h2 className='text-2xl font-semibold'>
            Editar usuario
          </h2>
          <form>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-600 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              
              className="w-full p-2 border border-gray-300 rounded"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="block text-gray-600 font-medium">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              
              className="w-full p-2 border border-gray-300 rounded"
               
              />
          </div>
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-gray-600 font-medium">
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={updatedUser.username}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-600 font-medium">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={updatedUser.email}
              className="w-full p-2 border border-gray-300 rounded"
              readOnly 
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={handleUpdateUser}
            >
              Actualizar Usuario
            </button>
          </div>
        </form>
        <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={()=> setIsEditModalOpen(false)}
          >
            Cerrar
          </button>

        </div>
  
      </Modal>: null
    }
    {/* <Modal
    isOpen={isEditModalOpen}
    onRequestClose={closeEditModal}
    contentLabel='Editar usuario'
    className="fixed inset-0 flex items-center justify-center z-50"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50"

    >
      <div className='bg-white p-4 max-w-md rounded-lg'>
        <h2 className='text-2xl font-semibold'>
          Editar usuario
        </h2>
        <form>
        <div className="mb-4">
          <label htmlFo r="nombre" className="block text-gray-600 font-medium">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={updatedUser.firstname}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly // Campo de solo lectura
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-600 font-medium">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={updatedUser.lastname}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly // Campo de solo lectura
          />
        </div>
        <div className="mb-4">
          <label htmlFor="usuario" className="block text-gray-600 font-medium">
            Usuario
          </label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={updatedUser.username}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly // Campo de solo lectura
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block text-gray-600 font-medium">
            Correo
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={updatedUser.email}
            className="w-full p-2 border border-gray-300 rounded"
            readOnly // Campo de solo lectura
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleUpdateUser}
          >
            Actualizar Usuario
          </button>
        </div>
      </form>

      </div>

    </Modal> */}
    </section>
  );
}

export default ProductTable;

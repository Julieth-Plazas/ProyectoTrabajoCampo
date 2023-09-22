import React, { useEffect, useState } from 'react';
import eliminar from '../assets/imagenes/eliminar.png'
import modificar from '../assets/imagenes/modificar.jpg'
import { BASE_URL } from '../utils/constants';


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

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };


  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };


  const handleEditClick = (updatedUserData) => {

    console.log('Publicación actualizada:', updatedUserData);
    setUpdatedUser(updatedUserData);
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

                  <button onClick={openEditModal} className="cursor-pointer">
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
    </section>
  );
}

export default ProductTable;

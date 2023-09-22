import React, { useContext, useState } from 'react';
import '../assets/styles/post.css';
import { AuthContext } from '../context/AuthContext.js';
import EditModal from './EditModal';
import { BASE_URL } from '../utils/constants';

const Image = ({ post }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updatedPost, setUpdatedPost] = useState(null);
  const { user, dispatch } = useContext(AuthContext);
  user ? console.log(user) : console.log("no hay usuario");
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };


  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };


  const handleUpdatePost = (updatedPostData) => {

    console.log('Publicación actualizada:', updatedPostData);
    setUpdatedPost(updatedPostData);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % post.imagenes.length;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + post.imagenes.length) % post.imagenes.length;
    setCurrentImageIndex(prevIndex);
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta publicación?');

    if (confirmDelete) {
      
      fetch(`${BASE_URL}/posts/deletePost/${post._id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          alert(data.message); 
          console.log('Publicación eliminada con éxito:', data);

          
        })
        .catch((error) => {
          console.error('Error al eliminar la publicación:', error.message);
        });
    }
  };

  return (
    <div className="p-2">
      <div className="">

        <div className="relative group">
          <img
            src={post.imagenes[currentImageIndex]}
            alt={post.titulo}
            className="w-72 h-72 rounded-lg shadow-xl hover:shadow-2xl"
          />
          <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
            <div className="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">{post.titulo}</h1>
              <p className="text-gray-200 font-medium text-sm"></p>
              <small className="text-xs font-light text-gray-300">{post.descripcion}</small>
              <div className="flex justify-between mt-2">
                <button
                  onClick={prevImage}
                  className="text-gray-200 font-medium text-sm cursor-pointer"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextImage}
                  className="text-gray-200 font-medium text-sm cursor-pointer"
                >
                  &#8594;
                </button>
              </div>
              {
                user?.role === 'admin' && (
                  <div className="absolute top-0 left-0">
                    <button className='bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded'
                      onClick={openEditModal}
                    >
                      Editar
                    </button>
                  </div>
                )
              }
              {user?.role === 'admin' && (
                <div className="absolute top-0 right-0">
                  <button className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'
                  onClick={handleDelete}
                  >
                    Eliminar
                  </button>
                </div>
              )

              }
            </div>
          </div>
        </div>

      </div>
      <EditModal
        post={post}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onUpdate={handleUpdatePost}
      />
    </div>
  );
};

export default Image;
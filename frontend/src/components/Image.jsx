import React, { useState } from 'react';
import '../assets/styles/post.css';

const Image = ({ post }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % post.imagenes.length;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + post.imagenes.length) % post.imagenes.length;
    setCurrentImageIndex(prevIndex);
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;

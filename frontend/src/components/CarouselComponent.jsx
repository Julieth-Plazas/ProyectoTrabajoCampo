import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';
import Image from './Image';

const CarouselComponent = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/posts/getPosts`)
      .then(res => res.json())
      .then(data => setPosts(data.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="flex min-h-screen w-full p-5 flex-wrap bg-white">
      <div className="w-full ">
        <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">Galeria</h1>
      </div>
      {posts.length === 0 ? (
        <div className="w-full text-lg text-gray-600 font-medium">
          No hay publicaciones.
        </div>
      ) : (
        <div className="grid grid-cols-2 m-3">
          {posts.map(post => (
            <Image key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;

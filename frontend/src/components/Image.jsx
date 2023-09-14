import React from 'react'
import '../assets/styles/post.css'
const Image = ({ post }) => {

    return (
        <div class="p-2">
            <div class="">
                <div class="relative group">
                    <img
                        src={post.rutaImagen}
                        alt={post.titulo} class="w-full rounded shadow-xl hover:shadow-2xl" />
                    <div
                        class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                    </div>
                    <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <div class="flex-row text-center">
                            <h1 class="text-gray-50 font-bold text-lg">{post.titulo}</h1>
                            <p class="text-gray-200 font-medium text-sm"></p>
                            <small class="text-xs font-light text-gray-300">{post.descripcion}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image
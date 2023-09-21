import React, { useState } from 'react';
import { BASE_URL } from '../utils/constants';

const EditModal = ({ post, isOpen, onClose, onUpdate }) => {
    const [newTitle, setNewTitle] = useState(post.titulo);
    const [newDescription, setNewDescription] = useState(post.descripcion);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedPost = {
            ...post,
            titulo: newTitle,
            descripcion: newDescription,
        };

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: newTitle, descripcion: newDescription }),
        };

        fetch(`${BASE_URL}/posts/updatePost/${post._id}`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error de red: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                alert(data.message);
                console.log('Publicación actualizada con éxito:', data);
            })
            .catch((error) => {
                console.error('Error al actualizar la publicación:', error.message);
            });

        onUpdate(updatedPost);
        onClose();
    };
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="modal-container">
                <div className="modal-content bg-white p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Editar Publicación: {post._id}</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded border-gray-300"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                        <textarea
                            className="w-full p-2 border rounded border-gray-300"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </div>
                    <div className="text-right">
                        <button
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                            onClick={handleUpdate}
                        >
                            Guardar
                        </button>
                        <button
                            className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded ml-2"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;

import React, { useEffect, useState } from "react";
import { BASE_URL } from '../utils/constants';
import { uploadFile } from "../firebase/config";

const Publications = () => {
  const [data, setData] = useState({});
  const [alert, setAlert] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  const [formData, setFormData] = useState({
    fecha: currentDate,
    titulo: '',
    descripcion: '',
    imagenes: [],

  });

  const [imagePreviews, setImagePreviews] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([]);



  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
    setFormData({ ...formData, fecha: e.target.value });
  };

  const handleFileChange = (e) => {
    const newSelectedFiles = Array.from(e.target.files);
    const newSelectedPreviews = [];

    newSelectedFiles.forEach((file) => {
      console.log(file)
      newSelectedPreviews.push(URL.createObjectURL(file));
    });

    setSelectedFiles([...selectedFiles, ...newSelectedFiles]);
    setImagePreviews([...imagePreviews, ...newSelectedPreviews]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let urlsImages = []
      if (selectedFiles.length > 0) {
        const uploadedUrls = await Promise.all(
          Array.from(selectedFiles).map(async (file) => {
            
            const fileUrl = await uploadFile(file);
            urlsImages.push(fileUrl.toString());
            return fileUrl.toString();
          })
        );
        console.log('urls: ',urlsImages)
        console.log(Array.isArray(urlsImages));

        
        

        const res = await fetch(`${BASE_URL}/posts/savePost`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({titulo: formData.titulo, descripcion: formData.descripcion, imagenes: urlsImages})
        });

        const responseData = await res.json();
        console.log(responseData);
        setData(responseData);
        setAlert(responseData.message);
        if (responseData.success) {
          setTimeout(() => {
            // window.location.href = "/";
          }, 3000);
        }

        setTimeout(() => {
          setAlert(null);
        }, 3000);
      }
    } catch (error) {
      setAlert(error.message);
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-white">
      {alert && (
        <div
          className={`${data.success
            ? 'bg-green-100 border-t border-b border-green-500 text-green-700'
            : 'bg-red-100 border-t border-b border-red-500 text-red-700'
            } px-4 py-3`}
          role="alert"
        >
          <p className="font-bold">{data.success ? 'Success' : 'Error'}</p>
          <p className="text-sm">{alert}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/2">
        <div className="mb-4">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
          <input type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { setFormData({ ...formData, titulo: e.target.value }) }} required />
        </div>
        <div className="mb-4">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
          <input type="date" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={currentDate} onChange={handleDateChange} required />
        </div>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e) => { setFormData({ ...formData, descripcion: e.target.value }) }}> </textarea>
        </div>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cargar imagen</label>

          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {imagePreviews.length > 0 ? (
                imagePreviews.map((preview, index) => (
                  <img key={index} src={preview} alt={`Preview ${index}`} className="w-32 h-32 object-cover mr-2" />
                ))
              ) : (
                <>
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Drag and drop your image here or click</p>
                </>
              )}

            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              multiple
            />
          </label>
        </div>
        <div className="mb-4 flex justify-center" style={{ marginTop: "10px" }}>
          <button className="bg-teal-700 rounded-xl text-white py-2.5 px-5 hover:scale-105 duration-300" >Publicar</button>
        </div>
      </form>
    </section>
  );
}

export default Publications;

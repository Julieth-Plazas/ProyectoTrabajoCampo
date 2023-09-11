import React, { useState } from "react";
import { BASE_URL } from '../utils/constants';


const Publications = () => {


  const [data, setData] = useState({})
  const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState({
    fecha: '',
    titulo: '',
    descripcion: '',
    rutaImagen: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const res = await fetch(`${BASE_URL}/imagenes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      setData(data);
      setAlert(data.message); // Always set the alert message

      setTimeout(() => {
        setAlert(null);
      }, 3000);


    } catch (error) {
      setAlert(error.message);
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  }

  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
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
      <div className="bg-gray-100 p-6  rounded-lg shadow-lg w-1/2 ">
        <div className="mb-4">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
          <input type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
          <input type="date" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={currentDate} onChange={handleDateChange} />
        </div>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cargar imagen</label>

          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="mb-4 flex justify-center" style={{ marginTop: "10px" }}>
          <button className="bg-teal-700 rounded-xl text-white py-2.5 px-5 hover:scale-105 duration-300" onClick={handleSubmit}>Publicar</button>
        </div>
      </div>

    </section>
  )

}
export default Publications;

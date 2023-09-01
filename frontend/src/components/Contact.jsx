import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import { EMAIL_TEST } from '../utils/constants';

const Contact = () => {



  const [formData, setFormData] = useState({

    name: '',
    email: '',
    mensaje: ''
  })

  const handleClick = (e) => {
    e.preventDefault()
    console.log(formData)
    emailjs.init('qXas-E1xmQ8FtAURA');

    // Objeto que contiene los parámetros del correo a enviar
    const templateParams = {
      to_email: EMAIL_TEST,
      message: formData.mensaje,
      from_name: formData.name,
      from_email: formData.email
    };

    // Envío del correo a través de emailjs-com
    emailjs.send('service_gzmmipl', 'template_veabqxn', templateParams)
      .then((response) => {
        console.log('Correo enviado:', response);
        alert('correo enviado')
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('error al enviar el correo')
      });
  }

  return (
    <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Contactanos
              </h1>
              <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Completa el formulario para iniciar una conversacion
              </p>

              <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  Cra. 10 N° 11 - 16 Barrio Aquimín. Tunja, Boyacá, Colombia.
                </div>
              </div>

              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  Móvil: +57 314 4404712 <br /> +57 310 2075955
                </div>
              </div>

              {/* <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                info@acme.org
                            </div>
                        </div> */}
            </div>

            <form className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre completo"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => {setFormData({...formData, name: e.target.value})}}
                  required 
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => {setFormData({...formData, email: e.target.value})}}
                  required 
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="mensaje" className="hidden">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  placeholder="Mensaje"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  onChange={(e) => {setFormData({...formData, mensaje: e.target.value})}}
                  required 
                ></textarea>
              </div>

              <button
                onClick={handleClick}
                className="md:w-32 bg-teal-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

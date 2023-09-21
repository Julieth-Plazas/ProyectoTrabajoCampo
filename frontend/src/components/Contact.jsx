import React, { useState } from "react";
import emailjs from "emailjs-com";
import { EMAIL_TEST } from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.mensaje === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("El correo no es válido");
      return;
    }

    emailjs.init("qXas-E1xmQ8FtAURA");

    const templateParams = {
      to_email: EMAIL_TEST,
      message: formData.mensaje,
      from_name: formData.name,
      from_email: formData.email,
    };

    emailjs
      .send("service_gzmmipl", "template_veabqxn", templateParams)
      .then((response) => {
        console.log("Correo enviado:", response);
        setFormData({ name: "", email: "", mensaje: "" });
        alert("Correo enviado");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert("Error al enviar el correo");
      });
  };

  return (
    <div className="container my-12 mx-auto md:px-6">
      <div className="mb-16 text-center">
        <div className="py-4 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <h1 className="text-xl font-bold mb-1">Dirección</h1>
                <span>
                  Cra. 10 N° 11 - 16 Barrio Aquimín. <br /> Tunja, Boyacá,
                  Colombia.
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-1">Contáctanos</h1>
                <span>
                  Móvil: +57 314 4404712 <br /> +57 310 2075955
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-1">Horario de Atención</h1>
                <span>
                  Lunes a Viernes: <br /> 5:00 PM a 6:00 PM
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-lg shadow-lg dark:shadow-black/20 p-6 bg-white dark:bg-gray-800">
                <h2 className="mb-12 text-3xl font-bold">Contáctanos</h2>
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
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
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
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
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
                      onChange={(e) => {
                        setFormData({ ...formData, mensaje: e.target.value });
                      }}
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

              <div className="rounded-lg shadow-lg dark:shadow-black/20 relative h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.822081540893!2d-73.36458008394656!3d5.524168771657986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7dd0d13eefa7%3A0x36810f324ae7d266!2sCra.%2010%20%2311-16%2C%20Tunja%2C%20Boyac%C3%A1!5e0!3m2!1ses-419!2sco!4v1694305737783!5m2!1ses-419!2sco"
                  className="absolute left-0 top-0 h-full w-full rounded-lg"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

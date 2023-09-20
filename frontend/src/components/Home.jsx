import React, { useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import { BASE_URL } from "../utils/constants";
import CardNotice from "./notice/CardNotice";


const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState(null);

  useEffect(() => {
    const getNoticias = async () => {
      try {
        const res = await fetch(`${BASE_URL}/notices`);
        const data = await res.json();
        setNoticias(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNoticias();
  }, []);

  const today = new Date();
  const twoDaysFromNow = new Date(today);
  twoDaysFromNow.setDate(today.getDate() + 2);

  const noticiasProximas = noticias.filter((noticia) => {
    const noticiaFecha = new Date(noticia.fecha);
    return noticiaFecha >= today && noticiaFecha <= twoDaysFromNow;
  });

  useEffect(() => {
    if (noticiasProximas.length > 0) {
      setSelectedNoticia(noticiasProximas[0]);
      setModalVisible(true);
    }
  },[]);

  const closeModal = () => {
    console.log('cerra modal')
    setSelectedNoticia(null);
    setModalVisible(false);
  };
  return (
    <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-white" data-theme="cupcake">

      <div className="container mx-auto md:py-12 lg:px-20 md:px-6 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div
              class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
            >
              <h1
                className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
              >
                Jardin infantil{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 from-20% via-teal-500 via-30% to-green-600">
                  Generaciones{" "}
                </span>
                de paz.
              </h1>
              <p className="mt-8 text-gray-700" style={{ textAlign: "justify" }}>
                El JARDÍN INFANTIL “GENERACIONES DE PAZ” fundamenta su formación
                en principios y valores que privilegian el afecto, el respeto, la
                tolerancia, la espiritualidad y un proceso cognitivo
                constructivista en el entendido que el ser humano se forma y
                construye su futuro desde su nacimiento, en la medida que los
                ambientes donde crece sean favorables y le permitan potenciar se
                en todas sus etapas sin forzar procesos.
              </p>
            </div>
            <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
              <img
                src="https://i.gifer.com/BGzf.gif"
                alt="Hero Hero"
                width="2350"
                height="3000"
                className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96  "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:py-12 lg:px-20 md:px-6 " >

        <CarouselComponent />

      </div>
      {modalVisible && selectedNoticia && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              X
            </button>
            <CardNotice noticia={selectedNoticia} />
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;

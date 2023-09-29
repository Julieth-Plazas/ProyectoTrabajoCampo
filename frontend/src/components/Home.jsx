import React, { useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import { BASE_URL } from "../utils/constants";
import CardNotice from "./notice/CardNotice";
import Modal from "react-modal";

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
      } catch (error) {
        console.log(error);
      }
    };
    getNoticias();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    console.log(`currentDate: ${currentDate}`)
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    const dayAfterTomorrow = new Date(currentDate);
    dayAfterTomorrow.setDate(currentDate.getDate() + 2);

    console.log(`tomorrow: ${tomorrow}, dayAfterTomorrow: ${dayAfterTomorrow}`)

    const noticiasEnRango = noticias.filter((noticia) => {
      console.log(`noticia.fecha: ${noticia.fecha}`)
      const noticiaDate = new Date(noticia.fecha);
      console.log(`noticiaDate: ${noticiaDate}`)
      return noticiaDate >= currentDate && noticiaDate <= tomorrow
    });
    console.log(`noticiasEnRango: ${noticiasEnRango}`)
    if (noticiasEnRango.length > 0) {
      setModalVisible(true);
    }
  }, [noticias]);

  const closeModal = () => {
    setSelectedNoticia(null);
    setModalVisible(false);
  };
  return (
    <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-white" data-theme="cupcake">


      <div className="hero-content flex-col lg:flex-row">
        <div className="mx-auto lg:max-w-7xl w-full   flex flex-col lg:flex-row">
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


      <div className="container mx-auto md:py-12 lg:px-20 md:px-6 " >

        <CarouselComponent />

      </div>

      {/* {modalVisible && selectedNoticia && (
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
      )} */}
      <Modal
        isOpen={modalVisible}
        onRequestClose={closeModal}
        contentLabel="Noticias Importantes"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 max-w-md mx-auto rounded-lg">
          <h2 className="text-2xl font-semibold">Noticias Importantes</h2>
          {noticias.map((noticia) => (
            <CardNotice key={noticia._id} noticia={noticia} />
          ))}
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </Modal>

    </div>
  );
};

export default Home;

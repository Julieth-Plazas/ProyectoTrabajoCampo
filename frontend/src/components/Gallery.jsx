import React from "react";
import { Carousel } from "@material-tailwind/react";

import imagen1 from "../assets/imagenes/Salid_guatica1.jpg";
import imagen2 from "../assets/imagenes/salida_guatica2.jpg";
import imagen3 from "../assets/imagenes/salida_guatica3.jpg";
import imagen4 from "../assets/imagenes/salida_guatica4.jpg";
import imagen5 from "../assets/imagenes/salida_guatica5.jpg";
import imagen6 from "../assets/imagenes/salida_guatica6.jpg";
import imagen7 from "../assets/imagenes/salida_guatica7.jpg";
import imagen8 from "../assets/imagenes/salida_guatica8.jpg";
import background from "../assets/imagenes/fondo.jpg";

export function Carrusel() {
  return (
    <div className="flex items-center justify-center mb-8">
      <Carousel
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-xl w-2/5 h-2/3 overflow-hidden bg-white shadow-xl"
      >
        <img
          src={imagen1}
          alt="Imagen 1"
          className="h-full w-full object-contain"
        />
        <img
          src={imagen2}
          alt="Imagen 2"
          className="h-full w-full object-contain"
        />
        <img
          src={imagen3}
          alt="Imagen 3"
          className="h-full w-full object-contain"
        />
        <img
          src={imagen4}
          alt="Imagen 4"
          className="h-full w-full object-contain"
        />
        <img
          src={imagen5}
          alt="Imagen 5"
          className="h-full w-full object-contain"
        />
        <img
          src={imagen6}
          alt="Imagen 6"
          className="h-full w-full object-contain"
        />
        <img
          src={imagen7}
          alt="Imagen 7"
          className="h-full w-full object-contain"
        />
        <img
          src={imagen8}
          alt="Imagen 8"
          className="h-full w-full object-contain"
        />
      </Carousel>
    </div>
  );
}

export default Carrusel;

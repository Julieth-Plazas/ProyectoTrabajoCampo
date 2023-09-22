import React from 'react';
import { FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="bg-gray-700 text-white p-4">
      <div class="container mx-auto text-center">
        <div class="flex flex-col items-center">
          <p class="text-sm">© 2023 Todos los derechos reservados.</p>
          <p class="text-sm mb-2">Generaciones de Paz</p>

          <div class="flex space-x-4"> 
            <a href="https://m.facebook.com/p/Jard%C3%ADn-Infantil-Generaciones-de-Paz-Tunja-100057130703348/" target="_blank" rel="noopener noreferrer" class="text-xl">
              <FaFacebookSquare />
            </a>
            <a href="https://wa.me/573227573799?text=Hola%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" class="text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

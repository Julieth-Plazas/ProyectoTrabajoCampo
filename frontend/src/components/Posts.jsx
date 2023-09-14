import React, { useEffect } from 'react';
import {
  Carousel,
  initTE,
} from "tw-elements";

const CarouselComponent = () => {
  useEffect(() => {
    // Inicializar el carrusel cuando el componente se monta
    initTE({ Carousel });
  }, []);

  return (
    <div id="carouselExampleCaptions" className="relative" data-te-carousel-init data-te-carousel-slide>
      {/* Slide 1 */}
      <div className="carousel-slide">
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(123).jpg" alt="Slide 1" className="slide-image" />
        <div className="slide-content">
          <h5 className="text-xl">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-slide">
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(124).jpg" alt="Slide 2" className="slide-image" />
        <div className="slide-content">
          <h5 className="text-xl">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="carousel-slide">
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(125).jpg" alt="Slide 3" className="slide-image" />
        <div className="slide-content">
          <h5 className="text-xl">Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="prev-button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">Previous</button>
      <button className="next-button" data-te-target="#carouselExampleCaptions" data-te-slide="next">Next</button>
    </div>
  );
};

export default CarouselComponent;

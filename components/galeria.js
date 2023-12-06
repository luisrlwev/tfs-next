import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import 'yet-another-react-lightbox/styles.css';

export default function Galeria() {

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        // Array de URLs de imágenes
        {
          src: '/img/reclutamiento/slide-reclutamiento-1.jpg',
          texto: 'Innovación'
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-2.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-3.jpg',
          texto: 'Crecimiento'
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-4.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-5.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-6.jpg',
          texto: 'Herramientas financieras'
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-7.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-8.jpg',
          texto: 'Capacitación constante'
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-9.jpg',
          texto: 'El mejor equipo'
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-10.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-11.jpg',
          texto: 'Unidad'
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-12.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-13.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-14.jpg',
          texto: 'Desarrollos exclusivos'
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-15.jpg',
          texto: ''
        },
        {
          src: '/img/reclutamiento/slide-reclutamiento-16.jpg',
          texto: 'Clientes potenciales'
        }
      ];

      // Abre el lightbox en la imagen seleccionada
      const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
      };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {images.map((img, index) => (
          <div key={index} className="group overflow-hidden shadow-lg relative h-300 cursor-pointer" onClick={() => openLightbox(index)}>
              <Image src={img.src} width={348} height={300} alt={`Imagen ${img.texto}`} className="transform hover:scale-110 transition-transform duration-500 img-full" />
              <div className="absolute inset-0 bg-galeria transition duration-500 flex justify-center items-center">
                  <p className="text-tercero text-2xl uppercase letter-spacing-25 font-bold text-center transition duration-500">{img.texto}</p>
              </div>
          </div>
      ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentImage}
          slides={images.map(img => ({ src: img.src }))}
        />
      )}
    </>
  )
}
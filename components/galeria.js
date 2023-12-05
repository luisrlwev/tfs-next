import Image from "next/image";

export default function Galeria() {
    const images = [
        // Array de URLs de imágenes
        '/img/reclutamiento/slide-reclutamiento-1.jpg',
        '/img/reclutamiento/slide-reclutamiento-2.jpg',
        '/img/reclutamiento/slide-reclutamiento-3.jpg',
        '/img/reclutamiento/slide-reclutamiento-4.jpg',
        '/img/reclutamiento/slide-reclutamiento-5.jpg',
        '/img/reclutamiento/slide-reclutamiento-6.jpg',
        '/img/reclutamiento/slide-reclutamiento-7.jpg',
        '/img/reclutamiento/slide-reclutamiento-8.jpg',
        '/img/reclutamiento/slide-reclutamiento-9.jpg',
        '/img/reclutamiento/slide-reclutamiento-10.jpg',
        '/img/reclutamiento/slide-reclutamiento-11.jpg',
        '/img/reclutamiento/slide-reclutamiento-12.jpg',
        '/img/reclutamiento/slide-reclutamiento-13.jpg',
        '/img/reclutamiento/slide-reclutamiento-14.jpg',
        '/img/reclutamiento/slide-reclutamiento-15.jpg',
        '/img/reclutamiento/slide-reclutamiento-16.jpg'
      ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
    {images.map((src, index) => (
        <div key={index} className="overflow-hidden shadow-lg relative h-300">
            <Image src={src} layout="fill" objectFit="cover" alt={`Imagen ${index}`} className="transform hover:scale-110 transition-transform duration-500" />
        </div>
    ))}
    </div>
  )
}
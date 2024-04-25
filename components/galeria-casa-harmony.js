import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import 'yet-another-react-lightbox/styles.css';


// Define tus slides aquí
const slides = [
    { src: '/img/index/casa-harmony/casa-harmony-1.jpg', type: 'image' },
    { src: '/img/index/casa-harmony/casa-harmony-2.jpg', type: 'image' },
    { src: '/video/casa-harmony.mp4', type: 'video', poster: '/img/index/casa-harmony/casa-harmony-3.jpg' },
  ];

export default function GaleriaCasaHarmony() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
        <div className="grid grid-rows-2 grid-flow-col gap-4 h-600">
                {slides.map((slide, index) => (
                    <div key={index} className={`${index === 0 ? "row-span-1" : index === 1 ? "col-span-1" : "row-span-2 col-span-1"} cursor-pointer relative`}>
                        <Image
                            src={slide.type === 'image' ? slide.src : slide.poster}
                            alt={`Slide ${index}`}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsOpen(true);
                            }}
                            layout="fill"
                        />
                    </div>
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    plugins={[Video]}
                    slides={slides.map(slide => ({
                        ...slide,
                        src: slide.src,
                        type: slide.type === 'video' ? 'video' : 'image',
                        sources: [
                            {
                              src: "/video/casa-harmony.mp4",
                              type: "video/mp4",
                            },
                        ],
                    }))}
                    open={isOpen}
                    index={currentIndex}
                    close={() => setIsOpen(false)}
                />
            )}
    </>
  )
}
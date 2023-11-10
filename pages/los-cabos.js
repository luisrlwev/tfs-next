import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Cabos() {
  return (
    <Layout
      title={"Los Cabos"}
      description={"Descubre las mejores opciones en bienes raíces en Los Cabos, la joya turística de la península de Baja California. Encuentra casas, departamentos y lotes en diferentes zonas turísticas y precios, desde la tranquilidad de San José del Cabo hasta la animada vida nocturna de Cabo San Lucas. ¡Encuentra la propiedad ideal para ti en Los Cabos hoy mismo!"}
    >
      <div className="portada-cabos flex relative justify-center">
        <div className="portada-ciudades flex justify-center items-end relative">
          <h1 className="text-white font-bold text-center uppercase text-160 letter-spacing-25 leading-none z-0 -mb-6">Los Cabos</h1>
        </div>
      </div>
      <section className="bg-header z-10 relative">
        <div className="container mx-auto grid justify-center py-10 uppercase text-2xl font-bold letter-spacing-25">
          <p className="w-full text-center text-tfs">Venta de departamentos en Cabo San Lucas</p>
          <p className="w-full text-center text-white">desde: $250,000 USD</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 gap-4">
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Entrega inmediata</p>
            <Swiper
              slidesPerView={1}
              lazy={true}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              modules={[Autoplay, Navigation]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide><Image src={'/img/cabos/los-cabos-entrega-inmediata-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-entrega-inmediata-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-entrega-inmediata-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-entrega-inmediata-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-entrega-inmediata-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-entrega-inmediata-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Lujo, arquitectura y diseño.</p>
          </div>
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Residenciales frente al mar</p>
            <Swiper
              slidesPerView={1}
              lazy={true}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              modules={[Autoplay, Navigation]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide><Image src={'/img/cabos/los-cabos-residencias-frente-al-mar-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Residenciales frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-residencias-frente-al-mar-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Residenciales frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-residencias-frente-al-mar-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Residenciales frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-residencias-frente-al-mar-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Residenciales frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-residencias-frente-al-mar-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Residenciales frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/cabos/los-cabos-residencias-frente-al-mar-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Residenciales frente al mar"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Private Golf & Beach Club.</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid grid-cols-6 gap-4">
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/beach-club.svg'} className="pb-3" width={68} height={68} alt="club de playa"/>
            <p>Club de playa</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/campo-golf.svg'} className="pb-3" width={68} height={68} alt="campo de golf"/>
            <p>Campo de Golf GPA</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/departamentos/bares.svg'} className="pb-3" width={68} height={68} alt="bares y restaurantes"/>
            <p>Bares y restaurantes</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/merida/actividades.svg'} className="pb-3" width={68} height={68} alt="actividades"/>
            <p>Actividades</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/merida/spa.svg'} className="pb-3" width={68} height={68} alt="spa"/>
            <p>Spa</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/ciclopistas.svg'} className="pb-3" width={68} height={68} alt="ciclopistas"/>
            <p>Ciclopistas</p>
          </div>
        </div>
      </section>
      <section className="bg-sexto">
        <div className="container mx-auto text-center py-8 text-black uppercase font-bold letter-spacing-25 text-2xl">
          <p className="text-tfs">Venta de casas en los cabos</p>
          <p>desde: $500,000 USD</p>
        </div>
      </section>
      <div className="portada-cabos-final flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/cabos-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
            <div className="grid grid-cols-1 justify-items-center">
              <div>
                <h3 className="text-white font-bold uppercase letter-spacing-25 text-xl pb-6">Oceanview en el destino con mayor plusvalía en México</h3>
              </div>
              <div className="pb-10">
                <Boton/>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}

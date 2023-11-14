import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Merida() {
  return (
    <Layout
      title={"Mérida"}
      description={"Descubre las mejores opciones en bienes raíces en Mérida, la ciudad colonial más importante del sureste mexicano. Encuentra casas, departamentos y lotes en diferentes zonas y precios. Disfruta de la tranquilidad de la ciudad y la riqueza cultural y gastronómica de Yucatán. ¡Encuentra la propiedad ideal para ti en Mérida hoy mismo!"}
    >
      <div className="portada-merida flex relative justify-center">
        <div className="portada-ciudades flex justify-center items-end relative">
          <h1 className="text-white font-bold text-center uppercase text-160 letter-spacing-25 leading-none z-0 -mb-6">Mérida</h1>
        </div>
      </div>
      <section className="bg-header z-10 relative">
        <div className="container mx-auto grid justify-center py-10 uppercase text-2xl font-bold letter-spacing-25">
          <p className="w-full text-center text-white">Casas en venta cerca de la playa</p>
          <p className="w-full text-center text-tfs">desde: $3,500,000 MXN</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 gap-4">
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Entrega inmediata</p>
            <Swiper
              slidesPerView={1}
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
              <SwiperSlide><Image src={'/img/merida/entrega-inmediata-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/entrega-inmediata-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/entrega-inmediata-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/entrega-inmediata-4.jpeg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/entrega-inmediata-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/entrega-inmediata-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Espectaculares lagos que se integran en total armonía en la arquitectura moderna.</p>
          </div>
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Disfruta la mejor vista frente al mar</p>
            <Swiper
              slidesPerView={1}
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
              <SwiperSlide><Image src={'/img/merida/1-disfruta-la-mejor.png'} width={800} height={407} className="h-full object-cover" alt="Disfruta la mejor vista frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/2-disfruta-la-mejor.png'} width={800} height={407} className="h-full object-cover" alt="Disfruta la mejor vista frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/3-disfruta-la-mejor.png'} width={800} height={407} className="h-full object-cover" alt="Disfruta la mejor vista frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/4-disfruta-la-mejor.png'} width={800} height={407} className="h-full object-cover" alt="Disfruta la mejor vista frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/5-disfruta-la-mejor.jpg'} width={800} height={407} className="h-full object-cover" alt="Disfruta la mejor vista frente al mar"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/merida/6-disfruta-la-mejor.jpg'} width={800} height={407} className="h-full object-cover" alt="Disfruta la mejor vista frente al mar"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Frente al mar con increíbles vistas.</p>
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
          <p>Lotes</p>
          <p className="text-tfs">desde: $2,000,000 MXN</p>
        </div>
      </section>
      <div className="portada-merida-final flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/merida-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-end relative">
            <div className="pb-10">
              <Boton/>
            </div>
        </div>
      </div>
    </Layout>
  );
}

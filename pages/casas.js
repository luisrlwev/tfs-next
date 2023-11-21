import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Casas() {
  return (
    <Layout
      title={"Casas"}
      description={"Descubre las mejores casas en la Riviera Maya, Los Cabos y Mérida para vivir o invertir en México. Disfruta de la belleza natural del Caribe mexicano, la tranquilidad de la península de Baja California y la rica cultura de Yucatán. Encuentra opciones en diferentes zonas turísticas, tamaños y precios. ¡Vive en la casa de tus sueños en México hoy mismo!"}
    >
      <div className="portada-casas flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/casas-portada.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video flex justify-center items-center relative">
          <h1 className="text-white font-bold text-center uppercase text-40 letter-spacing-25 text-shadow">Casas</h1>
        </div>
      </div>
      <section className="bg-header">
        <div className="container mx-auto grid justify-center py-10 uppercase text-2xl max-lg:text-base font-bold letter-spacing-25">
          <p className="w-full text-center text-white">Venta de casas de lujo</p>
          <p className="w-full text-center text-tfs">desde: $300,000 USD</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-3 gap-4">
          <div className="max-lg:pb-8">
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">El mejor precio por metro cuadrado</p>
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
              <SwiperSlide><Image src={'/img/casas/1-el-mejor-precio.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/2-el-mejor-precio.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/3-el-mejor-precio.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/4-el-mejor-precio.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/5-el-mejor-precio.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/6-el-mejor-precio.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">Disfruta de tu propia terraza, jardin privado y rooftop con su propia alberca privada.</p>
          </div>
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
              <SwiperSlide><Image src={'/img/casas/casas-entrega-inmediata-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/casas-entrega-inmediata-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/casas-entrega-inmediata-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/casas-entrega-inmediata-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/casas-entrega-inmediata-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/casas/casas-entrega-inmediata-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega inmediata"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">Ganador del premio Península de Arquitectura e Interiorismo.</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid grid-cols-7 max-lg:grid-cols-2 gap-4">
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/ciclopistas.svg'} className="pb-3" width={68} height={68} alt="ciclopistas"/>
            <p>Ciclopistas</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/campo-golf.svg'} className="pb-3" width={68} height={68} alt="campo de golf"/>
            <p>Campo de Golf GPA</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/casas/piscina.svg'} className="pb-3" width={68} height={68} alt="piscina"/>
            <p>Piscina</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/departamentos/bares.svg'} className="pb-3" width={68} height={68} alt="bares y restaurantes"/>
            <p>Bares y restaurantes</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/actividades-acuaticas.svg'} className="pb-3" width={68} height={68} alt="actividades acuáticas"/>
            <p>Actividades acuáticas</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/departamentos/yoga.svg'} className="pb-3" width={68} height={68} alt="zonas de yoga"/>
            <p>Zonas de Yoga</p>
          </div>
          <div className="grid justify-items-center text-center max-lg:col-span-2">
            <Image src={'/img/lotes/beach-club.svg'} className="pb-3" width={68} height={68} alt="beach club"/>
            <p>Beach Club</p>
          </div>
        </div>
      </section>
      <section className="bg-sexto">
        <div className="container mx-auto text-center py-8 text-black uppercase font-bold letter-spacing-25 text-2xl max-lg:text-base max-lg:px-3">
          <p>Inversión inmobiliaria rentable con ingresos hoteleros</p>
          <p>y amplia proyección de plusvalía</p>
        </div>
      </section>
      <div className="portada-casas-final flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/casas-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
          <div className="grid grid-cols-1 justify-items-center">
            <div>
              <h3 className="text-white font-bold text-center uppercase text-xl letter-spacing-25 text-shado pb-5">Acabados modernos inspirados en la naturaleza</h3>
            </div>
            <div>
              <Boton/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Departamentos() {
  return (
    <Layout
      title={"Departamentos"}
      description={"Encuentra los mejores departamentos en la Riviera Maya, Los Cabos y Mérida. Descubre la belleza natural del Caribe mexicano, la tranquilidad de la península de Baja California y la rica cultura de Yucatán. Encuentra opciones en diferentes zonas turísticas, tamaños y precios. ¡Vive en el departamento de tus sueños en México hoy mismo!"}
    >
      <div className="portada-depas flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/depas.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video flex justify-center items-center relative">
          <h1 className="text-white font-bold text-center uppercase text-40 letter-spacing-25 text-shadow">Departamentos</h1>
        </div>
      </div>
      <section className="bg-header">
        <div className="container mx-auto grid justify-center py-10 uppercase text-2xl font-bold letter-spacing-25">
          <p className="w-full text-center text-tfs">Venta de departamentos de lujo en Tulum</p>
          <p className="w-full text-center text-white">desde: $120,000 USD</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 gap-4">
          <div>
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
              <SwiperSlide><Image src={'/img/departamentos/depas-el-mejor-precio-1.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-el-mejor-precio-2.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-el-mejor-precio-3.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-el-mejor-precio-4.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-el-mejor-precio-5.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-el-mejor-precio-6.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Disfruta de tu propia terraza, jardin privado y rooftop con su propia alberca privada.</p>
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
              <SwiperSlide><Image src={'/img/departamentos/depas-entrega-inmediata-1.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-entrega-inmediata-2.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-entrega-inmediata-3.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-entrega-inmediata-4.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-entrega-inmediata-5.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/departamentos/depas-entrega-inmediata-6.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Tu departamento con vista al mar en Cancún.</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid grid-cols-6 gap-4">
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/bares.svg'} className="pb-3" width={68} height={68} alt="bares y restaurantes"/>
                <p>Bares y restaurantes</p>
              </div>
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/biblioteca.svg'} className="pb-3" width={68} height={68} alt="biblioteca"/>
                <p>Biblioteca</p>
              </div>
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/yoga.svg'} className="pb-3" width={68} height={68} alt="áreas de yoga"/>
                <p>Áreas de Yoga</p>
              </div>
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/gym.svg'} className="pb-3" width={68} height={68} alt="gym"/>
                <p>Gym</p>
              </div>
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/coworking.svg'} className="pb-3" width={68} height={68} alt="coworking"/>
                <p>Coworking</p>
              </div>
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/jardin-zen.svg'} className="pb-3" width={68} height={68} alt="jardin zen"/>
                <p>Jardín Zen</p>
              </div>
        </div>
      </section>
      <section className="bg-sexto">
        <div className="container mx-auto text-center py-8 text-black uppercase font-bold letter-spacing-25 text-xl">
          <p>Departamentos con alberca privada a tan sólo 4 minutos de la playa</p>
          <p>áreas comunes con beach pool & beach lounge</p>
        </div>
      </section>
      <div className="portada-depas-final flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/depas-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
          <div className="grid grid-cols-1 justify-items-center">
            <div>
              <h3 className="text-white font-bold text-center uppercase text-xl letter-spacing-25 text-shado pb-5">Plusvalía, lujo y estilo en Tulum</h3>
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

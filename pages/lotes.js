import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Lotes() {
  return (
    <Layout
      title={"Lotes"}
      description={"Descubre los mejores lotes en la Riviera Maya, Los Cabos y Mérida para construir la casa de tus sueños o invertir en el futuro. Disfruta de la belleza natural de México y las oportunidades de inversión en diferentes zonas turísticas. Encuentra opciones en diferentes tamaños y precios. ¡Aprovecha esta oportunidad única para construir la casa de tus sueños en México hoy mismo!"}
    >
      <div className="portada-lotes flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/lotes-portada.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video flex justify-center items-center relative">
          <h1 className="text-white font-bold text-center uppercase text-40 letter-spacing-25 text-shadow">Terrenos cerca del mar</h1>
        </div>
      </div>
      <section className="bg-header">
        <div className="container mx-auto grid justify-center py-10 uppercase text-2xl font-bold letter-spacing-25">
          <p className="w-full text-center text-white">Lotes desde: <span className="text-tfs"> $110,000 usd</span></p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 gap-4">
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Lotes residenciales con <br/>campo de golf</p>
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
              <SwiperSlide><Image src={'/img/lotes/lotes-residenciales-1.jpeg'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/lotes/lotes-residenciales-2.webp'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/lotes/lotes-residenciales-3.webp'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/lotes/lotes-residenciales-4.jpeg'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Financiamiento hasta 9 años.</p>
          </div>
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Terrenos en el residencial más <br/>exclusivo de Tulum</p>
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
              <SwiperSlide><Image src={'/img/lotes/terrenos-en-el-residencial-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/lotes/terrenos-en-el-residencial-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/lotes/terrenos-en-el-residencial-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/lotes/terrenos-en-el-residencial-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text">Club de playa privado.</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid grid-cols-7 gap-4">
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
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/beach-club.svg'} className="pb-3" width={68} height={68} alt="beach club"/>
            <p>Beach Club</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/cenotes.svg'} className="pb-3" width={68} height={68} alt="cenotes naturales"/>
            <p>Cenotes naturales</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/ciclopistas.svg'} className="pb-3" width={68} height={68} alt="ciclopistas"/>
            <p>Ciclopistas</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/campo-golf.svg'} className="pb-3" width={68} height={68} alt="campo de golf"/>
            <p>Campo de Golf GPA</p>
          </div>
        </div>
      </section>
      <section className="bg-sexto">
        <div className="container mx-auto text-center py-8 text-black uppercase font-bold letter-spacing-25 text-2xl">
          <p>Invierte en tu departamento con vista al</p>
          <p>mar en la Riviera Maya</p>
        </div>
      </section>
      <div className="portada-lotes-final flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/lotes-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
          <div className="grid grid-cols-1 justify-items-center">
            <div>
              <h3 className="text-white font-bold text-center uppercase text-xl letter-spacing-25 text-shado pb-5">Exclusividad y lujo en la playa</h3>
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

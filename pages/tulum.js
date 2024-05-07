import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Script from "next/script";
import Layout from "@/components/layout";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Boton from "@/components/boton";
import Formulario from "@/components/formulario";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Tulum() {
  // Traducciones
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };
  return (
    <Layout
      title={t('Tulum')}
      description={t('tulum_descripcion')}
    >
      {/* Evento de pixel de Tulum */}
      <Script
        id="script-pixel-tulum"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '254729565941530');
              fbq('track', 'Tulum');
          `,
        }}
      />
      <div className="portada-tulum-inicio flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="portada-ciudades flex justify-center items-end relative">
          <h1 className="text-white font-bold text-center uppercase text-160 letter-spacing-25 leading-none z-0 -mb-6 max-lg:text-5xl max-lg:-mb-2">Tulum</h1>
        </div>
      </div>
      <section className="bg-header">
        <div className="container mx-auto grid justify-center py-10 uppercase text-lg lg:text-2xl font-bold letter-spacing-25 px-4">
          <p className="w-full text-center text-tfs">{t('venta_departamentos_lujo')}</p>
          <p className="w-full text-center text-white">{t('desde')} $130,000 USD</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 max-lg:px-3">
          <div className="max-lg:pb-8">
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 max-lg:text-2xl text-center pb-7">{t('el_mejor')}</p>
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
              className="mySwiper cursor-pointer"
              onClick={abrirModal}
            >
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/tulum/entrega-inmediata-1.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="relative h-full">
                  <Image src={'/img/tulum/entrega-inmediata-2.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="relative h-full">
                  <Image src={'/img/tulum/entrega-inmediata-3.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="relative h-full">
                  <Image src={'/img/tulum/entrega-inmediata-4.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="relative h-full">
                  <Image src={'/img/tulum/entrega-inmediata-5.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">{t('disfruta_oasis')}</p>
          </div>
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">{t('entrega')}</p>
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
              className="mySwiper cursor-pointer"
              onClick={abrirModal}
            >
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/tulum/el-mejor-precio-1.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/tulum/el-mejor-precio-2.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/tulum/el-mejor-precio-3.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/tulum/el-mejor-precio-4.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/tulum/el-mejor-precio-5.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">{t('tu_departamento_vista')}</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid max-lg:grid-cols-2 grid-cols-6 gap-4">
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/bares.svg'} className="pb-3" width={68} height={68} alt="bares y restaurantes"/>
                <p>{t('bares')}</p>
              </div>
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/biblioteca.svg'} className="pb-3" width={68} height={68} alt="biblioteca"/>
                <p>{t('biblioteca')}</p>
              </div>
              <div className="grid justify-items-center text-center">
                <Image src={'/img/departamentos/yoga.svg'} className="pb-3" width={68} height={68} alt="áreas de yoga"/>
                <p>{t('yoga')}</p>
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
                <p>{t('jardin')}</p>
              </div>
        </div>
      </section>
      <section className="bg-sexto">
        <div className="container mx-auto text-center py-8 text-black uppercase font-bold letter-spacing-25 max-lg:text-base max-lg:px-2 text-xl">
          <p>{t('departamento_con')}</p>
          <p>{t('areas_comunes')}</p>
        </div>
      </section>
      <div className="portada-depas-final flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/depas-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
          <div className="grid grid-cols-1 justify-items-center">
            <div>
              <h3 className="text-white font-bold text-center uppercase text-xl letter-spacing-25 text-shado pb-5 max-lg:px-7">{t('plusvalia')}</h3>
            </div>
            <div>
              <Boton/>
            </div>
          </div>
        </div>
      </div>
      <Formulario show={showModal} onClose={cerrarModal}/>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}
import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import Formulario from "@/components/formulario";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Cancun() {
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
      title={"Cancún"}
      description={t('cancun_descripcion')}
    >
      <div className="portada-cancun-inicio flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="portada-ciudades flex justify-center items-end relative">
          <h1 className="text-white font-bold text-center uppercase text-160 letter-spacing-25 leading-none z-0 -mb-6 max-lg:text-5xl max-lg:-mb-2">Cancún</h1>
        </div>
      </div>
      <section className="bg-header z-10 relative">
        <div className="container mx-auto grid justify-center py-10 uppercase text-2xl font-bold letter-spacing-25 max-lg:text-base">
          <p className="w-full text-center text-tfs">{t('venta_departamentos_lujo')}</p>
          <p className="w-full text-center text-white">{t('desde')} $150,000 USD</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-3 gap-4">
          <div className="max-lg:pb-8 max-lg:order-last">
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">{t('el_mejor')}</p>
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
                  <Image src={'/img/cancun/el-mejor-precio-1.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/el-mejor-precio-2.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/el-mejor-precio-3.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/el-mejor-precio-4.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/el-mejor-precio-5.jpg'} width={800} height={407} className="h-full object-cover" alt="El mejor precio por metro cuadrado"/>
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
                  <Image src={'/img/cancun/entrega-inmediata-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega Inmediata"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/entrega-inmediata-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega Inmediata"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/entrega-inmediata-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega Inmediata"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/entrega-inmediata-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega Inmediata"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/cancun/entrega-inmediata-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Entrega Inmediata"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">{t('tu_departamento')}</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid grid-cols-6 max-lg:grid-cols-2 gap-4">
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/beach-club.svg'} className="pb-3" width={68} height={68} alt="club de playa"/>
            <p>Beach Club</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/campo-golf.svg'} className="pb-3" width={68} height={68} alt="campo de golf"/>
            <p>{t('campo')}</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/departamentos/bares.svg'} className="pb-3" width={68} height={68} alt="bares y restaurantes"/>
            <p>{t('bares')}</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/merida/actividades.svg'} className="pb-3" width={68} height={68} alt="actividades"/>
            <p>{t('actividades')}</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/merida/spa.svg'} className="pb-3" width={68} height={68} alt="spa"/>
            <p>Spa</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/ciclopistas.svg'} className="pb-3" width={68} height={68} alt="ciclopistas"/>
            <p>{t('ciclopistas')}</p>
          </div>
        </div>
      </section>
      <section className="bg-sexto">
        <div className="container mx-auto text-center py-8 text-black uppercase font-bold letter-spacing-25 text-2xl max-lg:text-base">
          <p>{t('exclusivos_departamentos')}</p>
        </div>
      </section>
      <div className="portada-franquicias-cancun-final flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
            <div className="grid grid-cols-1 justify-items-center">
              <div>
                <h3 className="text-white font-bold uppercase letter-spacing-25 text-xl text-center max-lg:text-base pb-6">{t('plusvalia_lujo')}</h3>
              </div>
              <div className="pb-10 max-lg:pb-0">
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
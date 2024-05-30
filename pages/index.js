import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import { FaLocationDot, FaWhatsapp, FaAngleLeft, FaAngleRight, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Boton from "@/components/boton";
import BotonDos from "@/components/boton-dos";
import BotonTres from "@/components/boton-tres";
import Formulario from "@/components/formulario";
import GaleriaPanorama from "@/components/galeria-panorama";
import GaleriaAurora from "@/components/galeria-aurora";
import GaleriaCasaHarmony from "@/components/galeria-casa-harmony";
import GaleriaOneOnly from "@/components/galeria-one-only";
import GaleriaVillas from "@/components/galeria-villas";
import Galeria6Rios from "@/components/galeria-6-rios";
import GaleriaBalche from "@/components/galeria-balche";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function Home() {
  const { t } = useTranslation()

  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  const [swiperInstance, setSwiperInstance] = useState(null);

  // Manejador para actualizar la instancia de Swiper
  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
  };

  const [mySwiperDos, setMySwiperDos] = useState(null);

  // Esta función maneja ambas instancias de swiper
  const handleMultipleSwipers = (swiper) => {
    handleSwiper(swiper);
    setMySwiperDos(swiper);
  };

  // Función para navegar a un slide específico
  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const [mySwiper, setMySwiper] = useState(null);

  return (
    <Layout
      title={t('inicio')}
      description={t('inicio_descripcion')}
    >
      <section className="portada-new-home flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/new-home.mp4" className="absolute video-fondo video-new object-cover" autoPlay muted playsInline loop></video>
        </div>
        <div className="overlay-tulum h-full w-full absolute">
        </div>
        <div className="video-new flex flex-col justify-center items-center relative xl:w-3/4 2xl:w-2/4">
          <h1 className="text-white font-bold text-center uppercase text-3xl lg:text-6xl letter-spacing-25 text-shadow mb-6 lg:mb-24">{t('encontremos')}</h1>
          <div className="container mx-auto grid lg:grid-cols-2 gap-5">
            <div className="grid max-md:justify-center lg:justify-end" onClick={abrirModal}>
              <BotonTres/>
            </div>
            <div className='grid max-md:justify-center lg:justify-start'>
              <Link href={'/nosotros'} className='uppercase py-3 px-20 font-bold bg-septimo text-lg letter-spacing-25'>{t('conocenos')}</Link>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 mb-6 border-b-2 w-full'>
          <div className='container mx-auto grid max-md:grid-cols-2 lg:grid-cols-5 text-center xl:w-3/4 2xl:w-2/4'>
            <div>
              <Link href={'/vallarta'} className='uppercase font-bold text-white letter-spacing-25 hover:border-b-4'>Vallarta</Link>
            </div>
            <div>
              <Link href={'/los-cabos'} className='uppercase font-bold text-white letter-spacing-25 hover:border-b-4'>Los Cabos</Link>
            </div>
            <div>
              <Link href={'/merida'} className='uppercase font-bold text-white letter-spacing-25 hover:border-b-4'>Mérida</Link>
            </div>
            <div>
              <Link href={'/tulum'} className='uppercase font-bold text-white letter-spacing-25 hover:border-b-4'>Tulum</Link>
            </div>
            <div className="max-md:col-span-2">
              <Link href={'/cancun'} className='uppercase font-bold text-white letter-spacing-25 hover:border-b-4'>Cancún</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-2 py-10 max-md:col-span-6 max-md:pl-4">
            <p className="text-onceavo">{t('nuevos_desarrollos')}</p>
          </div>
          <div className="col-span-10 grid content-center max-md:col-span-6 max-md:pr-4">
            <hr className="h-0.5 bg-decimo"/>
          </div>
          <div className="col-span-12">
            <Swiper
                onSwiper={setMySwiper}
                className="nuevos-desarrollos"
                slidesPerView={1}
                navigation={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                style={{
                  '--swiper-navigation-color': '#BCB08A',
                  '--swiper-pagination-color': '#BCB08A',
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
              >
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 pr-16 flex max-md:col-span-12 max-md:px-4 max-md:pb-12" onClick={abrirModal}>
                      <div>
                        <p className="flex gap-2 uppercase font-semibold text-tfs pb-10 max-md:pb-3"><FaLocationDot/> Cabo San Lucas, B.C.S.</p>
                        <h3 className="text-5xl font-bold uppercase text-tercero pb-10 max-md:text-3xl max-md:pb-3">Panorama</h3>
                        <p className="font-medium text-onceavo pb-10 max-md:pb-3">{t('condos_2_3')}<br/>{t('equipamiento_incluido')}</p>
                        <p className="text-xl pb-16 max-md:pb-8 max-md:text-lg">{t('las_mejores_vistas')}</p>
                        <div className="flex justify-center">
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-12 max-md:px-4">
                      <GaleriaPanorama/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 pr-16 flex max-md:col-span-12 max-md:px-4 max-md:pb-12" onClick={abrirModal}>
                      <div>
                        <p className="flex gap-2 uppercase font-semibold text-tfs pb-10 max-md:pb-3"><FaLocationDot/> Cancún, Quintana Roo</p>
                        <h3 className="text-5xl font-bold uppercase text-tercero pb-10 max-md:text-3xl max-md:pb-3">{t('las_mejores_vistas_cancun')}</h3>
                        <p className="font-medium text-onceavo pb-10 max-md:pb-3">{t('1_3_habitaciones')}</p>
                        <p className="text-xl pb-16 max-md:pb-8 max-md:text-lg">{t('impresionantes_torres')}</p>
                        <div className="flex justify-center">
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-12 max-md:px-4">
                      <GaleriaAurora/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 pr-16 flex max-md:col-span-12 max-md:px-4 max-md:pb-12" onClick={abrirModal}>
                      <div>
                        <p className="flex gap-2 uppercase font-semibold text-tfs pb-10 max-md:pb-3"><FaLocationDot/> Tulum, Quintana Roo</p>
                        <h3 className="text-5xl font-bold uppercase text-tercero pb-10 max-md:text-3xl max-md:pb-3">{t('casa_harmony')}</h3>
                        <p className="font-medium text-onceavo pb-10 max-md:pb-3">{t('3_habitaciones')}</p>
                        <p className="text-xl pb-16 max-md:pb-8 max-md:text-lg">{t('casa_residencial')}</p>
                        <div className="flex justify-center">
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-12 max-md:px-4">
                      <GaleriaCasaHarmony/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 pr-16 flex max-md:col-span-12 max-md:px-4 max-md:pb-12" onClick={abrirModal}>
                      <div>
                        <p className="flex gap-2 uppercase font-semibold text-tfs pb-10 max-md:pb-3"><FaLocationDot/> Cabo San Lucas, B.C.S.</p>
                        <h3 className="text-5xl font-bold uppercase text-tercero pb-10 max-md:text-3xl max-md:pb-3">6 Ríos</h3>
                        <p className="font-medium text-onceavo pb-10 max-md:pb-3">{t('4_topologias')}<br/>{t('3_rec')}</p>
                        <p className="text-xl pb-16 max-md:pb-8 max-md:text-lg">{t('forma_parte')}</p>
                        <div className="flex justify-center">
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-12 max-md:px-4">
                      <Galeria6Rios/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 pr-16 flex max-md:col-span-12 max-md:px-4 max-md:pb-12" onClick={abrirModal}>
                      <div>
                        <p className="flex gap-2 uppercase font-semibold text-tfs pb-10 max-md:pb-3"><FaLocationDot/> Yucatán, México</p>
                        <h3 className="text-5xl font-bold uppercase text-tercero pb-10 max-md:text-3xl max-md:pb-3">{t('villas_solo')}</h3>
                        <p className="font-medium text-onceavo pb-10 max-md:pb-3">{t('11_exclusivas')}<br/>{t('3_recamaras')}</p>
                        <p className="text-xl pb-16 max-md:pb-8 max-md:text-lg">{t('exclusivo_complejo')}</p>
                        <div className="flex justify-center">
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-12 max-md:px-4">
                      <GaleriaOneOnly/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 pr-16 flex max-md:col-span-12 max-md:px-4 max-md:pb-12" onClick={abrirModal}>
                      <div>
                        <p className="flex gap-2 uppercase font-semibold text-tfs pb-10 max-md:pb-3"><FaLocationDot/> Tulum, Quintana Roo</p>
                        <h3 className="text-5xl font-bold uppercase text-tercero pb-10 max-md:text-3xl max-md:pb-3">Balché</h3>
                        <p className="font-medium text-onceavo pb-10 max-md:pb-3">{t('3_departamentos')}<br/>{t('1_rec')}</p>
                        <p className="text-xl pb-16 max-md:pb-8 max-md:text-lg">{t('descubre_balche')}</p>
                        <div className="flex justify-center">
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-12 max-md:px-4">
                      <GaleriaBalche/>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 pr-16 flex max-md:col-span-12 max-md:px-4 max-md:pb-12" onClick={abrirModal}>
                      <div>
                        <p className="flex gap-2 uppercase font-semibold text-tfs pb-10 max-md:pb-3"><FaLocationDot/> Nuevo Vallarta, Nayarit</p>
                        <h3 className="text-5xl font-bold uppercase text-tercero pb-10 max-md:text-3xl max-md:pb-3">{t('villas_privadas')}</h3>
                        <p className="font-medium text-onceavo pb-10 max-md:pb-3">{t('4_5_rec')}</p>
                        <p className="text-xl pb-16 max-md:pb-8 max-md:text-lg">{t('escenario_espectacular')}</p>
                        <div className="flex justify-center">
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-12 max-md:px-4">
                      <GaleriaVillas/>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-span-2 py-10 max-md:col-span-6 max-md:pl-4">
            <button className='absolute z-30 boton-prev max-md:hidden' onClick={() => mySwiper?.slidePrev()}><FaAngleLeft className='text-tfs text-3xl'/></button>
            <button className='absolute z-30 boton-next max-md:hidden' onClick={() => mySwiper?.slideNext()}><FaAngleRight className='text-tfs text-3xl'/></button>
            <p className="text-onceavo">{t('preventa_exclusiva')}</p>
          </div>
          <div className="col-span-10 grid content-center max-md:col-span-6 max-md:pr-4">
            <hr className="h-0.5 bg-decimo"/>
          </div>
        </div>
      </section>
      <section className="bg-banner-whats relative max-md:py-10">
        <div className="overlay-home h-full w-full absolute bg-right"></div>
        <div className="container mx-auto grid grid-cols-12 h-80 relative">
          <div className="col-span-8 flex items-center max-md:col-span-12 max-md:px-4">
            <div className="text-white">
              <p className='max-md:text-center'>{t('desarrollos_noticias')}</p>
              <h3 className="font-bold text-4xl pt-5 max-md:text-2xl max-md:text-center max-md:pt-8">{t('unete_nuestro')}</h3>
            </div>
          </div>
          <div className="col-span-4 flex justify-center items-center max-md:col-span-12 max-md:px-4">
            <div>
              <a href="https://wa.me/529848035450" className="flex items-center px-5 py-2 text-white bg-green-500 rounded-md text-sm"><FaWhatsapp className="mr-2"/> {t('encuentranos')}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4 py-20 max-md:col-span-8 max-md:pl-4 max-md:py-10">
            <p className="text-onceavo">{t('mejores')}</p>
          </div>
          <div className="col-span-8 grid content-center max-md:col-span-4 max-md:pr-4">
            <hr className="h-0.5 bg-decimo"/>
          </div>
          <div className="col-span-12">
            <Swiper
                onSwiper={handleMultipleSwipers}
                slidesPerView={1}
                navigation={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
              >
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-cabos max-md:col-span-12">
                      <div className="h-600 w-full py-11 flex flex-col justify-between galeria-responsive">
                        <div className="pl-16 max-md:pl-6">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Baja California Sur</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4 max-md:text-3xl">Cabo San Lucas</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <button className='py-2 px-8 bg-tfs text-white text-sm'>{t('contactanos')}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center max-md:col-span-12 max-md:px-4 max-md:pt-6">
                      <div className="pl-16 max-md:pl-0">
                        <p className="font-medium text-onceavo pb-4">{t('consulta')}</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25 max-md:text-2xl">{t('iman')}</h3>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('los_cabos_emerge')}</p>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('este_destino')}</p>
                        <p className="text-sm pb-10 text-secondary text-justify">{t('la_region')}</p>
                        <div className="flex justify-center">
                          <Link href={'/los-cabos'} className='py-3 px-6 bg-tfs text-white text-sm'>{t('conoce')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-vallarta max-md:col-span-12">
                      <div className="h-600 w-full py-11 flex flex-col justify-between galeria-responsive">
                        <div className="pl-16 max-md:pl-6">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Jalisco</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4 max-md:text-3xl">PUERTO VALLARTA</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <button className='py-2 px-8 bg-tfs text-white text-sm'>{t('contactanos')}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center max-md:col-span-12 max-md:px-4 max-md:pt-6">
                      <div className="pl-16 max-md:pl-0">
                        <p className="font-medium text-onceavo pb-4">{t('consulta')}</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25 max-md:text-2xl">{t('boom_inmobiliario')}</h3>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('durante')}</p>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('conocido')}</p>
                        <p className="text-sm pb-10 text-secondary text-justify">{t('el_mercado')}</p>
                        <div className="flex justify-center">
                          <Link href={'/vallarta'} className='py-3 px-6 bg-tfs text-white text-sm'>{t('conoce')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-cancun max-md:col-span-12">
                      <div className="h-600 w-full py-11 flex flex-col justify-between galeria-responsive">
                        <div className="pl-16 max-md:pl-6">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Quintana Roo</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4 max-md:text-3xl">Cancún</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <button className='py-2 px-8 bg-tfs text-white text-sm'>{t('contactanos')}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center max-md:col-span-12 max-md:px-4 max-md:pt-6">
                      <div className="pl-16 max-md:pl-0">
                        <p className="font-medium text-onceavo pb-4">{t('consulta')}</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25 max-md:text-2xl">{t('crecimiento_exponencial')}</h3>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('el_ambito')}</p>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('un_ejemplo')}</p>
                        <p className="text-sm pb-10 text-secondary text-justify">{t('estas_inversiones')}</p>
                        <div className="flex justify-center">
                          <Link href={'/cancun'} className='py-3 px-6 bg-tfs text-white text-sm'>{t('conoce')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-tulum max-md:col-span-12">
                      <div className="h-600 w-full py-11 flex flex-col justify-between galeria-responsive">
                        <div className="pl-16 max-md:pl-6">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Quintana Roo</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4 max-md:text-3xl">Tulum</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <button className='py-2 px-8 bg-tfs text-white text-sm'>{t('contactanos')}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center max-md:col-span-12 max-md:px-4 max-md:pt-6">
                      <div className="pl-16 max-md:pl-0">
                        <p className="font-medium text-onceavo pb-4">{t('consulta')}</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25 max-md:text-2xl">{t('joya')}</h3>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('tulum_emergiendo')}</p>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('con_un_precio')}</p>
                        <p className="text-sm pb-10 text-secondary text-justify">{t('la_plusvalia')}</p>
                        <div className="flex justify-center">
                          <Link href={'/tulum'} className='py-3 px-6 bg-tfs text-white text-sm'>{t('conoce')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-pdc max-md:col-span-12">
                      <div className="h-600 w-full py-11 flex flex-col justify-between galeria-responsive">
                        <div className="pl-16 max-md:pl-6">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Quintana Roo</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4 max-md:text-3xl">Playa de Carmen </h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <button className='py-2 px-8 bg-tfs text-white text-sm'>{t('contactanos')}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center max-md:col-span-12 max-md:px-4 max-md:pt-6">
                      <div className="pl-16 max-md:pl-0">
                        <p className="font-medium text-onceavo pb-4">{t('consulta')}</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25 max-md:text-2xl">{t('referente')}</h3>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('en_el_2023')}</p>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('pdc')}</p>
                        <p className="text-sm pb-10 text-secondary text-justify">{t('demanda_solida')}</p>
                        <div className="flex justify-center">
                          <Link href={'/tulum'} className='py-3 px-6 bg-tfs text-white text-sm'>{t('conoce')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-merida max-md:col-span-12">
                      <div className="h-600 w-full py-11 flex flex-col justify-between galeria-responsive">
                        <div className="pl-16 max-md:pl-6">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Yucatán</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4 max-md:text-3xl">Mérida </h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <button className='py-2 px-8 bg-tfs text-white text-sm'>{t('contactanos')}</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center max-md:col-span-12 max-md:px-4 max-md:pt-6">
                      <div className="pl-16 max-md:pl-0">
                        <p className="font-medium text-onceavo pb-4">{t('consulta')}</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25 max-md:text-2xl">{t('ciudad_segura')}</h3>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('el_mercado_yucateco')}</p>
                        <p className="text-sm pb-3 text-secondary text-justify max-md:text-base">{t('yucatan')}</p>
                        <p className="text-sm pb-10 text-secondary text-justify">{t('la_ubicacion')}</p>
                        <div className="flex justify-center">
                          <Link href={'/merida'} className='py-3 px-6 bg-tfs text-white text-sm'>{t('conoce')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className='col-span-12 py-10 max-md:px-4'>
            <Swiper
                  pagination={{
                    type: 'fraction',
                    el: '.custom-swiper-pagination' // Asegura que Swiper use este elemento para la paginación
                  }}
                  navigation={false}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                  }}
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true}
                  // Responsive breakpoints
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 5,
                      spaceBetween: 15
                    }
                  }}
                >
                  <SwiperSlide onClick={() => goToSlide(0)} className='bg-slate-50 content-center py-5 hover:text-gray-700 text-slate-300 cursor-pointer'>
                    <div className='flex gap-4 font-bold justify-center'><FaLocationDot/>Cabo San Lucas</div>
                  </SwiperSlide>
                  <SwiperSlide onClick={() => goToSlide(1)} className='bg-slate-50 content-center py-5 hover:text-gray-700 text-slate-300 cursor-pointer'>
                    <div className='flex gap-4 font-bold justify-center'><FaLocationDot/>Puerto Vallarta</div>
                  </SwiperSlide>
                  <SwiperSlide onClick={() => goToSlide(2)} className='bg-slate-50 content-center py-5 hover:text-gray-700 text-slate-300 cursor-pointer'>
                    <div className='flex gap-4 font-bold justify-center'><FaLocationDot/>Cancún</div>
                  </SwiperSlide>
                  <SwiperSlide onClick={() => goToSlide(3)} className='bg-slate-50 content-center py-5 hover:text-gray-700 text-slate-300 cursor-pointer'>
                    <div className='flex gap-4 font-bold justify-center'><FaLocationDot/>Tulum</div>
                  </SwiperSlide>
                  <SwiperSlide onClick={() => goToSlide(4)} className='bg-slate-50 content-center py-5 hover:text-gray-700 text-slate-300 cursor-pointer'>
                    <div className='flex gap-4 font-bold justify-center'><FaLocationDot/>Playa del Carmen</div>
                  </SwiperSlide>
                  <SwiperSlide onClick={() => goToSlide(5)} className='bg-slate-50 content-center py-5 hover:text-gray-700 text-slate-300 cursor-pointer'>
                    <div className='flex gap-4 font-bold justify-center'><FaLocationDot/>Mérida</div>
                  </SwiperSlide>
            </Swiper>
            <div className='flex justify-center items-center pt-5 gap-3'>
              <button onClick={() => mySwiperDos?.slidePrev()}><FaArrowLeftLong className='text-gray-200 text-3xl'/></button>
              <div className='custom-swiper-pagination'></div> {/* Contenedor personalizado para paginación */}
              <button onClick={() => mySwiperDos?.slideNext()}><FaArrowRightLong className='text-gray-200 text-3xl'/></button>
            </div>
          </div>
          <div className="col-span-12 grid content-center max-md:px-4">
            <hr className="h-0.5 bg-decimo"/>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h3 className="uppercase font-bold text-center text-doce text-2xl pb-4">@FromskyRealtors</h3>
        <div className="grid grid-cols-6 gap-2 max-md:grid-cols-2 max-md:px-4">
          <div>
            <a href="https://www.instagram.com/fromskyrealtors/" target="_blank"><Image src={'/img/index/instagram-1.jpg'} width={300} height={300} alt={'Instagram'}/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/fromskyrealtors/" target="_blank"><Image src={'/img/index/instagram-2.jpg'} width={300} height={300} alt={'Instagram'}/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/fromskyrealtors/" target="_blank"><Image src={'/img/index/instagram-3.jpg'} width={300} height={300} alt={'Instagram'}/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/fromskyrealtors/" target="_blank"><Image src={'/img/index/instagram-4.jpg'} width={300} height={300} alt={'Instagram'}/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/fromskyrealtors/" target="_blank"><Image src={'/img/index/instagram-5.jpg'} width={300} height={300} alt={'Instagram'}/></a>
          </div>
          <div>
            <a href="https://www.instagram.com/fromskyrealtors/" target="_blank"><Image src={'/img/index/instagram-6.jpg'} width={300} height={300} alt={'Instagram'}/></a>
          </div>
        </div>
      </section>
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
import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import Boton from "@/components/boton";
import BotonDos from "@/components/boton-dos";
import BotonTres from "@/components/boton-tres";
import Formulario from "@/components/formulario";
import GaleriaPanorama from "@/components/galeria-panorama";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
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
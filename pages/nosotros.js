import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import Formulario from "@/components/formulario";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Nosotros() {
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
      title={t('nosotros')}
      description={t('nosotros_descripcion')}
    >
      <div className="portada-nosotros flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="overlay-nosotros h-full w-full absolute">
        </div>
        <div className="portada-video-nosotros flex justify-center items-center relative text-white">
          <div className="grid grid-cols-3 justify-items-center">
            <div className="col-span-3">
              <h1 className="font-bold text-center uppercase letter-spacing-25 text-2xl text-shadow pb-10">{t('pasos_firmes')}</h1>
            </div>
            <div className="col-span-3 flex justify-center">
              <p className="text-center w-2/3 max-lg:w-full max-lg:px-3 pb-12">{t('tulum')}</p>
            </div>
            <div className="col-span-3">
              <Image src={'/img/logo.svg'} width={250} height={139} alt="Logo"/>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="grid grid-cols-2 max-lg:grid-cols-1">
          <div className="bg-header text-white text-center px-24 max-lg:px-5 max-lg:py-7 pt-20 pb-24 flex flex-col items-center justify-center">
            <Image src={'/img/nosotros/vision.png'} width={62} height={50} alt="Visión" className="pb-5"/>
            <h2 className="text-4xl uppercase font-bold letter-spacing-25 pb-5 max-lg:text-2xl">{t('vision')}</h2>
            <p>{t('en')} <b>Fromsky Realtors</b>{t('vision_texto')}</p>
          </div>
          <div className="bg-sexto text-secondary text-center px-24 max-lg:px-5 max-lg:py-7 pt-20 pb-24 flex flex-col items-center">
            <Image src={'/img/nosotros/mision.png'} width={62} height={82} alt="Misión" className="pb-5"/>
            <h2 className="text-4xl uppercase font-bold letter-spacing-25 pb-5 max-lg:text-2xl">{t('mision')}</h2>
            <p>{t('en')} <strong>Fromsky Realtors</strong>{t('mision_texto')}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16">
          <h3 className="text-tfs font-bold letter-spacing-25 uppercase text-center text-4xl max-lg:text-2xl pb-10">{t('valores')}</h3>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-3 pb-8 max-lg:pb-4">
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/compromiso.svg'} width={124} height={115} alt="compromiso"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">{t('compromiso')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/confianza.svg'} width={84} height={114} alt="confianza"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">{t('confianza')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/competitividad.svg'} width={116} height={113} alt="competitividad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">{t('competitividad')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/innovacion.svg'} width={99} height={98} alt="innovación"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">{t('innovacion')}</h4>
            </div>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-3">
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/honestidad.svg'} width={112} height={82} alt="honestidad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">{t('honestidad')}</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/etica.svg'} width={92} height={86} alt="etica"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-lg:text-center">{t('etica')}</h4>
            </div>
            <div className="grid justify-center justify-items-center max-lg:col-span-2">
              <Image src={'/img/nosotros/lealtad.svg'} width={85} height={89} alt="lealtad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">{t('lealtad')}</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cuarto py-14 max-lg:py-5">
        <div className="container mx-auto">
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
            >
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-1.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('alejandro')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Alejandro Estrada</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-2.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('rogelio')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Rogelio Jimenez</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-3.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('fonseca')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">José Luis Fonseca</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-4.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('karel')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Karel Prieto</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-5.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('daniel')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Daniel Zarate Aguirre</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-6.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('coral')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Coral Adame</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-7.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('paty')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Patricia Reynoso</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-8.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('sanchez')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Luis Sanchez</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-9.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('luis')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Luis Hernández</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-10.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">{t('daniela')}</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Daniela Estebanez</p>
              </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div className="portada-nosotros-final relative">
        <div className="overlay-nosotros-final h-full w-full absolute">
        </div>
        <div className="container mx-auto portada-video-final-nosotros relative text-white">
          <h3 className="font-bold text-center uppercase letter-spacing-25 text-3xl max-lg:text-lg text-shadow py-32 max-lg:pt-10 max-lg:pb-5">{t('te_estamos')}</h3>
          <div className="grid grid-cols-4 max-lg:hidden">
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/marcador.png'} width={39} height={55} alt="marcador" className="pb-8"/>
              <p className="uppercase letter-spacing-25 text-xl font-semibold">Los Cabos</p>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/marcador.png'} width={39} height={55} alt="marcador" className="pb-8"/>
              <p className="uppercase letter-spacing-25 text-xl font-semibold">Mérida</p>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/marcador.png'} width={39} height={55} alt="marcador" className="pb-8"/>
              <p className="uppercase letter-spacing-25 text-xl font-semibold">Tulum</p>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/marcador.png'} width={39} height={55} alt="marcador" className="pb-8"/>
              <p className="uppercase letter-spacing-25 text-xl font-semibold">Riviera Maya</p>
            </div>
          </div>
          <div className="flex py-6 max-lg:pt-4">
            <span className="separador"></span>
          </div>
          <div className="grid justify-items-center lg:hidden">
            <div>
              <Image src={'/img/nosotros/marcador.png'} width={39} height={55} alt="marcador" className="pb-8 w-14"/>
            </div>
            <div>
              <p className="text-center text-white uppercase font-bold letter-spacing-25 text-xl pb-5">Los Cabos</p>
            </div>
            <div>
              <p className="text-center text-white uppercase font-bold letter-spacing-25 text-xl pb-5">Mérida</p>
            </div>
            <div>
              <p className="text-center text-white uppercase font-bold letter-spacing-25 text-xl pb-5">Tulum</p>
            </div>
            <div>
              <p className="text-center text-white uppercase font-bold letter-spacing-25 text-xl pb-14">Riviera Maya</p>
            </div>
          </div>
          <div className="grid grid-cols-7 pt-20 pb-32 max-lg:hidden">
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/icono-1.png'} width={67} height={67} alt="icono"/>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/icono-2.png'} width={85} height={78} alt="icono"/>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/icono-3.png'} width={76} height={57} alt="icono"/>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/icono-4.png'} width={58} height={77} alt="icono"/>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/icono-5.png'} width={61} height={59} alt="icono"/>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/icono-6.png'} width={79} height={77} alt="icono"/>
            </div>
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/icono-7.png'} width={57} height={61} alt="icono"/>
            </div>
          </div>
          <div className="grid justify-items-center">
            <Link href={'/reclutamiento'} className="text-tercero uppercase letter-spacing-25 font-bold bg-tfs py-3 px-12 rounded-md hover-bg">{t('postulate')}</Link>
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
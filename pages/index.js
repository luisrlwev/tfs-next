import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import Boton from "@/components/boton";
import BotonDos from "@/components/boton-dos";
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
      <section className="portada-tulum flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/riviera-maya.mp4" className="absolute video-fondo video object-cover" autoPlay muted playsInline loop></video>
        </div>
        <div className="overlay-tulum h-full w-full absolute">
        </div>
        <div className="video flex flex-col justify-center items-center relative xl:w-3/4 2xl:w-2/4">
          <h1 className="text-white font-bold text-center uppercase text-3xl lg:text-6xl letter-spacing-25 text-shadow mb-24">Encontremos tu camino juntos</h1>
          <div className="container mx-auto grid grid-cols-2 gap-5">
            <div className="grid justify-end" onClick={abrirModal}>
              <Boton/>
            </div>
            <div className='grid justify-start'>
              <Link href={'/nosotros'} className='uppercase py-3 px-20 font-bold bg-septimo text-lg letter-spacing-25'>Conócenos</Link>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 mb-6 border-b-2 w-full'>
          <div className='container mx-auto grid grid-cols-5 text-center xl:w-3/4 2xl:w-2/4'>
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
            <div>
              <Link href={'/cancun'} className='uppercase font-bold text-white letter-spacing-25 hover:border-b-4'>Cancún</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-2 py-10">
            <p className="text-onceavo">Nuevos Desarrollos</p>
          </div>
          <div className="col-span-10 grid content-center">
            <hr className="h-0.5 bg-decimo"/>
          </div>
          <div className="col-span-12">
          <Swiper
              slidesPerView={1}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              modules={[Autoplay, Navigation]}
              loop={true}
            >
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 pr-8 flex items-center" onClick={abrirModal}>
                    <div>
                      <p className="flex gap-2 uppercase font-semibold text-tfs pb-4"><FaLocationDot/> Cabo San Lucas, B.C.S.</p>
                      <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Panorama</h3>
                      <p className="font-medium text-onceavo pb-4">Condominios de 2 y 3 recámaras.<br/>Equipamiento incluido y sistema lock off.</p>
                      <p className="text-xl pb-16">Las mejores vistas panorámicas al mar y arco ubicado en la zona más alta de El Tezal en Cabo san lucas, desarrollo único de 27 unidades ideal para inversión con ubicación estratégica.</p>
                      <div className="flex justify-center">
                        <BotonDos/>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <GaleriaPanorama/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 pr-8 flex items-center" onClick={abrirModal}>
                    <div>
                      <p className="flex gap-2 uppercase font-semibold text-tfs pb-4"><FaLocationDot/> Cabo San Lucas, B.C.S.</p>
                      <h3 className="text-5xl font-bold uppercase text-tercero pb-4">6 Ríos</h3>
                      <p className="font-medium text-onceavo pb-4">4 tipologías de casas.<br/>3 Recámaras | 6 Baños | Terrazas</p>
                      <p className="text-xl pb-16">Forma parte de una comunidad consolidada que encarna la excelencia en diseño y construcción. Cada hogar cuenta con terrazas, asadores, alberca, jardín privado y mucho más. Desde aquí, disfrutarás de vistas panorámicas que pintan el horizonte con puestas de sol gloriosas y escenas inspiradoras al arco de los cabos.</p>
                      <div className="flex justify-center">
                        <BotonDos/>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <GaleriaPanorama/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 pr-8 flex items-center" onClick={abrirModal}>
                    <div>
                      <p className="flex gap-2 uppercase font-semibold text-tfs pb-4"><FaLocationDot/> Yucatán, México</p>
                      <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Villas</h3>
                      <p className="font-medium text-onceavo pb-4">11 exclusivas villas a pasos de la playa.<br/>3 Niveles | 3 Recámaras | 6 Baños | Rooftop</p>
                      <p className="text-xl pb-16">Exclusivo complejo que te brindará el confort que mereces para gozar una vida tranquila en la costa de Yucatán, rodeado de amenidades, bellezas naturales y servicios indispensables. Único desarrollo en la zona que cuenta con cableado subterráneo de electricidad y cableado de voz y datos.</p>
                      <div className="flex justify-center">
                        <BotonDos/>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <GaleriaPanorama/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 pr-8 flex items-center" onClick={abrirModal}>
                    <div>
                      <p className="flex gap-2 uppercase font-semibold text-tfs pb-4"><FaLocationDot/> Tulum, Quintana Roo</p>
                      <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Balché</h3>
                      <p className="font-medium text-onceavo pb-4">3 departamentos Swim Up y 15 departamentos tipo estudio.<br/>1 recámara | 1 baño | 1 plunge pool</p>
                      <p className="text-xl pb-16">Descubre Balché, un asombroso desarrollo ubicado a solo 10 minutos de la playa. Este impresionante proyecto ofrece una variedad de opciones residenciales, incluyendo 3 departamentos “Swim Up” y 15 estudios con terraza y plunge pool privados. Además, Balché te brinda acceso a exclusivas amenidades que complementarán tu estilo de vida.</p>
                      <div className="flex justify-center">
                        <BotonDos/>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <GaleriaPanorama/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 pr-8 flex items-center" onClick={abrirModal}>
                    <div>
                      <p className="flex gap-2 uppercase font-semibold text-tfs pb-4"><FaLocationDot/> Tulum, Quintana Roo</p>
                      <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Casa Harmony</h3>
                      <p className="font-medium text-onceavo pb-4">3 Habitaciones | Alberca privada <br/></p>
                      <p className="text-xl pb-16">Casa residencial dentro de uno de los campos de golf PGA más reconocidos de México, cuenta con club de playa, piscina privada, gimnasio, restaurantes, cenotes, temazcal, zonas de yoga, casino, farmacia, iglesia, ciclo pistas y mucho más. Experimenta un estilo de vida donde el lujo y la tranquilidad son la prioridad.</p>
                      <div className="flex justify-center">
                        <BotonDos/>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <GaleriaPanorama/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 pr-8 flex items-center" onClick={abrirModal}>
                    <div>
                      <p className="flex gap-2 uppercase font-semibold text-tfs pb-4"><FaLocationDot/> Cancún, Quintana Roo</p>
                      <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Las mejores vistas de Cancún</h3>
                      <p className="font-medium text-onceavo pb-4">1 a 3 Habitaciones | 4 Baños | Alberca privada <br/></p>
                      <p className="text-xl pb-16">Impresionantes Torres de 21 niveles con vistas panorámicas a la Laguna de Nichupté y zona Hotelera de Cancún. Más de 30 increíbles amenidades necesarias para un estilo de vida ideal con albercas, gimnasio, spa, boliche y mucho más. Inmejorable ubicación a 10 minutos del aeropuerto, estación del tren maya y zona hotelera.</p>
                      <div className="flex justify-center">
                        <BotonDos/>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <GaleriaPanorama/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 pr-8 flex items-center" onClick={abrirModal}>
                    <div>
                      <p className="flex gap-2 uppercase font-semibold text-tfs pb-4"><FaLocationDot/> Nuevo Vallarta, Nayarit</p>
                      <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Villas Privadas</h3>
                      <p className="font-medium text-onceavo pb-4">4, 5 y 8 Recámaras | 1 y 2 Niveles | Alberca tipo infinity<br/></p>
                      <p className="text-xl pb-16">En un escenario espectacular a menos de una hora de Puerto Vallarta, Colección de 55 villas en un escenario que une la jungla tropical, el océano y las montañas en una experiencia de vida singular.</p>
                      <div className="flex justify-center">
                        <BotonDos/>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <GaleriaPanorama/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-span-2 py-10">
            <p className="text-onceavo">Preventa Exclusiva</p>
          </div>
          <div className="col-span-10 grid content-center">
            <hr className="h-0.5 bg-decimo"/>
          </div>
        </div>
      </section>
      <section className="bg-banner-whats relative">
        <div class="overlay-home h-full w-full absolute bg-right"></div>
        <div className="container mx-auto grid grid-cols-12 h-80 relative">
          <div className="col-span-8 flex items-center">
            <div className="text-white">
              <p>Desarrollos, noticias y mucho más.</p>
              <h3 className="font-bold text-4xl pt-5">Únete a nuestro canal de whatsapp y mantente al día con los mejores desarrollos.</h3>
            </div>
          </div>
          <div className="col-span-4 flex justify-center items-center">
            <div>
              <a href="https://wa.me/529848035450" className="flex items-center px-5 py-2 text-white bg-green-500 rounded-md text-sm"><FaWhatsapp className="mr-2"/> Encúentranos</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h3 className="uppercase font-bold text-center text-doce text-2xl pb-4">@FromskyRealtors</h3>
        <div className="grid grid-cols-6 gap-2">
          <div>
            <Image src={'/img/index/instagram-1.jpg'} width={300} height={300} alt={'Instagram'} className=""/>
          </div>
          <div>
            <Image src={'/img/index/instagram-2.jpg'} width={300} height={300} alt={'Instagram'} className=""/>
          </div>
          <div>
            <Image src={'/img/index/instagram-3.jpg'} width={300} height={300} alt={'Instagram'} className=""/>
          </div>
          <div>
            <Image src={'/img/index/instagram-4.jpg'} width={300} height={300} alt={'Instagram'} className=""/>
          </div>
          <div>
            <Image src={'/img/index/instagram-5.jpg'} width={300} height={300} alt={'Instagram'} className=""/>
          </div>
          <div>
            <Image src={'/img/index/instagram-6.jpg'} width={300} height={300} alt={'Instagram'} className=""/>
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
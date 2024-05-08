import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import { FaLocationDot, FaWhatsapp, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Boton from "@/components/boton";
import BotonDos from "@/components/boton-dos";
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
                      <GaleriaAurora/>
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
                      <GaleriaCasaHarmony/>
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
                      <Galeria6Rios/>
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
                      <GaleriaOneOnly/>
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
                      <GaleriaBalche/>
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
                      <GaleriaVillas/>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-span-2 py-10">
            <button className='absolute z-30 boton-prev' onClick={() => mySwiper?.slidePrev()}><FaAngleLeft className='text-tfs text-3xl'/></button>
            <button className='absolute z-30 boton-next' onClick={() => mySwiper?.slideNext()}><FaAngleRight className='text-tfs text-3xl'/></button>
            <p className="text-onceavo">Preventa Exclusiva</p>
          </div>
          <div className="col-span-10 grid content-center">
            <hr className="h-0.5 bg-decimo"/>
          </div>
        </div>
      </section>
      <section className="bg-banner-whats relative">
        <div className="overlay-home h-full w-full absolute bg-right"></div>
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
      <section className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4 py-10">
            <p className="text-onceavo">Mejores ubicaciones para invertir en México</p>
          </div>
          <div className="col-span-8 grid content-center">
            <hr className="h-0.5 bg-decimo"/>
          </div>
          <div className="col-span-12">
            <Swiper
                onSwiper={handleSwiper}
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
                    <div className="col-span-6 flex items-center justify-center bg-slide-cabos">
                      <div className="h-500 w-full py-11 flex flex-col justify-between">
                        <div className="pl-16">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Baja California Sur</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Cabo San Lucas</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center">
                      <div className="pl-8">
                        <p className="font-medium text-onceavo pb-4">Consulta los diferentes tipos de desarrollos y encuentra tu inversión ideal.</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25">IMÁN PARA LAS INVERSIONES</h3>
                        <p className="text-sm pb-3 text-secondary text-justify">Los Cabos emerge como un imán para las inversiones inmobiliarias, fusionando la belleza natural con un potencial de crecimiento sin precedentes. Sus playas de renombre y la diversidad de actividades disponibles lo convierten en un destino deseable para todos los gustos. Además, su clima, que va entre cálido en primavera y verano, y templado con noches frescas en otoño e invierno, añade un atractivo adicional.</p>
                        <p className="text-sm pb-3 text-secondary text-justify">Este destino aún joven presenta un potencial de expansión. Cada vez más, se vislumbran nuevos complejos residenciales de alta gama con ubicaciones privilegiadas. La oportunidad de adquirir una propiedad que inspire y garantice años de disfrute es palpable.</p>
                        <p className="text-sm pb-10 text-secondary text-justify">La región de Baja California responde con soluciones a las crecientes necesidades de inversión en este paraíso en evolución. Con condominios y villas de lujo en armonía con la naturaleza, ofreciendo vistas espectaculares del mar, desierto y montañas, Los Cabos ofrece un paisaje incomparable en la escena inmobiliaria de México.</p>
                        <div className="flex justify-center">
                          <Link href={'/los-cabos'} className='py-1 px-20 bg-tfs text-white text-sm flex items-center gap-3'>Conoce los desarrollos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-vallarta">
                      <div className="h-500 w-full py-11 flex flex-col justify-between">
                        <div className="pl-16">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Jalisco</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4">PUERTO VALLARTA</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center">
                      <div className="pl-8">
                        <p className="font-medium text-onceavo pb-4">Consulta los diferentes tipos de desarrollos y encuentra tu inversión ideal.</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25">BOOM INMOBILIARIO</h3>
                        <p className="text-sm pb-3 text-secondary text-justify">Durante los últimos cinco años, Puerto Vallarta ha experimentado un sólido auge en el sector inmobiliario. El precio promedio de venta de condominios ha experimentado un notable incremento en este período, y se proyecta un aumento adicional del 30% en los próximos cinco años.</p>
                        <p className="text-sm pb-3 text-secondary text-justify">Conocido como uno de los destinos de jubilación más populares de México, Puerto Vallarta atrae a una amplia población multicultural. Se estima que más de 50,000 extranjeros han adquirido propiedades en la zona, con un gran número de migrantes procedentes de Canadá y Estados Unidos. Ya sea para jubilarse, buscar nuevas oportunidades o establecer un hogar para trabajar desde casa, Puerto Vallarta ofrece una variedad de opciones de estilo de vida.</p>
                        <p className="text-sm pb-10 text-secondary text-justify">El mercado inmobiliario de Puerto Vallarta está estrechamente ligado al sector turístico, ya que la ciudad costera se ha convertido en un destino de vacaciones de primer nivel para norteamericanos y canadienses. La presencia de residentes extranjeros ha fortalecido aún más el mercado, respaldado por una economía saludable que sustenta la demanda de viviendas en la región.</p>
                        <div className="flex justify-center">
                          <Link href={'/los-cabos'} className='py-1 px-20 bg-tfs text-white text-sm flex items-center gap-3'>Conoce los desarrollos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-cancun">
                      <div className="h-500 w-full py-11 flex flex-col justify-between">
                        <div className="pl-16">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Qintana Roo</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Cancún</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center">
                      <div className="pl-8">
                        <p className="font-medium text-onceavo pb-4">Consulta los diferentes tipos de desarrollos y encuentra tu inversión ideal.</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25">Crecimiento exponencial</h3>
                        <p className="text-sm pb-3 text-secondary text-justify">En el ámbito inmobiliario, Cancún destaca como uno de los destinos con mayor potencial gracias al continuo flujo de turistas nacionales e internacionales, lo que impulsa la demanda de una amplia gama de servicios. Además, la inversión en infraestructura en la zona ha contribuido significativamente a este crecimiento.</p>
                        <p className="text-sm pb-3 text-secondary text-justify">Un ejemplo claro de esta tendencia es la construcción en marcha de aproximadamente 30 nuevos hoteles y al menos 30,000 unidades de vivienda social en la región.La presencia de una estación del Tren Maya en Cancún, junto con la modernización de la carretera federal y el puente Nichupté, añaden un valor adicional a la infraestructura de la ciudad.</p>
                        <p className="text-sm pb-10 text-secondary text-justify">Estas inversiones millonarias brindan una oportunidad excepcional para un crecimiento exponencial en el sector inmobiliario. Además, el atractivo natural de Cancún para los inversionistas se ve reforzado por estas iniciativas del gobierno, consolidándolo como un destino aún más atractivo para la inversión.</p>
                        <div className="flex justify-center">
                          <Link href={'/los-cabos'} className='py-1 px-20 bg-tfs text-white text-sm flex items-center gap-3'>Conoce los desarrollos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-tulum">
                      <div className="h-500 w-full py-11 flex flex-col justify-between">
                        <div className="pl-16">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Qintana Roo</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Tulum</h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center">
                      <div className="pl-8">
                        <p className="font-medium text-onceavo pb-4">Consulta los diferentes tipos de desarrollos y encuentra tu inversión ideal.</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25">Joya turística en México</h3>
                        <p className="text-sm pb-3 text-secondary text-justify">Tulum, emergiendo como una joya turística en México, está atrayendo la atención de inversores tanto locales como internacionales, y esto no es sorprendente. Un estudio de HEI Data la posiciona entre las cinco ciudades más atractivas para invertir en bienes raíces en México, destacando el crecimiento turístico en la región como factor clave para impulsar la demanda de propiedades.</p>
                        <p className="text-sm pb-3 text-secondary text-justify">Con un precio promedio de venta de departamentos alrededor de cuatro millones 363 mil pesos y un retorno de inversión atractivo del 8% al 14% anual en esquemas de alquiler vacacional, Tulum presenta oportunidades lucrativas para aquellos que buscan capitalizar el auge turístico en la zona. El dinámico mercado inmobiliario en Quintana Roo, con casi ocho mil casas y departamentos disponibles, ha experimentado un impresionante crecimiento del 900% en la oferta durante los últimos siete años.</p>
                        <p className="text-sm pb-10 text-secondary text-justify">La plusvalía anual del 14%, aunque varía según la ubicación, indica no solo una creciente demanda, sino también un potencial de inversión sostenido en la región. Para los inversores, la combinación de cifras alentadoras, una investigación cuidadosa y el seguimiento de las tendencias locales hacen de Tulum un destino inmobiliario atractivo y prometedor.</p>
                        <div className="flex justify-center">
                          <Link href={'/los-cabos'} className='py-1 px-20 bg-tfs text-white text-sm flex items-center gap-3'>Conoce los desarrollos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-pdc">
                      <div className="h-500 w-full py-11 flex flex-col justify-between">
                        <div className="pl-16">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Qintana Roo</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Playa de Carmen </h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center">
                      <div className="pl-8">
                        <p className="font-medium text-onceavo pb-4">Consulta los diferentes tipos de desarrollos y encuentra tu inversión ideal.</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25">REFERENTE TURÍSTICO</h3>
                        <p className="text-sm pb-3 text-secondary text-justify">En el año 2023, Playa del Carmen, un destacado destino en el Caribe mexicano también conocido como Solidaridad, registra un marcado incremento del 16,8% en los precios de las propiedades, según datos de la Sociedad Hipotecaria Federal (SHF), lo que lo sitúa en el quinto lugar en el Índice SHF. Este destino turístico exhibe un crecimiento interanual del 17,1% en los valores de las viviendas.</p>
                        <p className="text-sm pb-3 text-secondary text-justify">Playa del Carmen se ha consolidado como un referente turístico, atrayendo una creciente demanda de alojamientos turísticos y servicios de lujo desde 2015, lo que ha impulsado la aparición de nuevos desarrollos en la zona. El destino se destaca como una opción ideal para los inversores en alquiler vacacional, con Airbnb liderando el mercado con el 92% de la cuota.</p>
                        <p className="text-sm pb-10 text-secondary text-justify">Con una demanda sólida, precios en alza y rendimientos atractivos, Playa del Carmen se presenta como un destino irresistible para los inversores, augurando un futuro prometedor en este auge inmobiliario en el paraíso caribeño.</p>
                        <div className="flex justify-center">
                          <Link href={'/los-cabos'} className='py-1 px-20 bg-tfs text-white text-sm flex items-center gap-3'>Conoce los desarrollos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-12">
                    <div className="col-span-6 flex items-center justify-center bg-slide-merida">
                      <div className="h-500 w-full py-11 flex flex-col justify-between">
                        <div className="pl-16">
                          <p className="flex gap-2 uppercase font-semibold text-tfs pb-3"><FaLocationDot/> Yucatán</p>
                          <h3 className="text-5xl font-bold uppercase text-tercero pb-4">Mérida </h3>
                        </div>
                        <div className="flex justify-center" onClick={abrirModal}>
                          <BotonDos/>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 flex items-center">
                      <div className="pl-8">
                        <p className="font-medium text-onceavo pb-4">Consulta los diferentes tipos de desarrollos y encuentra tu inversión ideal.</p>
                        <h3 className="text-3xl font-bold uppercase text-tercero pb-4 letter-spacing-25">LA CIUDAD MÁS SEGURA</h3>
                        <p className="text-sm pb-3 text-secondary text-justify">El mercado inmobiliario en Yucatán ofrece una inversión sólida respaldada por un sistema de financiamiento robusto y un continuo crecimiento en infraestructura. Mérida, destacada como la segunda ciudad más favorable para la apertura de empresas en México, cuenta con beneficios fiscales y una baja tasa de rotación de personal del 2%.</p>
                        <p className="text-sm pb-3 text-secondary text-justify">Yucatán ha tenido una participación significativa en la oferta residencial en los últimos tres años, representando el 36%. La generación "Millennial" lidera las búsquedas digitales de propiedades, seguida por la generación "X" y "Z".</p>
                        <p className="text-sm pb-10 text-secondary text-justify">La ubicación estratégica de Yucatán, junto con su cercanía a importantes zonas comerciales como Cancún y la Riviera Maya, fortalece la plusvalía en Mérida en el sector comercial. A pesar de la pandemia, Yucatán ha mantenido un notable crecimiento económico del 3%, en comparación con el 0.1% registrado a nivel nacional, atribuido a factores como la seguridad y el bajo costo de la vivienda en la región.</p>
                        <div className="flex justify-center">
                          <Link href={'/los-cabos'} className='py-1 px-20 bg-tfs text-white text-sm flex items-center gap-3'>Conoce los desarrollos</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className='col-span-12 py-10'>
          <Swiper
                slidesPerView={5}
                spaceBetween={15}
                pagination={{
                  type: 'fraction',
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
              >
                <SwiperSlide onClick={() => goToSlide(0)} className='bg-slate-50 content-center py-5 cursor-pointer'>
                  <div className='flex text-tercero gap-4 font-bold justify-center'><FaLocationDot/>Cabo San Lucas</div>
                </SwiperSlide>
                <SwiperSlide onClick={() => goToSlide(1)} className='bg-slate-50 content-center py-5 cursor-pointer'>
                  <div className='flex text-tercero gap-4 font-bold justify-center'><FaLocationDot/>Puerto Vallarta</div>
                </SwiperSlide>
                <SwiperSlide onClick={() => goToSlide(2)} className='bg-slate-50 content-center py-5 cursor-pointer'>
                  <div className='flex text-tercero gap-4 font-bold justify-center'><FaLocationDot/>Cancún</div>
                </SwiperSlide>
                <SwiperSlide onClick={() => goToSlide(3)} className='bg-slate-50 content-center py-5 cursor-pointer'>
                  <div className='flex text-tercero gap-4 font-bold justify-center'><FaLocationDot/>Tulum</div>
                </SwiperSlide>
                <SwiperSlide onClick={() => goToSlide(4)} className='bg-slate-50 content-center py-5 cursor-pointer'>
                  <div className='flex text-tercero gap-4 font-bold justify-center'><FaLocationDot/>Playa del Carmen</div>
                </SwiperSlide>
                <SwiperSlide onClick={() => goToSlide(5)} className='bg-slate-50 content-center py-5 cursor-pointer'>
                  <div className='flex text-tercero gap-4 font-bold justify-center'><FaLocationDot/>Mérida</div>
                </SwiperSlide>
              </Swiper>
          </div>
          <div className="col-span-12 grid content-center">
            <hr className="h-0.5 bg-decimo"/>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h3 className="uppercase font-bold text-center text-doce text-2xl pb-4">@FromskyRealtors</h3>
        <div className="grid grid-cols-6 gap-2">
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
import { useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import Formulario from "@/components/formulario";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Constructora() {
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
      title={t('constructora')}
      description={t('constructora_descripcion')}
    >
      <div className="portada-construccion flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/construccion-portada.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="overlay-construccion h-full w-full absolute">
        </div>
        <div className="portada-video-final flex justify-center items-end relative text-white">
          <div className="grid grid-cols-3 justify-items-center max-lg:px-3">
            <div className="col-span-3">
              <h1 className="font-bold text-center uppercase letter-spacing-25 text-2xl max-lg:text-xl text-shadow pb-8 max-lg:pb-5">{t('construimos')}</h1>
            </div>
            <div className="col-span-3">
              <p className="text-center max-lg:text-sm">{t('te_ofrecemos')}</p>
            </div>
            <div className="col-span-3 pb-48 max-lg:pb-5">
              <p className="text-center max-lg:text-sm">{t('optimizamos')}</p>
            </div>
            <div className="col-span-3">
              <p className="text-white uppercase font-bold letter-spacing-25 pb-10 max-lg:text-sm">{t('ofrecemos')}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-6 max-lg:grid-cols-2">
        <div className="grid justify-items-center py-10 px-5 bg-black">
          <Image src={'/img/construccion/proyecto-ejecutivo.svg'} className="pb-3" width={53} height={54} alt="proyecto ejecutivo"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">{t('proyecto')}</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-header">
          <Image src={'/img/construccion/acabado-residencial.svg'} className="pb-3" width={62} height={59} alt="acabado residencial"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">{t('acabado')}</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-footer">
          <Image src={'/img/construccion/entrega.svg'} className="pb-3" width={54} height={54} alt="entrega en tiempo"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">{t('entrega_tiempo')}</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-header">
          <Image src={'/img/construccion/garantia.svg'} className="pb-3" width={50} height={57} alt="garantía de vicios"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">{t('garantia')}</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-footer">
          <Image src={'/img/construccion/gestion.svg'} className="pb-3" width={56} height={56} alt="gestión de tramites"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">{t('gestion')}</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-black">
          <Image src={'/img/construccion/construccion.svg'} className="pb-3" width={66} height={53} alt="construcción a la medida"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">{t('construccion_medida')}</p>
        </div>
      </section>
      <section className="py-24 max-lg:py-8">
        <div className="container mx-auto max-lg:px-3">
          <div className="flex pb-6 justify-items-center">
            <Image src={'/img/construccion/proyecto.svg'} width={53} height={54} alt="proyecto ejecutivo"/>
            <h2 className="font-bold uppercase letter-spacing-25 text-40 pl-4">{t('proyecto')}</h2>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-0 cursor-pointer" onClick={abrirModal}>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">1. {t('arquitectonico')}</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>{t('plano')}</p>
                <p>{t('fachadas')}</p>
                <p>{t('cortes')}</p>
                <p>{t('isometricos')}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">2. {t('estructural')}</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>{t('memoria')}</p>
                <p>{t('plano_cimentacion')}</p>
                <p>{t('plano_estructural')}</p>
                <p>{t('plano_albanil')}</p>
                <p>{t('plano_detalles')}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">3. {t('instalacion')}</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>{t('memoria_calculo')}</p>
                <p>{t('planos_detallados')}</p>
                <p>{t('plano_luminosidad')}</p>
                <p>{t('cuadro')}</p>
                <p>{t('diagrama')}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">4. {t('hidrosanitarios')}</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>{t('memoria_hidrosanitario')}</p>
                <p>{t('planos_hidraulicos')}</p>
                <p>{t('planos_sanitarios')}</p>
                <p>{t('cuadro_hidraulico')}</p>
                <p>{t('isometricos_despieces')}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">5. {t('infografia')}</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>{t('renders')}</p>
                <p>{t('interiores')}</p>
                <p>{t('exterior')}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">6. {t('presupuesto')}</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>{t('numeros_generadores')}</p>
                <p>{t('presupuesto')}</p>
                <p>{t('programa_obra')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-footer">
        <div className="container mx-auto flex justify-center items-center py-16 max-lg:py-8 max-lg:px-3">
          <h1 className="text-tfs font-bold letter-spacing-25 text-40 uppercase pr-3">{t('construccion')}</h1>
          <Image src={'/img/construccion/construccion-2.svg'} width={118} height={1180} alt="construcción" className="max-lg:w-24"/>
        </div>
      </section>
      <section className="py-24 max-lg:py-8">
        <div className="container mx-auto max-lg:px-3">
          <div className="flex pb-6">
            <Image src={'/img/construccion/supervision.svg'} width={46} height={53} alt="supervisión"/>
            <h2 className="font-bold uppercase letter-spacing-25 text-40 pl-4">{t('supervision')}</h2>
          </div>
          <div className="grid grid-cols-3 gap-0 cursor-pointer" onClick={abrirModal}>
            <div className="col-span-3">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">{t('incluye')}</h3>
              </div>
            </div>
            <div className="flex flex-col max-lg:col-span-3 max-lg:text-sm">
              <div className="py-4 px-4 leading-7 bg-noveno h-full">
                <p>{t('residencia')}</p>
                <p>{t('calidad')}</p>
                <p>{t('gestion_recursos')}</p>
                <p>{t('requisicion')}</p>
              </div>
            </div>
            <div className="flex flex-col max-lg:col-span-3 max-lg:text-sm">
              <div className="py-4 px-4 leading-7 bg-quinto h-full">
                <p>{t('control')}</p>
                <p>{t('avances_fisicos')}</p>
                <p>{t('avances_financieros')}</p>
                <p>{t('anticipacion')}</p>
              </div>
            </div>
            <div className="flex flex-col max-lg:col-span-3 max-lg:text-sm">
              <div className="py-4 px-4 leading-7 bg-noveno h-full">
                <p>{t('reportes')}</p>
                <p>{t('control_tiempos')}</p>
                <p>{t('cierre')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-header">
        <div className="container mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-3 gap-4">
          <div className="max-lg:pb-8">
            <p className="text-white uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Xiik</p>
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
                  <Image src={'/img/construccion/xiik-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/xiik-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/xiik-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/xiik-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/xiik-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 text-white bg-sexto max-lg:text-sm">{t('treinta_depas')}</p>
          </div>
          <div>
            <p className="text-white uppercase font-bold text-xl letter-spacing-25 text-center pb-7">Báalam</p>
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
                  <Image src={'/img/construccion/baalam-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/baalam-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/baalam-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/baalam-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/baalam-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/baalam-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/construccion/baalam-7.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 text-white bg-sexto max-lg:text-sm">{t('los_mejores')}</p>
          </div>
        </div>
      </section>
      <div className="portada-construccion-final flex relative justify-center">
        <div className="portada-video-construccion flex justify-center items-center relative">
            <div className="grid grid-cols-1 justify-items-center">
              <div>
                <Link href={'/contacto'} className="text-white font-bold uppercase letter-spacing-25 text-4xl max-lg:text-xl bg-octavo px-14 py-3 rounded-md">{t('contactanos')}</Link>
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
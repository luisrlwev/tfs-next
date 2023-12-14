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

export default function Lotes() {
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
      title={t('lotes')}
      description={t('lotes_descripcion')}
    >
      <div className="portada-lotes flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/lotes-portada.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video flex justify-center items-center relative">
          <h1 className="text-white font-bold text-center uppercase text-40 max-lg:text-3xl letter-spacing-25 text-shadow">{t('terrenos')}</h1>
        </div>
      </div>
      <section className="bg-header">
        <div className="container mx-auto grid justify-center py-10 uppercase text-2xl max-lg:text-base font-bold letter-spacing-25">
          <p className="w-full text-center text-white">{t('lotes')} {t('desde')}<span className="text-tfs"> $110,000 usd</span></p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-3 gap-4">
          <div className="max-lg:pb-8">
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">{t('lotes_residenciales')} <br/>{t('campo')}</p>
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
                  <Image src={'/img/lotes/lotes-residenciales-1.jpeg'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/lotes/lotes-residenciales-2.webp'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/lotes/lotes-residenciales-3.webp'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/lotes/lotes-residenciales-4.jpeg'} width={800} height={407} className="h-full object-cover" alt="Lotes residenciales con campo de golf"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">{t('financiamiento')}</p>
          </div>
          <div>
            <p className="text-tfs uppercase font-bold text-xl letter-spacing-25 text-center pb-7">{t('terrenos_residencial')} <br/>{t('exclusivos')}</p>
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
                  <Image src={'/img/lotes/terrenos-en-el-residencial-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/lotes/terrenos-en-el-residencial-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/lotes/terrenos-en-el-residencial-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <Image src={'/img/lotes/terrenos-en-el-residencial-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Terrenos en el residencial más exclusivo de Tulum"/>
                  <div className="absolute left-0 w-full flex items-end justify-center bottom-4 animate-fade-up animate-once animate-normal">
                    <Boton/>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 bg-text max-lg:text-sm">{t('club')}</p>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto grid grid-cols-7 max-lg:grid-cols-2 gap-4">
          <div className="grid justify-items-center text-center">
            <Image src={'/img/departamentos/bares.svg'} className="pb-3" width={68} height={68} alt="bares y restaurantes"/>
            <p>{t('bares')}</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/actividades-acuaticas.svg'} className="pb-3" width={68} height={68} alt="actividades acuáticas"/>
            <p>{t('actividades')}</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/departamentos/yoga.svg'} className="pb-3" width={68} height={68} alt="zonas de yoga"/>
            <p>{t('yoga')}</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/beach-club.svg'} className="pb-3" width={68} height={68} alt="beach club"/>
            <p>Beach Club</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/cenotes.svg'} className="pb-3" width={68} height={68} alt="cenotes naturales"/>
            <p>{t('cenotes')}</p>
          </div>
          <div className="grid justify-items-center text-center">
            <Image src={'/img/lotes/ciclopistas.svg'} className="pb-3" width={68} height={68} alt="ciclopistas"/>
            <p>{t('ciclopistas')}</p>
          </div>
          <div className="grid justify-items-center text-center max-lg:col-span-2">
            <Image src={'/img/lotes/campo-golf.svg'} className="pb-3" width={68} height={68} alt="campo de golf"/>
            <p>{t('golf')}</p>
          </div>
        </div>
      </section>
      <section className="bg-sexto">
        <div className="container mx-auto text-center py-8 text-black uppercase font-bold letter-spacing-25 text-2xl max-lg:text-base max-lg:px-3">
          <p>{t('invierte')}</p>
          <p>{t('mar')}</p>
        </div>
      </section>
      <div className="portada-lotes-final flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/lotes-final.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="portada-video-final flex justify-center items-center relative">
          <div className="grid grid-cols-1 justify-items-center">
            <div>
              <h3 className="text-white font-bold text-center uppercase text-xl letter-spacing-25 text-shado pb-5 max-lg:px-4">{t('exclusividad')}</h3>
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
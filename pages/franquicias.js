import React, { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Franquicias() {
  // Traducciones
  const { t } = useTranslation()
  // Campos formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [estado, setEstado] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [condiciones, setCondiciones] = useState(true);
  // campos ocultos
  const [fechaEnvio, setFechaEnvio] = useState('');
  const [horaEnvio, setHoraEnvio] = useState('');
  const [paginaEnvio, setPaginaEnvio] = useState('');
  // Mensaje de éxito
  const [mensajeRespuesta, setMensajeRespuesta] = useState('');
  const [esExito, setEsExito] = useState(false);
  // Estado del boton de envio
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fechaActual = new Date();
    setFechaEnvio(fechaActual.toLocaleDateString());
    setHoraEnvio(fechaActual.toLocaleTimeString());
    setPaginaEnvio(window.location.href);
  }, []);

  // Controlador para el cambio en el checkbox
  const handleCheckboxChange = (e) => {
    setCondiciones(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Deshabilitar el botón de envío y limpiar el formulario inmediatamente
    setIsSubmitting(true);
    setNombre('');
    setApellido('');
    setEmail('');
    setTel('');
    setEstado('');
    setCiudad('');
    setMensaje('');
    setCondiciones(true); // o false, dependiendo de tu caso

    try {
      const respuesta = await fetch('/api/franquicias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellido, email, tel, estado, ciudad, mensaje, condiciones, fechaEnvio, horaEnvio, paginaEnvio }),
      });
      if (respuesta.ok) {
        console.log("Correo enviado con éxito");
        // Respuesta exitosa y como limpiar el formulario o mostrar un mensaje
        setMensajeRespuesta("Formulario enviado con éxito.");
        setEsExito(true);
        // Limpiar el formulario restableciendo el estado de cada campo
        setNombre('');
        setApellido('');
        setEmail('');
        setTel('');
        setEstado('');
        setCiudad('');
        setMensaje('');
        setCondiciones(true);
      } else {
        console.log("Error al enviar el correo");
        // Manejar errores
        setMensajeRespuesta("Ha ocurrido un error al enviar el formulario.");
        setEsExito(false);
      }
    } catch (error) {
      console.error("Hubo un error al enviar el correo: ", error);
    }

    finally {
      // Habilitar el botón de envío nuevamente
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title={t('franquicias')}
      description={t('franquicias_descripcion')}
    >
      <section className="grid grid-cols-2 max-lg:grid-cols-1">
        <div>
          <video src="/video/franquicias.mp4" autoPlay controls playsInline controlsList="nodownload" poster="/img/franquicias/franquicias-portada.jpg"></video>
        </div>
        <div className="grid justify-items-center items-center relative max-lg:hidden">
          <div className="overlay-franquicias h-full w-full absolute"></div>
          <div className="flex flex-col items-center relative px-5">
            <h1 className="uppercase letter-spacing-25 font-bold text-3xl text-tercero text-center pb-14">{t('sabes')}<br/><span className="text-tfs">{t('mas_rentable')}</span></h1>
            <p className="uppercase letter-spacing-25 text-tercero text-center text-xl font-bold pb-20">{t('franquicias_inmobiliarias')}</p>
            <p className="text-center">{t('nuestro')}</p>
            <p className="text-center pb-24">{t('seguir')}</p>
            <Image src={'/img/logo.png'} width={270} height={162} alt="logo" className="pb-16"/>
            <a href="#form" className="bg-tfs uppercase letter-spacing-25 font-bold py-2 px-10 text-tercero rounded-md hover-bg">{t('contactanos')}</a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="bg-cuarto p-24 max-lg:py-16 max-lg:px-14 text-center text-white">
          <h2 className="uppercase letter-spacing-25 font-bold text-3xl max-lg:text-xl pb-12 max-lg:pb-7">{t('franquicias_inmobiliarias')}</h2>
          <p>{t('las_franquicias')}</p>
        </div>
        <div className="bg-sexto p-24 max-lg:py-16 max-lg:px-14 text-center text-secondary">
          <h2 className="uppercase letter-spacing-25 font-bold text-3xl max-lg:text-xl pb-12 max-lg:pb-7">{t('por_que')}</h2>
          <p>{t('ofrecemos_plataformas')}</p>
        </div>
      </section>
      <section className="bg-header py-48 max-lg:pt-10 max-lg:pb-16 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-center uppercase font-bold letter-spacing-25 text-3xl pb-6 max-lg:hidden">{t('construyamos')}</h2>
          <p className="uppercase letter-spacing-25 pb-24 max-lg:pb-8">{t('que_ofrecemos')}</p>
          <div className="grid grid-cols-4 gap-3 max-lg:hidden">
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/analisis-franquicias.svg'} width={100} height={100} alt="análisis" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">{t('analisis')}</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">{t('analisis')}</h3>
                    <p className="text-sm">{t('analisis_2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/asesoria-franquicias.svg'} width={100} height={100} alt="asesoría" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">{t('asesoria')}</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">{t('asesoria')}</h3>
                    <p className="text-sm">{t('asesoria_2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/leads-franquicias.svg'} width={100} height={100} alt="leads" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">{t('leads')}</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">{t('leads')}</h3>
                    <p className="text-sm">{t('leads_2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/social-franquicias.svg'} width={100} height={100} alt="social" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Social Media</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Social Media</h3>
                    <p className="text-sm">{t('social_media')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/diseno-franquicias.svg'} width={100} height={100} alt="diseno" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">{t('diseno_grafico')}</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">{t('diseno_grafico')}</h3>
                    <p className="text-sm">{t('diseno_grafico_2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/marketing-franquicias.svg'} width={100} height={100} alt="marketing" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">{t('marketing')}</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">{t('marketing')}</h3>
                    <p className="text-sm">{t('marketing_2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/construccion-franquicias.svg'} width={100} height={100} alt="construccion" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">{t('construccion')}</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">{t('construccion')}</h3>
                    <p className="text-sm">{t('construccion_2')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/asistencia-franquicias.svg'} width={100} height={100} alt="asistencia" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">{t('asistencia')}</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">{t('asistencia')}</h3>
                    <p className="text-sm">{t('asistencia_2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
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
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/analisis-franquicias.svg'} width={114} height={70} className="pb-8" alt="Análisis de mercado"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">{t('analisis')}</p>
                    <p className="text-white text-sm">{t('analisis_2')}</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/asesoria-franquicias.svg'} width={96} height={95} className="pb-8" alt="asesoría"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">{t('asesoria')}</p>
                    <p className="text-white text-sm">{t('asesoria_2')}</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/leads-franquicias.svg'} width={104} height={65} className="pb-8" alt="leads"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">{t('leads')}</p>
                    <p className="text-white text-sm">{t('leads_2')}</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/social-franquicias.svg'} width={83} height={84} className="pb-8" alt="social media"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Social Media</p>
                    <p className="text-white text-sm">{t('social_media')}</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/diseno-franquicias.svg'} width={84} height={85} className="pb-8" alt="diseño"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">{t('diseno_grafico')}</p>
                    <p className="text-white text-sm">{t('diseno_grafico_2')}</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/marketing-franquicias.svg'} width={92} height={93} className="pb-8" alt="marketing"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">{t('marketing')}</p>
                    <p className="text-white text-sm">{t('marketing_2')}</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/construccion-franquicias.svg'} width={100} height={81} className="pb-8" alt="construcción"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">{t('construccion')}</p>
                    <p className="text-white text-sm">{t('construccion_2')}</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/asistencia-franquicias.svg'} width={64} height={78} className="pb-8" alt="asistencia"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">{t('asistencia')}</p>
                    <p className="text-white text-sm">{t('asistencia_2')}</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <a href="#form" className="bg-tfs uppercase letter-spacing-25 font-bold py-2 px-10 text-tercero rounded-md mt-24 max-lg:mt-10 hover-bg">{t('contactanos')}</a>
          </div>
        </div>
      </section>
      <section className="max-lg:hidden portada-video-final">
        <video src="/video/franquicias-final.mp4" className="object-cover portada-video-final" controls playsInline controlsList="nodownload" poster="/img/franquicias/franquicias-portada-final.jpg"></video>
      </section>
      <section className="lg:hidden portada-video-final-responsive">
        <video src="/video/franquicias-final-vertical.mp4" className="object-cover portada-video-final-responsive" controls playsInline controlsList="nodownload" poster="/img/franquicias/franquicias-portada-final-vertical.jpg"></video>
      </section>
      <section>
        <div className="container mx-auto text-center">
          <p className="letter-spacing-25 uppercase pt-16 pb-8">{t('invertir')}</p>
        </div>
        <div className="grid grid-cols-2 max-lg:hidden">
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/clientes-calificados.svg'} width={381} height={229} alt="clientes calificados" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">{t('clientes')} <span className="text-tercero">{t('calificados')}</span></p>
          </div>
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/metodologia-comprobada.svg'} width={340} height={238} alt="metodologia" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">{t('metodologia')} <span className="text-tercero"><br/>{t('capacitacion')}</span></p>
          </div>
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/recupera-tu-inversion.svg'} width={286} height={219} alt="recupera" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">{t('recupera')} <span className="text-tercero"><br/>{t('antes')}</span></p>
          </div>
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/mkt-software.svg'} width={365} height={239} alt="mkt y software" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">{t('software')} <span className="text-tercero"><br/>{t('cerrar')}</span></p>
          </div>
        </div>
        <div className="pb-10 lg:hidden">
          <Swiper
                  slidesPerView={1}
                  navigation={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  style={{
                    '--swiper-navigation-color': '#303030',
                    '--swiper-pagination-color': '#303030',
                  }}
                  modules={[Autoplay, Navigation]}
                  loop={true}
                >
                  <SwiperSlide className="px-3">
                      <div className="flex justify-center">
                        <Image src={'/img/franquicias/clientes-calificados.svg'} width={200} height={120} alt="clientes calificados" className="pb-8"/>
                      </div>
                      <p className="uppercase font-bold text-tfs text-xl text-center">{t('clientes')} <span className="text-tercero">{t('calificados')}</span></p>
                  </SwiperSlide>
                  <SwiperSlide className="px-3">
                      <div className="flex justify-center">
                        <Image src={'/img/franquicias/metodologia-comprobada.svg'} width={200} height={140} alt="metodologia" className="pb-8"/>
                      </div>
                      <p className="uppercase font-bold text-tfs text-xl text-center">{t('metodologia')} <span className="text-tercero"><br/>{t('capacitacion')}</span></p>
                  </SwiperSlide>
                  <SwiperSlide className="px-3">
                      <div className="flex justify-center">
                        <Image src={'/img/franquicias/recupera-tu-inversion.svg'} width={200} height={153} alt="recupera" className="pb-8"/>
                      </div>
                      <p className="uppercase font-bold text-tfs text-xl text-center">{t('recupera')} <span className="text-tercero"><br/>{t('antes')}</span></p>
                  </SwiperSlide>
                  <SwiperSlide className="px-3">
                      <div className="flex justify-center">
                        <Image src={'/img/franquicias/mkt-software.svg'} width={200} height={130} alt="mkt y software" className="pb-8"/>
                      </div>
                      <p className="uppercase font-bold text-tfs text-xl text-center">{t('software')} <span className="text-tercero"><br/>{t('cerrar')}</span></p>
                  </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div className="portada-franquicias-final relative">
        <div className="overlay-nosotros-final h-full w-full absolute">
        </div>
        <div className="container mx-auto portada-video-final relative text-white flex flex-col justify-center">
          <h3 className="font-bold text-center uppercase letter-spacing-25 text-3xl max-lg:text-lg text-shadow pb-28 max-lg:pt-10 max-lg:pb-5">{t('creciendo')}</h3>
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
          <div className="flex py-6">
            <span className="separador"></span>
          </div>
          <div className="lg:hidden">
            <div className="grid justify-items-center">
              <Image src={'/img/nosotros/marcador.png'} width={57} height={81} alt="marcador" className="pb-8 text-center"/>
            </div>
            <div>
              <p className="text-center uppercase text-white font-bold letter-spacing-25 text-xl pb-4">Los Cabos</p>
              <p className="text-center uppercase text-white font-bold letter-spacing-25 text-xl pb-4">Mérida</p>
              <p className="text-center uppercase text-white font-bold letter-spacing-25 text-xl pb-4">Tulum</p>
              <p className="text-center uppercase text-white font-bold letter-spacing-25 text-xl pb-4">Riviera Maya</p>
            </div>
          </div>
          <div className="grid justify-items-center pt-16 max-lg:py-12">
            <a href="#form" className="text-tercero uppercase letter-spacing-25 font-bold bg-tfs boton-contactanos max-lg:text-white py-3 px-12 rounded-md hover-bg">{t('contactanos')}</a>
          </div>
        </div>
      </div>
      <section className="py-24 max-lg:py-8" id="form">
        <div className="container mx-auto">
          <h3 className="uppercase letter-spacing-25 font-bold text-center text-2xl pb-5 max-lg:pb-0 max-lg:text-base">{t('unete')} <span className="max-lg:hidden">{t('unete_2')}</span></h3>
          <p className="uppercase letter-spacing-25 text-center pb-24 max-lg:pb-5">{t('unete_2')}</p>
          <form className="px-36 max-lg:px-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="nombre">{t('nombre_corto')} <span className="text-red-600">*</span></label>
                  <input type="text" name="nombre" id="nombre" placeholder={t('e_nombre')} className="w-full rounded-md bg-decimo text-secondary p-3" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="apellido">{t('apellido')} <span className="text-red-600">*</span></label>
                  <input type="text" name="apellido" id="apellido" placeholder={t('e_apellido')} className="w-full rounded-md bg-decimo text-secondary p-3" value={apellido} onChange={(e) => setApellido(e.target.value)} required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="tel">{t('telefono')} <span className="text-red-600">*</span></label>
                  <input type="tel" name="tel" id="tel" placeholder={t('e_telefono')} className="w-full rounded-md bg-decimo text-secondary p-3" value={tel} onChange={(e) => setTel(e.target.value)} required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input type="email" name="email" id="email" placeholder={t('e_email')} className="w-full rounded-md bg-decimo text-secondary p-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="estado">{t('estado')} <span className="text-red-600">*</span></label>
                  <select name="estado" id="estado" className="w-full rounded-md bg-decimo text-secondary p-3" value={estado} onChange={(e) => setEstado(e.target.value)} required>
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">Baja California Sur</option>
                    <option value="Campeche">Campeche</option>
                    <option value="Ciudad de México">Ciudad de México</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Durango">Durango</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="México">México</option>
                    <option value="Michoacán">Michoacán</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Querétaro">Querétaro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="San Luis Potosí">San Luis Potosí</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Yucatán">Yucatán</option>
                    <option value="Zacatecas">Zacatecas</option>
                  </select>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="ciudad">{t('ciudad')} <span className="text-red-600">*</span></label>
                  <input type="text" name="ciudad" id="ciudad" placeholder={t('e_ciudad')} className="w-full rounded-md bg-decimo text-secondary p-3" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required/>
                </div>
                <div className="col-span-2">
                  <label htmlFor="mensaje">{t('mensaje')}</label>
                  <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder={t('e_mensaje')} className="w-full rounded-md bg-decimo text-secondary p-3" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                </div>
                <div className="col-span-2 max-lg:text-sm">
                  <input type="checkbox" name="condiciones" id="condiciones" checked={condiciones} onChange={handleCheckboxChange} required/> {t('casilla')} <Link href="/aviso-de-privacidad" target="_blank" className="text-tfs hover">{t('aviso')}</Link>. <span className="text-red-600">*</span>
                </div>
                {/* Campos ocultos */}
                <div className='hidden'>
                  <input type="hidden" name="fechaEnvio" value={fechaEnvio} />
                  <input type="hidden" name="horaEnvio" value={horaEnvio} />
                  <input type="hidden" name="paginaEnvio" value={paginaEnvio} />
                </div>
                <div className="col-span-2 pb-6">
                  <p><span className="text-red-600">*</span> {t('campos')}</p>
                </div>
                <div className="col-span-2 text-center">
                  {mensajeRespuesta && (
                    <p className={`${esExito ? "text-green-600" : "text-red-600"} pb-2`}>
                      {mensajeRespuesta}
                    </p>
                  )}
                  <input type="submit" name="submit" id="submit" value={t('enviar')} disabled={isSubmitting} className="py-3 px-32 bg-tfs uppercase text-white font-bold letter-spacing-25 rounded-md hover-bg cursor-pointer"/>
                </div>
              </div>
          </form>
        </div>
      </section>
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
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Franquicias() {
  return (
    <Layout
      title={"Franquicias"}
      description={"Las franquicias inmobiliarias SON EL NEGOCIO MÁS RENTABLE, las personas siempre requieren un espacio donde vivir y donde producir y hacer negocio."}
    >
      <section className="grid grid-cols-2 max-lg:grid-cols-1">
        <div>
          <video src="/video/franquicias.mp4" autoPlay controls playsInline controlsList="nodownload" poster="/img/franquicias/franquicias-portada.jpg"></video>
        </div>
        <div className="grid justify-items-center items-center relative max-lg:hidden">
          <div className="overlay-franquicias h-full w-full absolute"></div>
          <div className="flex flex-col items-center relative">
            <h1 className="uppercase letter-spacing-25 font-bold text-3xl text-tercero text-center pb-14">¿Sabes cual será el negocio<br/><span className="text-tfs"> más rentable en el 2024?</span></h1>
            <p className="uppercase letter-spacing-25 text-tercero text-center text-xl font-bold pb-20">Franquicias inmobiliarias</p>
            <p className="text-center">Nuestro objetivo es acompañarte en los diferentes pasos a</p>
            <p className="text-center pb-24">seguir como parte de la familia Tulumfromsky Realtors.</p>
            <Image src={'/img/logo.png'} width={270} height={162} alt="logo" className="pb-16"/>
            <a href="#form" className="bg-tfs uppercase letter-spacing-25 font-bold py-2 px-10 text-tercero rounded-md hover-bg">Contáctanos</a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="bg-cuarto p-24 max-lg:py-16 max-lg:px-14 text-center text-white">
          <h2 className="uppercase letter-spacing-25 font-bold text-3xl max-lg:text-xl pb-12 max-lg:pb-7">Franquicias inmobiliarias</h2>
          <p>Las franquicias inmobiliarias destacan como excelente inversión debido a la demanda ininterrumpida de espacios habitacionales y comerciales.</p>
        </div>
        <div className="bg-sexto p-24 max-lg:py-16 max-lg:px-14 text-center text-secondary">
          <h2 className="uppercase letter-spacing-25 font-bold text-3xl max-lg:text-xl pb-12 max-lg:pb-7">¿Por qué Tulumfromsky?</h2>
          <p>Ofrecemos plataformas avanzadas, asistencia técnica y estrategias especializadas en marketing digital. Nuestro éxito se basa en lograr resultados excepcionales a través de nuestra metodología.</p>
        </div>
      </section>
      <section className="bg-header py-48 max-lg:pt-10 max-lg:pb-16 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-center uppercase font-bold letter-spacing-25 text-3xl pb-6 max-lg:hidden">Construyamos un futuro juntos</h2>
          <p className="uppercase letter-spacing-25 pb-24 max-lg:pb-8">¿Qué te ofrecemos?</p>
          <div className="grid grid-cols-4 gap-3 max-lg:hidden">
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/analisis-franquicias.svg'} width={100} height={100} alt="análisis" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Análisis de mercado</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Análisis de mercado</h3>
                    <p className="text-sm">Análisis de mercado local y nacional mediante herramientas estadísticas del sector.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/asesoria-franquicias.svg'} width={100} height={100} alt="asesoría" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Asesoría personalizada</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Asesoría personalizada</h3>
                    <p className="text-sm">Equipo con más de 100 asesores inmobiliarios a nivel nacional otorgando asesoría desde la preventa hasta la postventa.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/leads-franquicias.svg'} width={100} height={100} alt="leads" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Leads Calificados</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Leads Calificados</h3>
                    <p className="text-sm">Clientes potenciales a la medida de tus necesidades a través de la segmentación ideal.</p>
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
                    <p className="text-sm">Humanizamos tu marca y la acercamos a tu público objetivo, además de crear contenido de valor para interesar a tu comunidad.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/diseno-franquicias.svg'} width={100} height={100} alt="diseno" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Diseño Gráfico</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Diseño Gráfico</h3>
                    <p className="text-sm">Comunicamos el valor de tu marca desde un enfoque visual, cautivando a tu audiencia y resaltando los beneficios de tu marca.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/marketing-franquicias.svg'} width={100} height={100} alt="marketing" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Marketing Digital</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Marketing Digital</h3>
                    <p className="text-sm">Creación de estrategias interactivas, eficaces y atractivas, para aumentar el tráfico y mejorar el posicionamiento en línea.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/construccion-franquicias.svg'} width={100} height={100} alt="construccion" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Construcción</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Construcción</h3>
                    <p className="text-sm">Te ofrecemos proyectos de construcción desde la etapa de diseño hasta el proceso de licitación. Optimizamos los tiempos y recursos con la mejor tecnología para la construcción.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 group cursor-pointer">
              <div className="relative [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] w-full h-full duration-1000">
                <div className="absolute [backface-visibility:hidden] w-full h-full bg-cuarto px-8 flex flex-col items-center justify-center">
                  <Image src={'/img/franquicias/asistencia-franquicias.svg'} width={100} height={100} alt="asistencia" className="pb-6 h-24"/>
                  <h3 className="uppercase text-white text-center font-bold text-xl">Asistencia Técnica</h3>
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-tfs shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white px-8">
                    <h3 className="uppercase text-center font-bold text-xl pb-5">Asistencia Técnica</h3>
                    <p className="text-sm">Te acompañamos en cada paso de tu proyecto, con asistencia técnica integral. Optimizamos los tiempos y recursos para garantizar el éxito de cada franquicia.</p>
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
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Análisis de Mercado</p>
                    <p className="text-white text-sm">Análisis de mercado local y nacional mediante herramientas estadísticas del sector.</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/asesoria-franquicias.svg'} width={96} height={95} className="pb-8" alt="asesoría"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Asesoría Personalizada</p>
                    <p className="text-white text-sm">Equipo con más de 100 asesores inmobiliarios a nivel nacional otorgando asesoría desde la preventa hasta la postventa.</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/leads-franquicias.svg'} width={104} height={65} className="pb-8" alt="leads"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Leads Calificados</p>
                    <p className="text-white text-sm">Clientes potenciales a la medida de tus necesidades a través de la segmentación ideal.</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/social-franquicias.svg'} width={83} height={84} className="pb-8" alt="social media"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Social Media</p>
                    <p className="text-white text-sm">Humanizamos tu marca y la acercamos a tu público objetivo, además de crear contenido de valor para interesar a tu comunidad.</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/diseno-franquicias.svg'} width={84} height={85} className="pb-8" alt="diseño"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Diseño Gráfico</p>
                    <p className="text-white text-sm">Comunicamos el valor de tu marca desde un enfoque visual, cautivando a tu audiencia y resaltando los beneficios de tu marca.</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/marketing-franquicias.svg'} width={92} height={93} className="pb-8" alt="marketing"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Marketing Digital</p>
                    <p className="text-white text-sm">Creación de estrategias interactivas, eficaces y atractivas, para aumentar el tráfico y mejorar el posicionamiento en línea.</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/construccion-franquicias.svg'} width={100} height={81} className="pb-8" alt="construcción"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Construcción</p>
                    <p className="text-white text-sm">Te ofrecemos proyectos de construcción desde la etapa de diseño hasta el proceso de licitación. Optimizamos los tiempos y recursos con la mejor tecnología para la construcción.</p>
                </SwiperSlide>
                <SwiperSlide className="px-3">
                    <div className="flex justify-center">
                      <Image src={'/img/franquicias/asistencia-franquicias.svg'} width={64} height={78} className="pb-8" alt="asistencia"/>
                    </div>
                    <p className="text-white font-bold uppercase letter-spacing-25 text-2xl pb-8">Asistencia Técnica</p>
                    <p className="text-white text-sm">Te acompañamos en cada paso de tu proyecto, con asistencia técnica integral. Optimizamos los tiempos y recursos para garantizar el éxito de cada franquicia.</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <a href="#form" className="bg-tfs uppercase letter-spacing-25 font-bold py-2 px-10 text-tercero rounded-md mt-24 max-lg:mt-10 hover-bg">Contáctanos</a>
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
          <p className="letter-spacing-25 uppercase pt-16 pb-8">Al invertir en una franquicia obtienes:</p>
        </div>
        <div className="grid grid-cols-2 max-lg:hidden">
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/clientes-calificados.svg'} width={381} height={229} alt="clientes calificados" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">Clientes <span className="text-tercero">calificados</span></p>
          </div>
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/metodologia-comprobada.svg'} width={340} height={238} alt="metodologia" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">Metodología comprobada <span className="text-tercero">y<br/> capacitación continua</span></p>
          </div>
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/recupera-tu-inversion.svg'} width={286} height={219} alt="recupera" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">Recupera tu inversión <span className="text-tercero"><br/> antes de 2 años</span></p>
          </div>
          <div className="text-center flex flex-col items-center justify-center hover-bg-2 h-500">
            <Image src={'/img/franquicias/mkt-software.svg'} width={365} height={239} alt="mkt y software" className="pb-8"/>
            <p className="uppercase font-bold text-tfs text-3xl">Marketing, software y tecnología <span className="text-tercero"><br/> para cerrar tus ventas</span></p>
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
                      <p className="uppercase font-bold text-tfs text-xl text-center">Clientes <span className="text-tercero">calificados</span></p>
                  </SwiperSlide>
                  <SwiperSlide className="px-3">
                      <div className="flex justify-center">
                        <Image src={'/img/franquicias/metodologia-comprobada.svg'} width={200} height={140} alt="metodologia" className="pb-8"/>
                      </div>
                      <p className="uppercase font-bold text-tfs text-xl text-center">Metodología comprobada <span className="text-tercero">y<br/> capacitación continua</span></p>
                  </SwiperSlide>
                  <SwiperSlide className="px-3">
                      <div className="flex justify-center">
                        <Image src={'/img/franquicias/recupera-tu-inversion.svg'} width={200} height={153} alt="recupera" className="pb-8"/>
                      </div>
                      <p className="uppercase font-bold text-tfs text-xl text-center">Recupera tu inversión <span className="text-tercero"><br/> antes de 2 años</span></p>
                  </SwiperSlide>
                  <SwiperSlide className="px-3">
                      <div className="flex justify-center">
                        <Image src={'/img/franquicias/mkt-software.svg'} width={200} height={130} alt="mkt y software" className="pb-8"/>
                      </div>
                      <p className="uppercase font-bold text-tfs text-xl text-center">Marketing, software y tecnología <span className="text-tercero"><br/> para cerrar tus ventas</span></p>
                  </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div className="portada-franquicias-final relative">
        <div className="overlay-nosotros-final h-full w-full absolute">
        </div>
        <div className="container mx-auto portada-video-final relative text-white flex flex-col justify-center">
          <h3 className="font-bold text-center uppercase letter-spacing-25 text-3xl max-lg:text-lg text-shadow pb-28 max-lg:pt-10 max-lg:pb-5">Creciendo juntos</h3>
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
            <a href="#form" className="text-tercero uppercase letter-spacing-25 font-bold bg-tfs boton-contactanos max-lg:text-white py-3 px-12 rounded-md hover-bg">Contáctanos</a>
          </div>
        </div>
      </div>
      <section className="py-24 max-lg:py-8" id="form">
        <div className="container mx-auto">
          <h3 className="uppercase letter-spacing-25 font-bold text-center text-2xl pb-5 max-lg:pb-0 max-lg:text-base">Únete a la familia de <span className="max-lg:hidden">franquicias de tulumfromsky</span></h3>
          <p className="uppercase letter-spacing-25 text-center pb-24 max-lg:pb-5">Franquicias de Tulumfromsky</p>
          <form className="px-36 max-lg:px-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="nombre">Nombre <span className="text-red-600">*</span></label>
                  <input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="apellido">Apellido <span className="text-red-600">*</span></label>
                  <input type="text" name="apellido" id="apellido" placeholder="Escribe tu apellido" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="tel">Número de teléfono <span className="text-red-600">*</span></label>
                  <input type="tel" name="tel" id="tel" placeholder="Escribe tu teléfono" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="email">Correo electrónico <span className="text-red-600">*</span></label>
                  <input type="email" name="email" id="email" placeholder="Escribe tu correo" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-1 max-lg:col-span-2">
                  <label htmlFor="estado">Estado de interés <span className="text-red-600">*</span></label>
                  <select name="estado" id="estado" className="w-full rounded-md bg-decimo text-secondary p-3" required>
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
                  <label htmlFor="ciudad">Ciudad de interés <span className="text-red-600">*</span></label>
                  <input type="text" name="ciudad" id="ciudad" placeholder="Escribe la ciudad" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-2">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder="¡Cuéntanos que te motiva a ser parte de nuestro equipo!" className="w-full rounded-md bg-decimo text-secondary p-3"></textarea>
                </div>
                <div className="col-span-2 max-lg:text-sm">
                  <input type="checkbox" name="condiciones" id="condiciones" required/> Al marcar la casilla y hacer clic en el botón &apos;Enviar&apos;, confirmo que he leído y acepto el <Link href="/aviso-de-privacidad" target="_blank" className="text-tfs hover">Aviso de privacidad</Link>. <span className="text-red-600">*</span>
                </div>
                <div className="col-span-2 pb-6">
                  <p><span className="text-red-600">*</span> Campos obligatorios.</p>
                </div>
                <div className="col-span-2 text-center">
                  <input type="submit" name="" id="" className="py-3 px-32 bg-tfs uppercase text-white font-bold letter-spacing-25 rounded-md hover-bg cursor-pointer"/>
                </div>
              </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

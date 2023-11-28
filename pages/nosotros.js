import { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => {
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };
  return (
    <Layout
      title={"Nosotros"}
      description={"Líder en la comercialización de desarrollos inmobiliarios en la Riviera Maya, Mérida y Los Cabos. Ofrecemos soluciones efectivas para la venta de proyectos de preventa y entrega inmediata."}
    >
      <div className="portada-nosotros flex relative justify-center cursor-pointer" onClick={abrirModal}>
        <div className="overlay-nosotros h-full w-full absolute">
        </div>
        <div className="portada-video-nosotros flex justify-center items-center relative text-white">
          <div className="grid grid-cols-3 justify-items-center">
            <div className="col-span-3">
              <h1 className="font-bold text-center uppercase letter-spacing-25 text-2xl text-shadow pb-10">Pasos firmes definen tu futuro</h1>
            </div>
            <div className="col-span-3 flex justify-center">
              <p className="text-center w-2/3 max-lg:w-full max-lg:px-3 pb-12">Tulumfromsky Realtors es líder en la comercialización de desarrollos inmobiliarios en la Riviera Maya, Mérida y Los Cabos. Ofrecemos soluciones efectivas para la venta de proyectos de preventa y entrega inmediata. Con nuestro equipo de expertos y amplia red de contactos, estamos comprometidos en brindar un servicio personalizado y profesional para ayudarte a alcanzar tus objetivos.</p>
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
            <h2 className="text-4xl uppercase font-bold letter-spacing-25 pb-5 max-lg:text-2xl">Nuestra Visión</h2>
            <p>En <b>Tulumfromsky Realtors</b>, lideramos el mercado nacional de bienes raíces con servicios de alta calidad, mejora continua y completa satisfacción del cliente. Ofrecemos soluciones innovadoras y efectivas, mientras mantenemos nuestros valores de honestidad, transparencia y ética profesional.</p>
          </div>
          <div className="bg-sexto text-secondary text-center px-24 max-lg:px-5 max-lg:py-7 pt-20 pb-24 flex flex-col items-center">
            <Image src={'/img/nosotros/mision.png'} width={62} height={82} alt="Misión" className="pb-5"/>
            <h2 className="text-4xl uppercase font-bold letter-spacing-25 pb-5 max-lg:text-2xl">Nuestra Misión</h2>
            <p>En <strong>Tulumfromsky Realtors</strong>, nos dedicamos a brindar servicios inmobiliarios de alta calidad y personalizados, trabajando con honestidad y dedicación para generar la confianza y fidelidad de nuestros clientes. Nuestra misión es cumplir con las expectativas y necesidades de nuestros clientes, convirtiéndonos en su primera opción para servicios de venta o inversión inmobiliaria.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16">
          <h3 className="text-tfs font-bold letter-spacing-25 uppercase text-center text-4xl max-lg:text-2xl pb-10">Nuestros Valores</h3>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-3 pb-8 max-lg:pb-4">
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/compromiso.svg'} width={124} height={115} alt="compromiso"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">Compromiso</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/confianza.svg'} width={84} height={114} alt="confianza"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">Confianza</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/competitividad.svg'} width={116} height={113} alt="competitividad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">Competitividad</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/innovacion.svg'} width={99} height={98} alt="innovación"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">Innovación</h4>
            </div>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-3">
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/honestidad.svg'} width={112} height={82} alt="honestidad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">Honestidad</h4>
            </div>
            <div className="grid justify-center justify-items-center">
              <Image src={'/img/nosotros/etica.svg'} width={92} height={86} alt="etica"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold max-lg:text-center">Ética profesional</h4>
            </div>
            <div className="grid justify-center justify-items-center max-lg:col-span-2">
              <Image src={'/img/nosotros/lealtad.svg'} width={85} height={89} alt="lealtad"/>
              <h4 className="text-secondary uppercase letter-spacing-25 font-bold">Lealtad</h4>
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
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">¡Los mejores asesores, atentos, amables y siempre dispuestos a apoyar!</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Alejandro Estrada</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-2.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">Excelente servicio. Te ayudan en cada paso del proceso de compra y siempre están ahí para cualquier duda o ayuda que necesites.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Rogelio Jimenez</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-3.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">Cuenta con muchas opciones en toda la Riviera Maya, muy buena asesoría, te acompañan en todo momento y resuelven tus dudas.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">José Luis Fonseca</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-4.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">LA MEJOR EXPERIENCIA EN ATENCIÓN Y SERVICIO, SIN DUDA ALGUNA😍 SUPER RECOMENDADOS, INFORMACIÓN PRECISA Y TE RESUELVEN TUS DUDAS Y TU COMPRA ES SIN DUDA LA MEJOR ADQUISICIÓN.  ELLOS TE VAN GUIANDO DE ACUERDO A TUS NECESIDADES, MUCHÍSIMAS GRACIAS ✨✨✨</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Karel Prieto</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-5.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">El mejor trato, la atención que me brindaron desde el inicio de mi inversión me dejó muy satisfecho, las zonas en donde se ubican los inmuebles son las mejores y me llevaron de la mano y paso a paso para adquirir mi propiedad. Confianza, seguridad, atención, precio y calidad es como podría definir usando pocas palabras. Realmente lo recomiendo.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Daniel Zarate Aguirre</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-6.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">Especialistas inmobiliarios con alto conocimiento y excelente servicio, brindándote atención personalizada de calidad con un abanico amplio de inversiones. 100% Recomendado.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Coral Adame</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-7.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">Excelente atención de sus asesores. Me facilitaron desde el primer momento toda la información.  ¡Y la mejor atención en todo el proceso de compra! La mejor agencia inmobiliaria.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Patricia Reynoso</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-8.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">Excelente atención y servicio. Siempre me respondieron en tiempo y me acompañaron en todo el proceso de venta.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Luis Sanchez</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-9.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">Excelente lugar para iniciar una inversión. Asesoría completa, gente muy profesional y preparada para lo que hacen. Muchas gracias 🏡.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Luis Hernández</p>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col justify-center h-80 px-20">
                  <Image src={'/img/nosotros/testimonio-10.png'} width={100} height={100} className="pb-8" alt="Testimonial"/>
                  <p className="text-white text-xl italic pb-8 max-lg:text-sm">Te dan las mejores opciones del mercado, son muy pacientes y te explican a detalle cómo realizar tu inversión, gracias por la asesoría✨.</p>
                  <p className="text-white font-bold text-2xl max-lg:text-lg">Daniela Estebanez</p>
              </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div className="portada-nosotros-final">
        <div className="overlay-nosotros-final h-full w-full absolute">
        </div>
        <div className="container mx-auto portada-video-final-nosotros relative text-white">
          <h3 className="font-bold text-center uppercase letter-spacing-25 text-3xl max-lg:text-lg text-shadow py-32 max-lg:pt-10 max-lg:pb-5">¡Te estamos buscando!</h3>
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
            <Link href={'/reclutamiento'} className="text-tercero uppercase letter-spacing-25 font-bold bg-tfs py-3 px-12 rounded-md">¡Postúlate ahora!</Link>
          </div>
        </div>
      </div>
      <Formulario show={showModal} onClose={cerrarModal}/>
    </Layout>
  );
}

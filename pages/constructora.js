import Layout from "@/components/layout";
import Image from "next/image";
import Boton from "@/components/boton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Constructora() {
  return (
    <Layout
      title={"Constructora"}
      description={"Te ofrecemos proyectos de construcción desde la etapa del diseño hasta el proceso de licitación."}
    >
      <div className="portada-construccion flex relative justify-center">
        <div className="h-full w-full top-0 left-0 absolute overflow-hidden z-0">
          <video src="/video/construccion-portada.mp4" className="absolute video-fondo-portada" autoPlay muted playsInline loop></video>
        </div>
        <div className="overlay-construccion h-full w-full absolute">
        </div>
        <div className="portada-video-final flex justify-center items-end relative text-white">
          <div className="grid grid-cols-3 justify-items-center max-lg:px-3">
            <div className="col-span-3">
              <h1 className="font-bold text-center uppercase letter-spacing-25 text-2xl max-lg:text-xl text-shadow pb-8 max-lg:pb-5">Construimos tus sueños transformando tu vida </h1>
            </div>
            <div className="col-span-3">
              <p className="text-center max-lg:text-sm">Te ofrecemos proyectos de construcción desde la etapa del diseño hasta el proceso de licitación.</p>
            </div>
            <div className="col-span-3 pb-48 max-lg:pb-5">
              <p className="text-center max-lg:text-sm">Optimizamos los tiempos y recursos con la mejor tecnología para la construcción.</p>
            </div>
            <div className="col-span-3">
              <p className="text-white uppercase font-bold letter-spacing-25 pb-10 max-lg:text-sm">Te ofrecemos:</p>
            </div>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-6 max-lg:grid-cols-2">
        <div className="grid justify-items-center py-10 px-5 bg-black">
          <Image src={'/img/construccion/proyecto-ejecutivo.svg'} className="pb-3" width={53} height={54} alt="proyecto ejecutivo"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">Proyecto ejecutivo</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-header">
          <Image src={'/img/construccion/acabado-residencial.svg'} className="pb-3" width={62} height={59} alt="acabado residencial"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">Acabado residencial</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-footer">
          <Image src={'/img/construccion/entrega.svg'} className="pb-3" width={54} height={54} alt="entrega en tiempo"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">Entrega en tiempo y forma</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-header">
          <Image src={'/img/construccion/garantia.svg'} className="pb-3" width={50} height={57} alt="garantía de vicios"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">Garantía de vicios ocultos</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-footer">
          <Image src={'/img/construccion/gestion.svg'} className="pb-3" width={56} height={56} alt="gestión de tramites"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">Gestión de trámites</p>
        </div>
        <div className="grid justify-items-center py-10 px-5 bg-black">
          <Image src={'/img/construccion/construccion.svg'} className="pb-3" width={66} height={53} alt="construcción a la medida"/>
          <p className="text-tfs uppercase font-bold text-sm text-center letter-spacing-25">Construcción a la medida</p>
        </div>
      </section>
      <section className="py-24 max-lg:py-8">
        <div className="container mx-auto max-lg:px-3">
          <div className="flex pb-6 justify-items-center">
            <Image src={'/img/construccion/proyecto.svg'} width={53} height={54} alt="proyecto ejecutivo"/>
            <h2 className="font-bold uppercase letter-spacing-25 text-40 pl-4">Proyecto ejecutivo</h2>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-0">
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">1. Arquitectónico</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>Plano de plantas (Planta por nivel, plano de conjunto).</p>
                <p>Fachadas.</p>
                <p>Cortes (Sección transversal y longitudinal).</p>
                <p>Isométricos por nivel.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">2. Estructural</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>Memoria de cálculo estructural (análisis de carga y diseño).</p>
                <p>Plano de cimentación.</p>
                <p>Plano estructural por losa.</p>
                <p>Plano estructural de albañilerías por nivel.</p>
                <p>Plano de detalles estructurales.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">3. Instalación eléctrica</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>Memoria de cálculo eléctrico.</p>
                <p>Planos detallados de instalación eléctrica con especificaciones.</p>
                <p>Plano de luminosidad.</p>
                <p>Cuadro de cargas.</p>
                <p>Diagrama Unifilar.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">4. Hidrosanitario</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>Memoria de cálculo hidrosanitario.</p>
                <p>Planos detallados de instalación hidráulica con especificaciones.</p>
                <p>Planos detallados de instalación sanitaria con especificaciones.</p>
                <p>Cuadro de gastos hidráulico y descargas.</p>
                <p>Isométricos y despieces.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">5. Infografía</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>Renders fotorrealistas por espacios aprobados.</p>
                <p>Interiores en habitaciones.</p>
                <p>Exterior en fachadas.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">6. Presupuesto de obra</h3>
              </div>
              <div className="text-sm py-4 px-4 leading-7 bg-quinto h-full">
                <p>Números generadores.</p>
                <p>Presupuesto de obra.</p>
                <p>Programa de obra.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-footer">
        <div className="container mx-auto flex justify-center items-center py-16 max-lg:py-8 max-lg:px-3">
          <h1 className="text-tfs font-bold letter-spacing-25 text-40 uppercase pr-3">Construcción</h1>
          <Image src={'/img/construccion/construccion-2.svg'} width={118} height={1180} alt="construcción" className="max-lg:w-24"/>
        </div>
      </section>
      <section className="py-24 max-lg:py-8">
        <div className="container mx-auto max-lg:px-3">
          <div className="flex pb-6">
            <Image src={'/img/construccion/supervision.svg'} width={46} height={53} alt="supervisión"/>
            <h2 className="font-bold uppercase letter-spacing-25 text-40 pl-4">Supervisión de obra</h2>
          </div>
          <div className="grid grid-cols-3 gap-0">
            <div className="col-span-3">
              <div className="py-4 bg-noveno">
                <h3 className="uppercase letter-spacing-25 text-center font-bold">Incluye</h3>
              </div>
            </div>
            <div className="flex flex-col max-lg:col-span-3 max-lg:text-sm">
              <div className="py-4 px-4 leading-7 bg-noveno h-full">
                <p>Residencia en obra.</p>
                <p>Calidad de la ejecución en procesos constructivos.</p>
                <p>Gestión de recursos.</p>
                <p>Requisición de equipo y materiales.</p>
              </div>
            </div>
            <div className="flex flex-col max-lg:col-span-3 max-lg:text-sm">
              <div className="py-4 px-4 leading-7 bg-quinto h-full">
                <p>Control de mano de obra.</p>
                <p>Avances físicos.</p>
                <p>Avances financieros.</p>
                <p>Anticipación a problemas de diseño.</p>
              </div>
            </div>
            <div className="flex flex-col max-lg:col-span-3 max-lg:text-sm">
              <div className="py-4 px-4 leading-7 bg-noveno h-full">
                <p>Reportes fotográficos (cámara de piso y drone).</p>
                <p>Control de tiempos de entrega.</p>
                <p>Cierre de obra.</p>
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
              className="mySwiper"
            >
              <SwiperSlide><Image src={'/img/construccion/xiik-1.png'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/xiik-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/xiik-3.png'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/xiik-4.png'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/xiik-5.png'} width={800} height={407} className="h-full object-cover" alt="Xiik Tulum"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 text-white bg-sexto max-lg:text-sm">30 departamentos de lujo en Tulum.</p>
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
              className="mySwiper"
            >
              <SwiperSlide><Image src={'/img/construccion/baalam-1.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/baalam-2.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/baalam-3.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/baalam-4.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/baalam-5.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/baalam-6.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/></SwiperSlide>
              <SwiperSlide><Image src={'/img/construccion/baalam-7.jpg'} width={800} height={407} className="h-full object-cover" alt="Báalam"/></SwiperSlide>
            </Swiper>
            <p className="py-5 px-7 text-white bg-sexto max-lg:text-sm">Los mejores Residenciales con campo de Golf y club de playa.</p>
          </div>
        </div>
      </section>
      <div className="portada-construccion-final flex relative justify-center">
        <div className="portada-video-construccion flex justify-center items-center relative">
            <div className="grid grid-cols-1 justify-items-center">
              <div>
                <h3 className="text-white font-bold uppercase letter-spacing-25 text-4xl max-lg:text-xl bg-octavo px-14 py-3 rounded-md">Contáctanos</h3>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}

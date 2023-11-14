import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import { FaWhatsapp, FaRegEnvelope, FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaPinterestP, FaTiktok, FaLinkedinIn } from "react-icons/fa6";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: 19.425874086237695,
  lng: -98.85466700978318
};

const positions = [
  {
    lat: 20.61314888375765,
    lng: -87.10142210776615,
    title: "Riviera Maya",
    description: "El Tigrillo, México 307 112, El Tigrillo, Ejidal, 77712 Playa del Carmen, Q.R.",
    icon: "/img/contacto/marcador.png"
  },
  { lat: 21.035424820790045,
    lng: -89.59469112880805,
    title: "Mérida",
    description: "Calle 12 A entre calle 14 y 15, número 301 Edificio Amoran one, núm int. 214, Montebello, 97115 Mérida, Yuc.",
    icon: "/img/contacto/marcador.png"
  },
  {
    lat: 22.88617704618445,
    lng: -109.92666954959905,
    title: "Los Cabos",
    description: "Boulevard Miguel Ángel Herrera, Del Aguila esquina-20, 22, 23472 Cabo San Lucas, B.C.S.",
    icon: "/img/contacto/marcador.png"
  },
];

export default function Contacto() {

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <Layout
      title={"Contacto"}
      description={"Contáctanos para obtener información sobre nuestras propiedades de bienes raíces. Nuestro equipo de expertos está listo para ayudarte a encontrar la propiedad ideal para ti en la Riviera Maya, Los Cabos o Mérida. Ya sea que busques comprar, vender o construir una propiedad, estamos aquí para ayudarte en cada paso del camino. ¡Contáctanos hoy y comienza a hacer realidad tus sueños de bienes raíces en México!"}
    >
      <section className="grid grid-cols-2">
        <div className="bg-header pt-52 px-24 pb-24 grid justify-items-center relative">
          <div className="overlay-contacto h-full w-full absolute"></div>
          <div className="grid justify-items-center relative">
            <h1 className="text-tfs uppercase font-bold letter-spacing-25 pb-12 text-5xl">Contáctanos</h1>
            <h2 className="text-tfs uppercase font-bold letter-spacing-25 pb-8 text-2xl">¿Qué te ofrecemos?</h2>
            <p className="text-white pb-2">La comercialización de desarrollos inmobiliarios con los siguientes servicios:</p>
            <ul className="list-disc text-white leading-6 pb-8">
              <li>Análisis comercial del proyecto.</li>
              <li>Diseño de campañas publicitarias.</li>
              <li>Promoción continua para generar vistas al desarrollo.</li>
              <li>Atención personalizada brindada por un especialista inmobiliario.</li>
              <li>Atención durante el proceso de venta, hasta el cierre y entrega del inmueble.</li>
            </ul>
            <p className="text-white text-center uppercase font-semibold pb-24"><span className="text-tfs">Contáctanos</span> y permite que nuestros más de 50 asesores inmobiliarios se encarguen de todo lo relacionado con la compra de tu apartamento, casa o terreno.</p>
            <a href="mailto:sales@tulumfromskyrealtors.com" className="text-center text-tfs flex items-center hover"><FaRegEnvelope className="mr-1"/>sales@tulumfromskyrealtors.com</a>
            <a href="tel:+529848035450" className="text-center text-tfs flex items-center hover"><FaWhatsapp className="mr-1"/>+52 (984) 803 5450</a>
          </div>
        </div>
        <div className="pt-52 px-24 pb-24">
          <h2 className="uppercase text-secondary font-bold letter-spacing-25 text-xl pb-8 text-center">¿Dudas? Déjanos tu contacto</h2>
          <form className="w-full pb-24">
              <div className="grid grid-cols-1 gap-3">
                <div className="col-span-1">
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre:" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-1">
                  <input type="tel" name="tel" id="tel" placeholder="Teléfono:" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-1">
                  <input type="email" name="email" id="email" placeholder="Email:" className="w-full rounded-md bg-decimo text-secondary p-3" required/>
                </div>
                <div className="col-span-1">
                  <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder="¿Qué tipo de propiedad buscas?" className="w-full rounded-md bg-decimo text-secondary p-3" required></textarea>
                </div>
                <div className="col-span-1 text-secondary">
                  <input type="checkbox" name="condiciones" id="condiciones" required/> Acepto los <Link href="/aviso-de-privacidad" target="_blank" className="text-tfs hover">términos y condiciones</Link>
                </div>
                <div className="col-span-1 text-center">
                  <input type="submit" name="" id="" className="py-2 px-12 bg-tfs uppercase text-white font-bold letter-spacing-25 rounded-md hover-bg"/>
                </div>
              </div>
            </form>
            <h3 className="text-center uppercase letter-spacing-25 text-tfs font-bold text-2xl">Síguenos</h3>
            <h4 className="font-bold text-tfs text-center pt-3 pb-7">@tulumfromsky</h4>
            <div className="flex justify-center text-tfs text-2xl gap-4">
              <a href="https://www.youtube.com/@tulumfromskyrealtors5181" target="_blank"><FaYoutube className="hover"/></a>
              <a href="https://www.facebook.com/tulumfromskyrealtors/" target="_blank"><FaFacebookF className="hover"/></a>
              <a href="https://www.instagram.com/tulumfromsky/" target="_blank"><FaInstagram className="hover"/></a>
              <a href="https://twitter.com/FromskyTulum" target="_blank"><FaXTwitter className="hover"/></a>
              <a href="https://www.pinterest.com.mx/Tulumfromsky/" target="_blank"><FaPinterestP className="hover"/></a>
              <a href="https://www.tiktok.com/@tulumfromsky" target="_blank"><FaTiktok className="hover"/></a>
              <a href="https://www.linkedin.com/company/40900945/admin/" target="_blank"><FaLinkedinIn className="hover"/></a>
            </div>
        </div>
      </section>
      <section className="bg-cuarto py-20">
        <div className="container mx-auto">
          <h2 className="uppercase text-center text-tfs font-bold letter-spacing-25 text-40 pb-16">Nuestras oficinas</h2>
          <div className="grid grid-cols-2">
            <div className='flex flex-col items-center'>
              <h3 className="uppercase text-center text-tfs font-bold letter-spacing-25 text-2xl pb-3">Ubicación</h3>
              <LoadScript googleMapsApiKey="AIzaSyCmvGDB4jFjNlVZHzFD6yhoGeIB3LeTD68">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={4}
                >
                  {positions.map((position, index) => (
                    <Marker
                      key={index}
                      position={{ lat: position.lat, lng: position.lng }}
                      onClick={() => setSelectedMarker(position)}
                      icon={position.icon}
                    />
                  ))}
                  {selectedMarker && (
                    <InfoWindow
                      position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                      onCloseClick={() => setSelectedMarker(null)}
                    >
                      <div>
                        <h2 className='uppercase font-bold text-tfs text-base'>{selectedMarker.title}</h2>
                        <p>{selectedMarker.description}</p>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              </LoadScript>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-1 grid justify-items-center'>
                  <Image src={'/img/contacto/riviera-maya.jpg'} width={154} height={154} alt={'Foto sede'}/>
                </div>
                <div className='col-span-2 flex flex-col gap-1 justify-center'>
                  <h3 className='text-white uppercase font-bold letter-spacing-25 text-2xl'>Riviera Maya</h3>
                  <p className='text-white text-sm'>Carretera Cancún - Tulum Km 307, Mza 329, Lt 9, Locales 42, 43, 44. Colonia El Tigrillo Edificio Terramar, Playa del Carmen, Q. Roo, México.</p>
                  <a href="mailto:sales@tulumfromskyrealtors.com" className='text-tfs text-sm flex items-center hover'><FaRegEnvelope className='mr-1'/> sales@tulumfromskyrealtors.com</a>
                  <a href="tel:+529848035450" className='text-tfs text-sm flex items-center hover'><FaWhatsapp className='mr-1'/> +52 (984) 803 5450</a>
                </div>
              </div>
              <div className="flex py-6 pl-6">
                <span className="separador-tfs"></span>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-1 grid justify-items-center'>
                  <Image src={'/img/contacto/merida.jpg'} width={154} height={154} alt={'Foto sede'}/>
                </div>
                <div className='col-span-2 flex flex-col gap-1 justify-center'>
                  <h3 className='text-white uppercase font-bold letter-spacing-25 text-2xl'>Mérida</h3>
                  <p className='text-white text-sm'>Calle 12 A entre calle 14 y 15, número 301. Edificio Amora One, num int 214, Colonia Montebello, Mérida, Yucatán, México.</p>
                  <a href="mailto:sales@tulumfromskyrealtors.com" className='text-tfs text-sm flex items-center hover'><FaRegEnvelope className='mr-1'/> sales@tulumfromskyrealtors.com</a>
                  <a href="tel:+529848035450" className='text-tfs text-sm flex items-center hover'><FaWhatsapp className='mr-1'/> +52 (984) 803 5450</a>
                </div>
              </div>
              <div className="flex py-6 pl-6">
                <span className="separador-tfs"></span>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-1 grid justify-items-center'>
                  <Image src={'/img/contacto/los-cabos.jpg'} width={154} height={154} alt={'Foto sede'}/>
                </div>
                <div className='col-span-2 flex flex-col gap-1 justify-center'>
                  <h3 className='text-white uppercase font-bold letter-spacing-25 text-2xl'>Los Cabos</h3>
                  <p className='text-white text-sm'>Boulevard Miguel Ángel Herrera, Esquina del águila Mza 1 Lt, Locales 18, 20, 22, Colonia Lomas del Cabo, Cabo San Lucas. BCS, México.</p>
                  <a href="mailto:sales@tulumfromskyrealtors.com" className='text-tfs text-sm flex items-center hover'><FaRegEnvelope className='mr-1'/> sales@tulumfromskyrealtors.com</a>
                  <a href="tel:+529848035450" className='text-tfs text-sm flex items-center hover'><FaWhatsapp className='mr-1'/> +52 (984) 803 5450</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import React, { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import PhoneInput from 'react-phone-number-input';
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import { FaWhatsapp, FaRegEnvelope, FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaPinterestP, FaTiktok, FaLinkedinIn } from "react-icons/fa6";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import 'react-phone-number-input/style.css';

const containerStyle = {
  width: '100%',
  height: '700px'
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
  {
    lat: 20.638347273537082,
    lng: -105.22181244517246,
    title: "Vallarta",
    description: "Parota Center, Av. Francisco Villa 1010-local 35, Jardines de Las Gaviotas, 48328 Puerto Vallarta, Jal.",
    icon: "/img/contacto/marcador.png"
  },
];

export default function Contacto() {
  // Traducciones
  const { t } = useTranslation()
  // Campos formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [sucursal, setSucursal] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [condiciones, setCondiciones] = useState(true);
  // campos ocultos
  const [fechaEnvio, setFechaEnvio] = useState('');
  const [horaEnvio, setHoraEnvio] = useState('');
  const [paginaEnvio, setPaginaEnvio] = useState('');
  const [formularioOrigen, setFormularioOrigen] = useState('');
  // Mensaje de éxito
  const [mensajeRespuesta, setMensajeRespuesta] = useState('');
  const [esExito, setEsExito] = useState(false);
  // Estado del boton de envio
  const [isSubmitting, setIsSubmitting] = useState(false);
  //Marcadores del mapa
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const fechaActual = new Date();
    setFechaEnvio(fechaActual.toLocaleDateString());
    setHoraEnvio(fechaActual.toLocaleTimeString());
    setPaginaEnvio(window.location.href);
    setFormularioOrigen('Contacto');
  }, []);

  // Controlador para el cambio en el checkbox
  const handleCheckboxChange = (e) => {
    setCondiciones(e.target.checked);
  };

  const handleFormContacto = async (e) => {
    e.preventDefault();

    // Deshabilitar el botón de envío y limpiar el formulario inmediatamente
    setIsSubmitting(true);

    // Aquí agregamos el seguimiento del evento de TikTok antes de proceder a enviar el formulario
    if (window.ttq) {
      window.ttq.track("FormContacto");
    }

    // Deshabilitar el botón de envío y limpiar el formulario inmediatamente
    setIsSubmitting(true);
    setNombre('');
    setEmail('');
    setTel('');
    setSucursal('');
    setTipo('');
    setMensaje('');
    setCondiciones(true); // o false, dependiendo de tu caso

    try {
      const respuesta = await fetch('/api/form-modal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, tel, sucursal, tipo, mensaje, condiciones, fechaEnvio, horaEnvio, paginaEnvio, formularioOrigen }),
      });
      if (respuesta.ok) {
        console.log("Correo enviado con éxito");
        // Respuesta exitosa y como limpiar el formulario o mostrar un mensaje
        setMensajeRespuesta("Formulario enviado con éxito.");
        setEsExito(true);
        // Limpiar el formulario restableciendo el estado de cada campo
        setNombre('');
        setEmail('');
        setTel('');
        setSucursal('');
        setTipo('');
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
      title={t('contacto')}
      description={t('contacto_descripcion')}
    >
      <section className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="bg-header pt-52 max-lg:py-8 px-24 max-lg:px-3 pb-24 grid justify-items-center relative">
          <div className="overlay-contacto h-full w-full absolute"></div>
          <div className="grid justify-items-center relative">
            <h1 className="text-tfs uppercase font-bold letter-spacing-25 pb-12 max-lg:pb-8 text-5xl max-lg:text-3xl">{t('contactanos')}</h1>
            <h2 className="text-tfs uppercase font-bold letter-spacing-25 pb-8 text-2xl">{t('que_ofrecemos')}</h2>
            <p className="text-white pb-2 max-lg:text-sm">{t('comercializacion')}</p>
            <ul className="list-disc text-white leading-6 pb-8 max-lg:text-sm">
              <li>{t('analisis')}</li>
              <li>{t('diseno')}</li>
              <li>{t('promocion')}</li>
              <li>{t('atencion_personalizada')}</li>
              <li>{t('atencion_durante')}</li>
            </ul>
            <p className="text-white text-center uppercase font-semibold pb-24 max-lg:pb-8"><span className="text-tfs">{t('contactanos')}</span>{t('permite')}</p>
            <a href="mailto:sales@tulumfromskyrealtors.com" className="text-center text-tfs flex items-center hover"><FaRegEnvelope className="mr-1" alt="mail"/>sales@tulumfromskyrealtors.com</a>
            <a href="https://wa.me/529842091457" target='_blank' className="text-center text-tfs flex items-center hover"><FaWhatsapp className="mr-1" alt="WhatsApp"/>+52 (984) 209 1457</a>
          </div>
        </div>
        <div className="pt-52 px-24 max-lg:px-3 pb-24 max-lg:py-8">
          <h2 className="uppercase text-secondary font-bold letter-spacing-25 text-xl pb-8 text-center">{t('dejanos')}</h2>
          <form className="w-full pb-24 max-lg:pb-8" onSubmit={handleFormContacto}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1">
                  <input type="text" name="nombre" id="nombre" placeholder={t('nombre')} className="w-full rounded-md bg-decimo text-secondary p-3" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div className="col-span-1">
                  <PhoneInput international type="tel" name="tel" id="tel" placeholder={t('telefono')} className="w-full rounded-md bg-decimo text-secondary p-3" value={tel} onChange={setTel} required/>
                  <p className='text-secondary text-sm italic'>{t('leyenda_tel')}</p>
                </div>
                <div className="col-span-2">
                  <input type="email" name="email" id="email" placeholder="Email" className="w-full rounded-md bg-decimo text-secondary p-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-span-1">
                  <label for="sucursal" class="sr-only">Ciudad de interés</label>
                  <select name="sucursal" id="sucursal" className="w-full rounded-md bg-decimo text-secondary p-3" value={sucursal} onChange={(e) => setSucursal(e.target.value)} required>
                      <option value="">{t('selecciona_ciudad')}</option>
                      <option value="Tulum">Tulum</option>
                      <option value="Cancún">Cancún</option>
                      <option value="Los Cabos">Los Cabos</option>
                      <option value="Mérida">Mérida</option>
                      <option value="Puerto Vallarta">Puerto Vallarta</option>
                      <option value="Otra">Otra</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label for="tipo" class="sr-only">Tipo de unidad</label>
                  <select name="tipo" id="tipo" className="w-full rounded-md bg-decimo text-secondary p-3" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                      <option value="">{t('tipo_unidad')}</option>
                      <option value="Departamento">{t('departamento')}</option>
                      <option value="Casa">{t('casa')}</option>
                      <option value="Lote">{t('lote')}</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder={t('tipo_propiedad')} className="w-full rounded-md bg-decimo text-secondary p-3" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                </div>
                <div className="col-span-2 text-secondary">
                  <input type="checkbox" name="condiciones" id="condiciones" aria-label='condiciones' checked={condiciones} onChange={handleCheckboxChange} required/> {t('acepto')}<Link href="/aviso-de-privacidad" className="text-tfs hover"> {t('terminos')}</Link>
                </div>
                {/* Campos ocultos */}
                <div className='hidden'>
                  <input type="hidden" name="fechaEnvio" value={fechaEnvio} />
                  <input type="hidden" name="horaEnvio" value={horaEnvio} />
                  <input type="hidden" name="paginaEnvio" value={paginaEnvio} />
                  <input type="hidden" name="formularioOrigen" value={formularioOrigen}/>
                </div>
                <div className="col-span-2 text-center">
                  {mensajeRespuesta && (
                    <p className={`${esExito ? "text-green-600" : "text-red-600"} pb-2`}>
                      {mensajeRespuesta}
                    </p>
                  )}
                  <input type="submit" name="submit" id="submit" value={t('enviar')} disabled={isSubmitting} className="py-2 px-12 bg-tfs uppercase text-white font-bold letter-spacing-25 rounded-md hover-bg cursor-pointer"/>
                </div>
              </div>
          </form>
          <h3 className="text-center uppercase letter-spacing-25 text-tfs font-bold text-2xl">{t('siguenos')}</h3>
          <h4 className="font-bold text-tfs text-center pt-3 pb-7">@fromskyrealtors</h4>
          <div className="flex justify-center text-tfs text-2xl gap-4">
            <a href="https://www.facebook.com/FromskyRealtors/" target="_blank" aria-label="Facebook"><FaFacebookF className="hover"/></a>
            <a href="https://www.instagram.com/fromskyrealtors/" target="_blank" aria-label="Instagram"><FaInstagram className="hover"/></a>
            <a href="https://www.tiktok.com/@fromskyrealtors" target="_blank" aria-label="TikTok"><FaTiktok className="hover"/></a>
            <a href="https://twitter.com/FromskyTulum" target="_blank" aria-label="Twitter"><FaXTwitter className="hover"/></a>
            <a href="https://www.pinterest.com.mx/FromskyRealtors/" target="_blank" aria-label="Pinterest"><FaPinterestP className="hover"/></a>
            <a href="https://www.linkedin.com/company/fromskyrealtors/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn className="hover"/></a>
            <a href="https://www.youtube.com/@fromskyrealtors" target="_blank" aria-label="YouTube"><FaYoutube className="hover"/></a>
          </div>
        </div>
      </section>
      <section className="bg-cuarto py-20 max-lg:py-8">
        <div className="container mx-auto">
          <h2 className="uppercase text-center text-tfs font-bold letter-spacing-25 text-40 pb-16 max-lg:pb-8">{t('nuestras')}</h2>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:px-3">
            <div className='flex flex-col items-center max-lg:pb-5'>
              <h3 className="uppercase text-center text-tfs font-bold letter-spacing-25 text-2xl max-lg:text-xl pb-3">{t('ubicacion')}</h3>
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
                  <a href="tel:+529842091457" className='text-tfs text-sm flex items-center hover'><FaWhatsapp className='mr-1'/> +52 (984) 209 1457</a>
                </div>
              </div>
              <div className="flex py-6 pl-6 max-lg:pl-0">
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
                  <a href="tel:+529842091457" className='text-tfs text-sm flex items-center hover'><FaWhatsapp className='mr-1'/> +52 (984) 209 1457</a>
                </div>
              </div>
              <div className="flex py-6 pl-6 max-lg:pl-0">
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
                  <a href="tel:+529842091457" className='text-tfs text-sm flex items-center hover'><FaWhatsapp className='mr-1'/> +52 (984) 209 1457</a>
                </div>
              </div>
              <div className="flex py-6 pl-6 max-lg:pl-0">
                <span className="separador-tfs"></span>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-1 grid justify-items-center'>
                  <Image src={'/img/contacto/vallarta.jpg'} width={154} height={154} alt={'Foto sede'}/>
                </div>
                <div className='col-span-2 flex flex-col gap-1 justify-center'>
                  <h3 className='text-white uppercase font-bold letter-spacing-25 text-2xl'>Vallarta</h3>
                  <p className='text-white text-sm'>Parota Center, Av. Francisco Villa 1010-local 35, Jardines de Las Gaviotas, 48328 Puerto Vallarta, Jal.</p>
                  <a href="mailto:sales@tulumfromskyrealtors.com" className='text-tfs text-sm flex items-center hover'><FaRegEnvelope className='mr-1'/> sales@tulumfromskyrealtors.com</a>
                  <a href="tel:+529842091457" className='text-tfs text-sm flex items-center hover'><FaWhatsapp className='mr-1'/> +52 (984) 209 1457</a>
                </div>
              </div>
            </div>
          </div>
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
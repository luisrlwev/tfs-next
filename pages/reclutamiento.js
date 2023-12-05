import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import LayoutReclutamiento from "@/components/layout-reclutamiento";
import Galeria from "@/components/galeria";
import { FaWhatsapp, FaRegEnvelope, FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaPinterestP, FaTiktok, FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  // Campos formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [curriculum, setCurriculum] = useState(null);
  const [experiencia, setExperiencia] = useState('');
  const [raices, setRaices] = useState('');
  const [idioma, setIdioma] = useState('');
  const [sucursal, setSucursal] = useState('');
  const [mensaje, setMensaje] = useState('');
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

  useEffect(() => {
    const fechaActual = new Date();
    setFechaEnvio(fechaActual.toLocaleDateString());
    setHoraEnvio(fechaActual.toLocaleTimeString());
    setPaginaEnvio(window.location.href);
    setFormularioOrigen('Reclutamiento');
  }, []);

  // Manejador para el input de archivo
  const handleArchivoChange = (e) => {
    // Actualiza el estado con el archivo seleccionado
    setCurriculum(e.target.files[0]);
  };

  // Controlador para el cambio en el radio
  const handleRadio1Change = (e) => {
    setExperiencia(e.target.value);
  };

  // Controlador para el cambio en el radio
  const handleRadio2Change = (e) => {
    setRaices(e.target.value);
  };

  // Controlador para el cambio en el radio
  const handleRadio3Change = (e) => {
    setIdioma(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Deshabilitar el botón de envío
    setIsSubmitting(true);

    const formData = new FormData();

    // Agrega todos los campos del formulario como parte de formData
    formData.append('nombre', nombre);
    formData.append('email', email);
    formData.append('tel', tel);
    if (curriculum) {
      formData.append('curriculum', curriculum, curriculum.name);
    }
    formData.append('experiencia', experiencia);
    formData.append('raices', raices);
    formData.append('idioma', idioma);
    formData.append('sucursal', sucursal);
    formData.append('mensaje', mensaje);
    formData.append('fechaEnvio', fechaEnvio);
    formData.append('horaEnvio', horaEnvio);
    formData.append('paginaEnvio', paginaEnvio);
    formData.append('formularioOrigen', formularioOrigen);

    try {
      const respuesta = await fetch('/api/reclutamiento', {
        method: 'POST',
        body: formData, // Envía formData en lugar de un objeto JSON
      });

      if (respuesta.ok) {
        console.log("Correo enviado con éxito");
        setMensajeRespuesta("Formulario enviado con éxito.");
        setEsExito(true);
        // Limpiar el formulario restableciendo el estado de cada campo
        setNombre('');
        setEmail('');
        setTel('');
        setCurriculum(null);
        setExperiencia('');
        setRaices('');
        setIdioma('');
        setSucursal('');
        setMensaje('');
      } else {
        console.log("Error al enviar el correo");
        setMensajeRespuesta("Ha ocurrido un error al enviar el formulario.");
        setEsExito(false);
      }
    } catch (error) {
      console.error("Hubo un error al enviar el correo: ", error);
      setMensajeRespuesta("Ha ocurrido un error al enviar el formulario.");
      setEsExito(false);
    } finally {
      // Habilitar el botón de envío nuevamente
      setIsSubmitting(false);
    }
  };

  return (
    <LayoutReclutamiento
      title={"Reclutamiento"}
      description={"Únete a nuestro equipo de asesores inmobiliarios y conviértete en parte de una exitosa red de profesionales dedicados a brindar soluciones inmobiliarias excepcionales. Descubre oportunidades de crecimiento, capacitación especializada y un entorno colaborativo en el mundo de bienes raíces."}
    >
      <section className="container mx-auto grid grid-cols-2 max-lg:grid-cols-1">
        <div className='flex justify-center'>
          <video src="/video/reclutamiento.mp4" autoPlay controls playsInline controlsList="nodownload" poster="/img/reclutamiento/portada-reclutamiento.jpg"></video>
        </div>
        <div className="flex flex-col items-center justify-center max-lg:hidden">
            <h1 className="uppercase text-tercero font-bold text-3xl letter-spacing-25">Asesores inmobiliarios</h1>
            <p className="uppercase letter-spacing-25 py-12">¡Estamos contratando!</p>
            <p>Buscamos personas con liderazgo, ambición y determinación</p>
            <p>para alcanzar el éxito.</p>
            <h2 className="uppercase text-tfs letter-spacing-25 font-bold text-xl text-center pt-60 pb-24">¡Califica para una de<br/>nuestras vacantes!</h2>
            <a href="#formulario" className="uppercase letter-spacing-25 text-tercero bg-tfs font-bold py-2 px-10 rounded-md">¡Postúlate ahora!</a>
        </div>
      </section>
      <section className="bg-header">
        <div className="container mx-auto py-20">
            <h3 className="uppercase text-white letter-spacing-25 font-bold text-3xl text-center pb-5 max-lg:hidden">Es tu momento de crecer</h3>
            <h3 className="uppercase text-white letter-spacing-25 font-bold text-base text-center pb-5 lg:hidden">Asesores inmobiliarios</h3>
            <p className="text-white letter-spacing-25 uppercase text-center lg:pb-16 max-lg:pb-20">¿Qué te ofrecemos?</p>
            <Galeria/>
            <div className="flex justify-center text-tfs text-2xl gap-4 pt-11">
              <a href="https://www.youtube.com/@tulumfromskyrealtors5181" target="_blank"><FaYoutube className="hover"/></a>
              <a href="https://www.facebook.com/tulumfromskyrealtors/" target="_blank"><FaFacebookF className="hover"/></a>
              <a href="https://www.instagram.com/tulumfromsky/" target="_blank"><FaInstagram className="hover"/></a>
              <a href="https://twitter.com/FromskyTulum" target="_blank"><FaXTwitter className="hover"/></a>
              <a href="https://www.pinterest.com.mx/Tulumfromsky/" target="_blank"><FaPinterestP className="hover"/></a>
              <a href="https://www.tiktok.com/@tulumfromsky" target="_blank"><FaTiktok className="hover"/></a>
              <a href="https://www.linkedin.com/company/40900945/admin/" target="_blank"><FaLinkedinIn className="hover"/></a>
            </div>
            <div className="flex justify-center lg:pt-24 max-lg:pt-20">
              <a href="#form" className="text-tercero bg-tfs py-2 px-10 uppercase font-bold letter-spacing-25 rounded-md hover-bg">¡Postúlate ahora!</a>
            </div>
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
            <Link href={'/reclutamiento'} className="text-tercero uppercase letter-spacing-25 font-bold bg-tfs py-3 px-12 rounded-md hover-bg">¡Postúlate ahora!</Link>
          </div>
        </div>
      </div>
      <section className="py-28 max-lg:py-9">
        <h3 className="text-center text-tercero uppercase letter-spacing-25 font-bold text-2xl max-lg:text-lg pb-5">Forma parte del equipo</h3>
        <p className="uppercase letter-spacing-25 text-center">Cumple tu sueño y alcanza tu máximo potencial</p>
        <form onSubmit={handleSubmit} className='flex flex-col items-center pt-24 max-lg:pt-6' encType="multipart/form-data">
          <div className="lg:w-3/4 grid px-3 lg:grid-cols-2 gap-3">
            <div className='lg:col-span-2'>
              <label htmlFor="nombre">Nombre completo: <span className='text-red-600'>*</span></label>
              <input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre completo" className="w-full rounded-md text-tercero bg-decimo p-3" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="email">Correo: <span className='text-red-600'>*</span></label>
              <input type="email" name="email" id="email" placeholder="Escribe tu correo" className="w-full rounded-md bg-decimo text-tercero p-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className='lg:col-span-1'>
              <label htmlFor="tel">Teléfono: <span className='text-red-600'>*</span></label>
              <input type="tel" name="tel" id="tel" placeholder="Escribe tu teléfono" className="w-full rounded-md bg-decimo text-tercero p-3" value={tel} onChange={(e) => setTel(e.target.value)} required/>
            </div>
            <div className='lg:col-span-1'>
              <label htmlFor="curriculum">Mándanos tu CV:</label>
              <input type="file" name='curriculum' id='curriculum' onChange={handleArchivoChange} className="block w-full text-base text-tercero cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-base"/>
            </div>
            <div className='lg:col-span-1'>
              <label htmlFor="experiencia" className='block'>¿Cuentas con experiencia? <span className='text-red-600'>*</span></label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name='experiencia'
                  className="form-radio h-5 w-5"
                  value="Sí"
                  checked={experiencia === 'Sí'}
                  onChange={handleRadio1Change}
                  required
                />
                <span className="ml-2">Sí</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name='experiencia'
                  className="form-radio h-5 w-5"
                  value="No"
                  checked={experiencia === 'No'}
                  onChange={handleRadio1Change}
                  required
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            <div className='lg:col-span-1'>
              <label htmlFor="raices" className='block'>¿Cuéntas con experiencia en bienes raíces? <span className='text-red-600'>*</span></label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name='raices'
                  className="form-radio h-5 w-5"
                  value="Sí"
                  checked={raices === 'Sí'}
                  onChange={handleRadio2Change}
                  required
                />
                <span className="ml-2">Sí</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name='raices'
                  className="form-radio h-5 w-5"
                  value="No"
                  checked={raices === 'No'}
                  onChange={handleRadio2Change}
                  required
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            <div className='lg:col-span-2'>
              <label htmlFor="idioma" className='block'>¿Cuál es tu nivel de inglés? <span className='text-red-600'>*</span></label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name='idioma'
                  className="form-radio h-5 w-5"
                  value="Básico"
                  checked={idioma === 'Básico'}
                  onChange={handleRadio3Change}
                  required
                />
                <span className="ml-2">Básico</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name='idioma'
                  className="form-radio h-5 w-5"
                  value="Intermedio"
                  checked={idioma === 'Intermedio'}
                  onChange={handleRadio3Change}
                  required
                />
                <span className="ml-2">Intermedio</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name='idioma'
                  className="form-radio h-5 w-5"
                  value="Avanzado"
                  checked={idioma === 'Avanzado'}
                  onChange={handleRadio3Change}
                  required
                />
                <span className="ml-2">Avanzado</span>
              </label>
            </div>
            <div className='lg:col-span-2'>
              <label htmlFor="sucursal" className='block'>Sucursal a la que aplicas (Presencial tiempo completo. Residencia en sucursal obligatoria.): <span className='text-red-600'>*</span></label>
              <select name="sucursal" id="sucursal" className="w-full rounded-md bg-decimo p-3" value={sucursal} onChange={(e) => setSucursal(e.target.value)} required>
                <option value="">-- Selecciona una opción --</option>
                <option value="Riviera Maya">Riviera Maya</option>
                <option value="Los Cabos">Los Cabos</option>
                <option value="Mérida">Mérida</option>
                <option value="Tulum">Tulum</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="mensaje" className='block'>Mensaje: </label>
              <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder="¡Cuéntanos que te motiva a ser parte de nuestro equipo!" className="w-full rounded-md bg-decimo p-3" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
            </div>
            {/* Campos ocultos */}
            <div className='hidden'>
              <input type="hidden" name="fechaEnvio" value={fechaEnvio} />
              <input type="hidden" name="horaEnvio" value={horaEnvio} />
              <input type="hidden" name="paginaEnvio" value={paginaEnvio} />
              <input type="hidden" name="formularioOrigen" value={formularioOrigen}/>
            </div>
            <div className="lg:col-span-2 text-center">
              {mensajeRespuesta && (
                <p className={`${esExito ? "text-green-600" : "text-red-600"} pb-2`}>
                  {mensajeRespuesta}
                </p>
              )}
              <input type="submit" name="submit" id="submit" disabled={isSubmitting} className="py-3 px-24 bg-tfs uppercase text-white font-bold letter-spacing-25 rounded-md hover-bg cursor-pointer"/>
            </div>
          </div>
        </form>
      </section>
    </LayoutReclutamiento>
  );
}

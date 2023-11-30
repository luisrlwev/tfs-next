import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaPinterestP, FaTiktok, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  // Campos formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
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

  useEffect(() => {
    const fechaActual = new Date();
    setFechaEnvio(fechaActual.toLocaleDateString());
    setHoraEnvio(fechaActual.toLocaleTimeString());
    setPaginaEnvio(window.location.href);
    setFormularioOrigen('Footer');
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
    setEmail('');
    setTel('');
    setMensaje('');
    setCondiciones(true); // o false, dependiendo de tu caso

    try {
      const respuesta = await fetch('/api/form-modal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, tel, mensaje, condiciones, fechaEnvio, horaEnvio, paginaEnvio, formularioOrigen }),
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
    <footer>
      <div className="bg-header py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 container mx-auto">
          <div>
            <h3 className="text-tfs text-center text-xl uppercase font-bold letter-spacing-25 pb-2">Contáctanos</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid px-3 lg:grid-cols-2 gap-3">
                <div>
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre:" className="w-full rounded-md bg-cuarto text-white p-3" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div>
                  <input type="tel" name="tel" id="tel" placeholder="Teléfono:" className="w-full rounded-md bg-cuarto text-white p-3" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="lg:col-span-2">
                  <input type="email" name="email" id="email" placeholder="Email:" className="w-full rounded-md bg-cuarto text-white p-3" value={tel} onChange={(e) => setTel(e.target.value)} required/>
                </div>
                <div className="lg:col-span-2">
                  <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder="¿Qué tipo de propiedad buscas?" className="w-full rounded-md bg-cuarto text-white p-3" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                </div>
                <div className="lg:col-span-2 text-white">
                  <input type="checkbox" name="condiciones" id="condiciones" checked={condiciones} onChange={handleCheckboxChange} required/> Acepto los <Link href="/aviso-de-privacidad" target="_blank" className="text-tfs hover">términos y condiciones</Link>
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
                  <input type="submit" name="submit" id="submit" disabled={isSubmitting} className="py-2 px-12 bg-tfs uppercase text-white font-bold letter-spacing-25 rounded-md hover-bg cursor-pointer"/>
                </div>
              </div>
            </form>
          </div>
          <div className="grid content-center px-3 py-8">
            <p className="text-center text-white uppercase font-bold letter-spacing-25 pb-4 lg:pb-8 w-full text-lg lg:text-base">Licencias Certificadas</p>
            <div className="grid grid-cols-3 justify-items-center items-center">
              <Image src={'/img/agente-inmobiliario-persona-juridica-2.png'} width={131} height={72} alt="Agente inmobiliario persona juridica"/>
              <Image src={'/img/AMPI-los-cabos-2.png'} width={131} height={126} alt="AMPI Los Cabos"/>
              <Image src={'/img/credencial-asesor-2.png'} width={131} height={76} alt="Credencial de asesor"/>
            </div>
          </div>
          <div className="grid justify-center items-center">
            <Link href={'/'} className="h-max pb-10"><Image src={'/img/logo.svg'} width={354} height={201} alt="Logo TFS"/></Link>
            <div className="grid grid-cols-7 justify-items-center text-tfs text-3xl h-max pb-8 lg:pb-0">
              <a href="https://www.youtube.com/@tulumfromskyrealtors5181" target="_blank"><FaYoutube className="hover"/></a>
              <a href="https://www.facebook.com/tulumfromskyrealtors/" target="_blank"><FaFacebookF className="hover"/></a>
              <a href="https://www.instagram.com/tulumfromsky/" target="_blank"><FaInstagram className="hover"/></a>
              <a href="https://twitter.com/FromskyTulum" target="_blank"><FaXTwitter className="hover"/></a>
              <a href="https://www.pinterest.com.mx/Tulumfromsky/" target="_blank"><FaPinterestP className="hover"/></a>
              <a href="https://www.tiktok.com/@tulumfromsky" target="_blank"><FaTiktok className="hover"/></a>
              <a href="https://www.linkedin.com/company/40900945/admin/" target="_blank"><FaLinkedinIn className="hover"/></a>
            </div>
            <div className="flex justify-center align-center text-tfs h-max">
              <a href="https://wa.me/529848035450" className="flex items-center w-fit h-fit hover"><FaWhatsapp className="pr-1 text-xl"/> +52 (984) 803 5450</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-center text-base py-4 bg-footer">
        <p className="font-bold uppercase text-footer letter-spacing-25 pb-2 text-xs lg:text-base">Tulumfromsky Realtors © 2023 Todos los derechos reservados JAH OLAM SA DE CV</p>
        <Link href={'/aviso-de-privacidad'} className="underline text-xs lg:text-base">Aviso de privacidad</Link>
      </div>
    </footer>
  );
}

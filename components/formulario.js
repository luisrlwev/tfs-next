import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import PhoneInput from 'react-phone-number-input';
import Link from "next/link";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import 'react-phone-number-input/style.css';

export default function Formulario({ show, onClose }) {
  // Inicializar el hook useTranslation
  const { t } = useTranslation();
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

  useEffect(() => {
    const fechaActual = new Date();
    setFechaEnvio(fechaActual.toLocaleDateString());
    setHoraEnvio(fechaActual.toLocaleTimeString());
    setPaginaEnvio(window.location.href);
    setFormularioOrigen('Pop Up');
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

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={onClose}>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 relative top-40 max-lg:top-10 mx-auto p-5 border w-modal shadow-lg bg-modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2"><FaXmark className="text-2xl text-red-600"/></button>
        <div className="p-4">
            <h2 className='uppercase text-4xl text-secondary font-bold letter-spacing-25 text-center pb-3'>{t('dudas')}</h2>
            <form className="w-full max-lg:pb-8 text-black" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                <div className="col-span-1">
                  <input type="text" name="nombre" id="nombre" placeholder={t('nombre_completo')} className="w-full rounded-md bg-decimo text-secondary placeholder:text-gray-600 p-2" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                <div className="col-span-1">
                  <PhoneInput international defaultCountry="MX" type="tel" name="tel" id="tel" placeholder={t('telefono_completo')} className="w-full rounded-md bg-decimo text-secondary placeholder:text-gray-600 p-2" value={tel} onChange={setTel} required/>
                </div>
                <div className="col-span-1">
                  <input type="email" name="email" id="email" placeholder={t('email')} className="w-full rounded-md bg-decimo text-secondary placeholder:text-gray-600 p-2" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-span-1">
                  <label for="sucursal" class="sr-only">Ciudad de interés</label>
                  <select name="sucursal" id="sucursal" className="w-full rounded-md bg-decimo text-secondary placeholder:text-gray-600 p-2" value={sucursal} onChange={(e) => setSucursal(e.target.value)} required>
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
                  <select name="tipo" id="tipo" className="w-full rounded-md bg-decimo text-secondary placeholder:text-gray-600 p-2" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                      <option value="">{t('tipo_unidad')}</option>
                      <option value="Departamento">{t('departamento')}</option>
                      <option value="Casa">{t('casa')}</option>
                      <option value="Lote">{t('lote')}</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <textarea name="mensaje" id="mensaje" cols="30" rows="2" placeholder={t('tipo_propiedad')} className="w-full rounded-md bg-decimo text-secondary placeholder:text-gray-600 p-2" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                </div>
                <div className="text-secondary">
                  <label for="condicones" class="sr-only">Condiciones</label>
                  <input type="checkbox" name="condiciones" id="condiciones" checked={condiciones} onChange={handleCheckboxChange} required/> {t('acepto')} <Link href="/aviso-de-privacidad" className="text-tfs hover">{t('terminos')}</Link>
                </div>
                {/* Campos ocultos */}
                <div className='hidden'>
                  <input type="hidden" name="fechaEnvio" value={fechaEnvio} />
                  <input type="hidden" name="horaEnvio" value={horaEnvio} />
                  <input type="hidden" name="paginaEnvio" value={paginaEnvio} />
                  <input type="hidden" name="formularioOrigen" value={formularioOrigen}/>
                </div>
                <div className="text-center col-span-1">
                  {mensajeRespuesta && (
                    <p className={`${esExito ? "text-green-600" : "text-red-600"} pb-2`}>
                      {mensajeRespuesta}
                    </p>
                  )}
                  <input type="submit" name="submit" id="submit" value={t('enviar')} disabled={isSubmitting} className="py-2 px-12 bg-tfs uppercase text-tercero font-bold letter-spacing-25 rounded-md hover-bg cursor-pointer"/>
                </div>
              </div>
            </form>
        </div>
        <div className="flex max-lg:hidden">
            <Image src={'/img/portada-modal.webp'} width={415} height={490} alt="imagen modal" />
        </div>
      </div>
    </div>
  )
}

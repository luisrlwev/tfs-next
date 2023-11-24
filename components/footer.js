import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaPinterestP, FaTiktok, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="bg-header py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 container mx-auto">
          <div>
            <h3 className="text-tfs text-center text-xl uppercase font-bold letter-spacing-25 pb-2">Contáctanos</h3>
            <form>
              <div className="grid px-3 lg:grid-cols-2 gap-3">
                <div>
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre:" className="w-full rounded-md bg-cuarto text-white p-3" required/>
                </div>
                <div>
                  <input type="tel" name="tel" id="tel" placeholder="Teléfono:" className="w-full rounded-md bg-cuarto text-white p-3" required/>
                </div>
                <div className="lg:col-span-2">
                  <input type="email" name="email" id="email" placeholder="Email:" className="w-full rounded-md bg-cuarto text-white p-3" required/>
                </div>
                <div className="lg:col-span-2">
                  <textarea name="mensaje" id="mensaje" cols="30" rows="3" placeholder="¿Qué tipo de propiedad buscas?" className="w-full rounded-md bg-cuarto text-white p-3" required></textarea>
                </div>
                <div className="lg:col-span-2 text-white">
                  <input type="checkbox" name="condiciones" id="condiciones" required/> Acepto los <Link href="/aviso-de-privacidad" target="_blank" className="text-tfs hover">términos y condiciones</Link>
                </div>
                <div className="lg:col-span-2 text-center">
                  <input type="submit" name="" id="" className="py-2 px-12 bg-tfs uppercase text-white font-bold letter-spacing-25 rounded-md hover-bg cursor-pointer"/>
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

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";


export default function HeaderReclutamiento() {
  return (
    <header className="bg-white drop-shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center text-menu text-center font-semibold uppercase">
         {/* ... Logo y botón de menú ... */}
        <Link href={'/'}>
          <Image src="/img/logo-2.svg" alt="Tulumfromsky Logo" className="px-5" width={140} height={70}/>
        </Link>
        {/* Menú de escritorio */}
        <nav className="flex items-center text-black">
            <p className="uppercase letter-spacing-25 font-normal pr-3 text-base">Contáctanos</p>
            <div className='flex items-center text-xl gap-4'>
                <FaEnvelope /> | <FaWhatsapp />
            </div>
        </nav>
      </div>
    </header>
  );
}

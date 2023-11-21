import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import Navegacion from './navegacion';

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-header text-white p-4">
      <div className="container mx-auto flex justify-between items-center text-menu text-center font-semibold uppercase">
         {/* ... Logo y botón de menú ... */}
        <Link href={'/'}>
          <Image src="/img/logo.svg" alt="Tulumfromsky Logo" width={123} height={70}/>
        </Link>
        {/* Menú de escritorio */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <Navegacion/>
          </ul>
        </nav>
        <div className="hidden lg:flex">
          <p className="text-tfs">ES</p>|
          <Link href={'/en/'}>EN</Link>
        </div>
        {/* Botón de menú móvil */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-tfs lg:hidden">
          <MdMenu className='text-4xl'/>
        </button>
        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <nav className="absolute top-24 left-0 w-full lg:hidden bg-header z-20">
            <ul className="flex flex-col items-center gap-3">
              <Navegacion/>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

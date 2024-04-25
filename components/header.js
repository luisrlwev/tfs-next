import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import Navegacion from './navegacion';

export default function Header() {

  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

<<<<<<< Updated upstream
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
=======
  const cambiarIdioma = (idioma) => {
    const rutaActual = router.pathname;
    router.push(rutaActual, rutaActual, { locale: idioma });
  };
>>>>>>> Stashed changes

  return (
    <header className="bg-header text-white p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center text-menu text-center font-semibold uppercase">
         {/* ... Logo y botón de menú ... */}
        <Link href={'/'}>
          <Image src="/img/logo.svg" alt="Fromsky Logo" width={123} height={70}/>
        </Link>
        {/* Menú de escritorio */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <Navegacion/>
          </ul>
        </nav>
        <div className="hidden lg:flex">
<<<<<<< Updated upstream
            {/* Muestra el idioma actual y proporciona enlaces para cambiar */}
            <Link href={{ pathname, query }} as={asPath} locale="es" className={`mr-2 ${locale === 'es' ? 'text-tfs font-bold' : ''}`}>
              ES
            </Link>
            |
            <Link href={{ pathname, query }} as={asPath} locale="en" className={`ml-2 ${locale === 'en' ? 'text-tfs font-bold' : ''}`}>
              EN
            </Link>
=======
          <button onClick={() => cambiarIdioma('es')} className={router.locale === 'es' ? 'text-tfs' : ''}>
            ES
          </button>
          |
          <button onClick={() => cambiarIdioma('en')} className={router.locale === 'en' ? 'text-tfs' : ''}>
            EN
          </button>
>>>>>>> Stashed changes
        </div>
        {/* Botón de menú móvil */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-tfs lg:hidden">
          <span class="sr-only">Menú</span>
          <MdMenu className='text-4xl'/>
        </button>
        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <nav className="absolute top-20 left-0 w-full lg:hidden bg-header z-20">
            <ul className="flex flex-col items-center gap-3">
              <Navegacion/>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

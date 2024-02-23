import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";

export default function HeaderFranquiciaCancun() {

  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  return (
    <header className="bg-header text-white p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center text-menu text-center font-semibold uppercase">
         {/* ... Logo y botón de menú ... */}
        <Link href={'/'}>
          <Image src="/img/logo.svg" alt="Fromsky Logo" width={123} height={70}/>
        </Link>
        {/* Menú de escritorio */}
        <nav className="flex items-center text-black">
            <p className="uppercase letter-spacing-25 font-normal text-base">{t('contactanos')}</p>
            <div className='flex items-center text-xl gap-2 px-4 max-lg:px-2'>
                <a href="mailto:sales@tulumfromskyrealtors.com"><FaEnvelope /></a><a href="https://wa.me/529841798206" target='_blank'><FaWhatsapp /></a>
            </div>
            {/* Muestra el idioma actual y proporciona enlaces para cambiar */}
            <Link href={{ pathname, query }} as={asPath} locale="es" className={`mr-2 ${locale === 'es' ? 'text-tfs font-bold' : ''}`}>
              ES
            </Link>
            |
            <Link href={{ pathname, query }} as={asPath} locale="en" className={`ml-2 ${locale === 'en' ? 'text-tfs font-bold' : ''}`}>
              EN
            </Link>
        </nav>
      </div>
    </header>
  );
}

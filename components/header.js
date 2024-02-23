import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import Navegacion from './navegacion';

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  return (
    <header className="bg-header text-white p-4 sticky top-0 z-40">
      <!-- Meta Pixel Code -->
      <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '3565714413690137');
      fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=3565714413690137&ev=PageView&noscript=1"
      /></noscript>
      <!-- End Meta Pixel Code -->
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
            {/* Muestra el idioma actual y proporciona enlaces para cambiar */}
            <Link href={{ pathname, query }} as={asPath} locale="es" className={`mr-2 ${locale === 'es' ? 'text-tfs font-bold' : ''}`}>
              ES
            </Link>
            |
            <Link href={{ pathname, query }} as={asPath} locale="en" className={`ml-2 ${locale === 'en' ? 'text-tfs font-bold' : ''}`}>
              EN
            </Link>
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

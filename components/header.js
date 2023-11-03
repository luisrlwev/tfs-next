import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {

  const router = useRouter()

  return (
    <header className="bg-header text-white p-4">
      <div className="container mx-auto flex justify-between items-center text-menu text-center font-semibold uppercase">
        <Link href={'/'}>
          <Image src="/img/logo.svg" alt="Tulumfromsky Logo" width={123} height={70}/>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/departamentos" className={ router.pathname === '/departamentos' ? 'text-tfs' : 'hover'}>
                Departamentos
              </Link>
            </li>
            <li>
              <Link href="/lotes" className={ router.pathname === '/lotes' ? 'text-tfs' : 'hover'}>
                Lotes
              </Link>
            </li>
            <li>
              <Link href="/casas" className={ router.pathname === '/casas' ? 'text-tfs' : 'hover'}>
                Casas
              </Link>
            </li>
            <li>
              <Link href="/merida" className={ router.pathname === '/merida' ? 'text-tfs' : 'hover'}>
                Mérida
              </Link>
            </li>
            <li>
              <Link href="/los-cabos" className={ router.pathname === '/los-cabos' ? 'text-tfs' : 'hover'}>
                Los Cabos
              </Link>
            </li>
            <li>
              <Link href="/constructora" className={ router.pathname === '/constructora' ? 'text-tfs' : 'hover'}>
                Constructora
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className={ router.pathname === '/nosotros' ? 'text-tfs' : 'hover'}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/blog" className={ router.pathname === '/blog' ? 'text-tfs' : 'hover'}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className={ router.pathname === '/contacto' ? 'text-tfs' : 'hover'}>
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/franquicias" className={ router.pathname === '/franquicias' ? 'text-tfs' : 'hover'}>
                Franquicias
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <p className="text-tfs">ES</p>|
          <Link href={'/en/'}>EN</Link>
        </div>
      </div>
    </header>
  );
}

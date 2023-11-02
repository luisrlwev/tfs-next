import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-header text-white p-4">
      <div className="container mx-auto flex justify-between items-center text-menu">
        <Link href={'/'}>
          <Image
            src="/img/logo.svg"
            alt="Tulumfromsky Logo"
            width={123}
            height={70}
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/departamentos" className="px-1 py-2 rounded">
                Departamentos
              </Link>
            </li>
            <li>
              <Link href="/lotes" className="px-1 py-2 rounded">
                Lotes
              </Link>
            </li>
            <li>
              <Link href="/casas" className="px-1 py-2 rounded">
                Casas
              </Link>
            </li>
            <li>
              <Link href="/merida" className="px-1 py-2 rounded">
                Mérida
              </Link>
            </li>
            <li>
              <Link href="/los-cabos" className="px-1 py-2 rounded">
                Los Cabos
              </Link>
            </li>
            <li>
              <Link href="/constructora" className="px-1 py-2 rounded">
                Constructora
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="px-1 py-2 rounded">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/blog" className="px-1 py-2 rounded">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="px-1 py-2 rounded">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/franquicias" className="px-1 py-2 rounded">
                Franquicias
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <p className="lang-active">ES</p>|
          <Link href={'/en/'}>EN</Link>
        </div>
      </div>
    </header>
  );
}

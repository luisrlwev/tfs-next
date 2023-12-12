import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from 'next-i18next'; // Importar useTranslation

export default function Navegacion() {
    const router = useRouter()
    const { t } = useTranslation(); // Inicializar el hook useTranslation
    // Depurar la traducción
    console.log("Traducción de 'departamentos':", t('departamentos'));
  return (
    <>
      <li className="pb-2 lg:py-0">
        <Link href="/departamentos" className={ router.pathname === '/departamentos' ? 'text-tfs' : 'hover'}>
          {t('departamentos')} {/* Usar t para traducir */}
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/lotes" className={ router.pathname === '/lotes' ? 'text-tfs' : 'hover'}>
          Lotes
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/casas" className={ router.pathname === '/casas' ? 'text-tfs' : 'hover'}>
          Casas
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/merida" className={ router.pathname === '/merida' ? 'text-tfs' : 'hover'}>
          Mérida
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/los-cabos" className={ router.pathname === '/los-cabos' ? 'text-tfs' : 'hover'}>
          Los Cabos
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/constructora" className={ router.pathname === '/constructora' ? 'text-tfs' : 'hover'}>
          Constructora
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/nosotros" className={ router.pathname === '/nosotros' ? 'text-tfs' : 'hover'}>
          Nosotros
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/blog" className={ router.pathname === '/blog' ? 'text-tfs' : 'hover'}>
          Blog
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/contacto" className={ router.pathname === '/contacto' ? 'text-tfs' : 'hover'}>
          Contacto
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/franquicias" className={ router.pathname === '/franquicias' ? 'text-tfs' : 'hover'}>
          Franquicias
        </Link>
      </li>
      {/* Repite para otros enlaces */}
    </>
  )
}

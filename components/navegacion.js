import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from 'next-i18next'

export default function Navegacion() {
    const router = useRouter()
    const { locale, pathname, asPath, query } = router;
    const { t } = useTranslation(); // Inicializar el hook useTranslation
  return (
    <>
      <li className="pb-2 lg:py-0">
        <Link href="/departamentos" className={ router.pathname === '/departamentos' ? 'text-tfs' : 'hover'}>
          {t('departamentos')}
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/casas" className={ router.pathname === '/casas' ? 'text-tfs' : 'hover'}>
        {t('casas')}
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/cancun" className={ router.pathname === '/cancun' ? 'text-tfs' : 'hover'}>
          Cancún
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/merida" className={ router.pathname === '/merida' ? 'text-tfs' : 'hover'}>
          Mérida
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/vallarta" className={ router.pathname === '/vallarta' ? 'text-tfs' : 'hover'}>
          Vallarta
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/los-cabos" className={ router.pathname === '/los-cabos' ? 'text-tfs' : 'hover'}>
          Los Cabos
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/constructora" className={ router.pathname === '/constructora' ? 'text-tfs' : 'hover'}>
        {t('constructora')}
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/nosotros" className={ router.pathname === '/nosotros' ? 'text-tfs' : 'hover'}>
        {t('nosotros')}
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/blog" className={ router.pathname === '/blog' ? 'text-tfs' : 'hover'}>
          Blog
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/contacto" className={ router.pathname === '/contacto' ? 'text-tfs' : 'hover'}>
        {t('contacto')}
        </Link>
      </li>
      <li className="pb-2 lg:py-0">
        <Link href="/franquicias" className={ router.pathname === '/franquicias' ? 'text-tfs' : 'hover'}>
        {t('franquicias')}
        </Link>
      </li>
      <li className="pb-2 lg:py-0 hidden max-lg:flex">
        {/* Muestra el idioma actual y proporciona enlaces para cambiar */}
        <Link href={{ pathname, query }} as={asPath} locale="es" className={`mr-2 ${locale === 'es' ? 'text-tfs font-bold' : ''}`}>
          ES
        </Link>
        |
        <Link href={{ pathname, query }} as={asPath} locale="en" className={`ml-2 ${locale === 'en' ? 'text-tfs font-bold' : ''}`}>
          EN
        </Link>
      </li>
    </>
  )
}
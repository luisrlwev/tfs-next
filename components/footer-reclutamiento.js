import Link from "next/link";
import { useTranslation } from 'next-i18next'

export default function FooterReclutamiento() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  return (
    <footer>
      <div className="text-white text-center text-base py-4 bg-footer">
        <p className="font-bold uppercase text-footer letter-spacing-25 pb-2 text-xs lg:text-base">{t('footer')}</p>
        <Link href={'/aviso-de-privacidad'} className="underline text-xs lg:text-base">{t('aviso')}</Link>
      </div>
    </footer>
  );
}
